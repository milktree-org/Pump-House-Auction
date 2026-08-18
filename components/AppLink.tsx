import React from 'react';
import { Link } from 'react-router-dom';

interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

// Renders a router <Link> for real internal routes, and a plain <a> for
// external destinations and for '#' placeholders (pages not yet built).
const AppLink: React.FC<AppLinkProps> = ({ href, external, children, ...rest }) => {
  const isRoute = !external && href.startsWith('/');

  if (isRoute) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
};

export default AppLink;
