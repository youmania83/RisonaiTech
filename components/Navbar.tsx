import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="nav">
        <Link className="brand" href="/">
          Rison AI Tech
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
