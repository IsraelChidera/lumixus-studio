// High-resolution captures of each project's live site, used by the homepage
// showcase and the case-study pages. Regenerate with:
//   npm run capture:screens
// (see scripts/capture-screens.mjs). Projects missing here fall back to their
// `image` in projects.ts.
export type ProjectScreens = { desktop?: string; mobile?: string };

export const screens: Record<string, ProjectScreens> = {
  clwcf: { desktop: "/work/clwcf.jpg" },
};
