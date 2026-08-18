import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface BaseProps {
  variant?: ButtonVariant;
  /** Use the light-on-dark treatment — for buttons over imagery or dark bands. */
  onDark?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface LinkProps extends BaseProps {
  /** Internal route (renders a router Link) or external URL / mailto / tel. */
  href: string;
  external?: boolean;
  onClick?: React.MouseEventHandler;
  type?: never;
  disabled?: never;
}

interface ActionProps extends BaseProps {
  href?: never;
  external?: never;
  onClick?: React.MouseEventHandler;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

type ButtonProps = LinkProps | ActionProps;

// The site uses exactly three button treatments. All share the hero button's
// geometry and lettering; only the fill changes.
const BASE =
  'inline-block text-center uppercase tracking-[0.2em] text-xs font-semibold px-8 py-4 transition-all duration-500';

const VARIANTS: Record<ButtonVariant, { light: string; dark: string }> = {
  // Solid gold — the main call to action.
  primary: {
    light: 'bg-pumphouse-gold text-pumphouse-charcoal hover:bg-pumphouse-charcoal hover:text-white',
    dark: 'bg-pumphouse-gold text-pumphouse-charcoal hover:bg-white',
  },
  // Outlined, as per the hero's Free Valuation button.
  secondary: {
    light: 'border border-pumphouse-charcoal/40 text-pumphouse-charcoal hover:bg-pumphouse-charcoal hover:text-white',
    dark: 'border border-white/50 text-white backdrop-blur-sm hover:bg-white hover:text-pumphouse-charcoal',
  },
  // Solid charcoal — used for the View Lots style block actions.
  tertiary: {
    light: 'bg-pumphouse-charcoal text-white hover:bg-pumphouse-gold hover:text-pumphouse-charcoal',
    dark: 'bg-white text-pumphouse-charcoal hover:bg-pumphouse-gold',
  },
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onDark = false,
  fullWidth = false,
  className = '',
  children,
  ...rest
}) => {
  const classes = [
    BASE,
    VARIANTS[variant][onDark ? 'dark' : 'light'],
    fullWidth ? 'block w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ('href' in rest && rest.href !== undefined) {
    const { href, external, onClick } = rest as LinkProps;
    const isRoute = !external && href.startsWith('/');

    if (isRoute) {
      return (
        <Link to={href} onClick={onClick} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={classes}
      >
        {children}
      </a>
    );
  }

  const { type = 'button', onClick, disabled } = rest as ActionProps;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

export default Button;
