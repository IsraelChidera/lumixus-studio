"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

type Props = {
  value?: string | null;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: readonly string[];
  placeholder: string;
  /** Accessible name; defaults to the placeholder */
  label?: string;
  name?: string;
};

/**
 * Dark, on-brand dropdown for the contact form. Follows the ARIA "select-only
 * combobox" pattern: arrow keys, Home/End, Enter/Space, Escape and typing a
 * letter all work, and a click outside closes it.
 */
const Select = ({ value, onChange, onBlur, options, placeholder, label, name }: Props) => {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();
  const listId = `${id}-list`;
  const optionId = (i: number) => `${id}-opt-${i}`;
  const selectedIndex = value ? options.indexOf(value) : -1;

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
        onBlur?.();
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, onBlur]);

  // Keep the highlighted option in view.
  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector<HTMLElement>(`#${CSS.escape(optionId(highlight))}`);
    el?.scrollIntoView({ block: "nearest" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, highlight]);

  const openList = () => {
    setHighlight(selectedIndex >= 0 ? selectedIndex : 0);
    setOpen(true);
  };

  const choose = (i: number) => {
    onChange(options[i]);
    setOpen(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlight((h) => Math.min(h + 1, options.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlight((h) => Math.max(h - 1, 0));
        break;
      case "Home":
        e.preventDefault();
        setHighlight(0);
        break;
      case "End":
        e.preventDefault();
        setHighlight(options.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        choose(highlight);
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        if (e.key.length === 1) {
          const k = e.key.toLowerCase();
          const start = (highlight + 1) % options.length;
          const order = [...options.slice(start), ...options.slice(0, start)];
          const hit = order.findIndex((o) => o.toLowerCase().startsWith(k));
          if (hit >= 0) setHighlight((start + hit) % options.length);
        }
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        name={name}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={label ?? placeholder}
        aria-activedescendant={open ? optionId(highlight) : undefined}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        onBlur={() => !open && onBlur?.()}
        className={`w-full flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-sm text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
          open ? "border-primary/60 bg-white/[0.08]" : "border-white/15 bg-white/5 hover:border-white/30"
        }`}
      >
        <span className={`truncate ${value ? "text-white" : "text-white/30"}`}>{value || placeholder}</span>
        <svg
          className={`w-4 h-4 flex-shrink-0 text-white/45 transition-transform duration-200 ${open ? "rotate-180 text-white/80" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        aria-label={label ?? placeholder}
        tabIndex={-1}
        hidden={!open}
        className="absolute z-30 left-0 right-0 mt-2 max-h-64 overflow-auto rounded-xl border border-white/10 bg-[#1a1930] p-1.5 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)]"
      >
        {options.map((opt, i) => {
          const selected = i === selectedIndex;
          const active = i === highlight;
          return (
            <li
              key={opt}
              id={optionId(i)}
              role="option"
              aria-selected={selected}
              onMouseEnter={() => setHighlight(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => choose(i)}
              className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm cursor-pointer select-none transition-colors ${
                active ? "bg-primary/25 text-white" : "text-white/75"
              } ${selected ? "font-semibold text-white" : ""}`}
            >
              {opt}
              {selected && (
                <svg className="w-4 h-4 text-[#a7a9ff] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
