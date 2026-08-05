import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

type Variant = "primary" | "inverse" | "outline" | "outline-dark";

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  icon?: boolean;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

type Props = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/20",
  inverse: "bg-white text-dark hover:bg-white/90",
  outline:
    "border border-border text-text hover:border-primary/40 hover:text-primary bg-transparent",
  "outline-dark":
    "border border-white/15 text-white/60 hover:text-white hover:border-white/35 bg-transparent",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-6 py-3.5 disabled:opacity-60 disabled:pointer-events-none";

const Button = ({ children, variant = "primary", icon = true, className = "", ...rest }: Props) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, target, rel } = rest as ButtonAsLink;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
        {icon && <MdArrowOutward className="text-base" aria-hidden="true" />}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = rest as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {icon && <MdArrowOutward className="text-base" aria-hidden="true" />}
    </button>
  );
};

export default Button;
