// Captures crisp desktop and mobile screenshots of each portfolio site and
// writes them to public/work/, then updates app/lib/screens.ts.
//
// Usage (from the project folder):
//   npm run capture:screens            # all sites
//   npm run capture:screens -- rdj-estates clwcf   # only some
//
// It uses the Microsoft Edge (or Chrome) already installed on this computer
// through playwright-core, so no extra browser download is needed.
import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const SITES = process.env.CAPTURE_SITES ? JSON.parse(process.env.CAPTURE_SITES) : {
  "rdj-estates": "https://rdjestates.com/",
  clwcf: "https://clwcf-ngo.org/",
  werunam: "https://werunam.com/",
  "scris-enterprise": "https://scris-enterprise.netlify.app/",
  "chris-global": "https://chrisglobal.netlify.app/",
  "najec-fmcg": "https://najecfmcg.com/",
};

const OUT_DIR = path.join(process.cwd(), "public", "work");
const MANIFEST = path.join(process.cwd(), "app", "lib", "screens.ts");

// Floating chat bubbles, cookie bars and pop-ups that would clutter a portfolio shot.
const HIDE_CSS = `
  [id*="tidio"], [class*="whatsapp"], [id*="whatsapp"], [class*="wa-chat"], .joinchat,
  [class*="cookie"], [id*="cookie"], [class*="Cookie"], .cky-consent-container,
  #crisp-chatbox, .intercom-lightweight-app, iframe[title*="chat" i],
  [class*="popup"][style*="fixed"], .elementor-popup-modal { display: none !important; }
  html { scroll-behavior: auto !important; }
`;

async function launch() {
  for (const channel of ["msedge", "chrome", undefined]) {
    try {
      return await chromium.launch(channel ? { channel } : {});
    } catch {
      /* try next */
    }
  }
  throw new Error(
    "Couldn't start Microsoft Edge or Google Chrome. Install one of them, or run `npx playwright install chromium`."
  );
}

async function capture(browser, url, file, viewport, scale) {
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: scale,
    isMobile: viewport.width < 600,
    hasTouch: viewport.width < 600,
    userAgent:
      viewport.width < 600
        ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
        : undefined,
  });
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
  } catch {
    await page.goto(url, { waitUntil: "load", timeout: 45000 });
  }
  await page.addStyleTag({ content: HIDE_CSS }).catch(() => {});
  // Scroll through once so lazy images and entrance animations settle.
  await page.evaluate(async () => {
    for (let y = 0; y < Math.min(document.body.scrollHeight, 4000); y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1800);
  await page.screenshot({ path: file, type: "jpeg", quality: 82 });
  await context.close();
}

const only = process.argv.slice(2);
const targets = Object.entries(SITES).filter(([slug]) => !only.length || only.includes(slug));

fs.mkdirSync(OUT_DIR, { recursive: true });
const browser = await launch();
const results = {};

for (const [slug, url] of targets) {
  const desktop = path.join(OUT_DIR, `${slug}.jpg`);
  const mobile = path.join(OUT_DIR, `${slug}-mobile.jpg`);
  try {
    process.stdout.write(`${slug}: desktop… `);
    await capture(browser, url, desktop, { width: 1440, height: 900 }, 2);
    process.stdout.write("mobile… ");
    await capture(browser, url, mobile, { width: 390, height: 844 }, 3);
    results[slug] = { desktop: `/work/${slug}.jpg`, mobile: `/work/${slug}-mobile.jpg` };
    console.log("done");
  } catch (err) {
    console.log(`failed (${err.message.split("\n")[0]})`);
  }
}
await browser.close();

// Merge with existing entries so a partial run doesn't drop other projects.
let existing = {};
if (fs.existsSync(MANIFEST)) {
  const match = fs.readFileSync(MANIFEST, "utf8").match(/screens: Record<string, ProjectScreens> = (\{[\s\S]*\});/);
  if (match) {
    try {
      existing = Function(`return (${match[1]})`)();
    } catch {
      /* start fresh */
    }
  }
}
const merged = { ...existing, ...results };

const body = Object.entries(merged)
  .map(([slug, s]) => {
    const parts = Object.entries(s).map(([k, v]) => `${k}: "${v}"`).join(", ");
    return `  ${JSON.stringify(slug)}: { ${parts} },`;
  })
  .join("\n");

fs.writeFileSync(
  MANIFEST,
  `// High-resolution captures of each project's live site, used by the homepage
// showcase and the case-study pages. Regenerate with:
//   npm run capture:screens
// (see scripts/capture-screens.mjs). Projects missing here fall back to their
// \`image\` in projects.ts.
export type ProjectScreens = { desktop?: string; mobile?: string };

export const screens: Record<string, ProjectScreens> = {
${body}
};
`
);
console.log(`\nUpdated ${path.relative(process.cwd(), MANIFEST)} (${Object.keys(results).length} captured).`);
