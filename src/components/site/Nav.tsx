import { useEffect, useState } from "react";
import { Flame, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#why", label: "Why Partner" },
  { href: "#process", label: "Process" },
  { href: "#products", label: "Products" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-gold/40 transition-all duration-300 ${
        scrolled ? "bg-navy-deep/85 backdrop-blur-md" : "bg-navy/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-gold-bright to-gold text-navy-deep shadow-[0_0_20px_rgba(245,200,66,0.4)]">
            <Flame className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold tracking-wider text-white">TEXARK</span>
            <span className="text-[10px] font-semibold tracking-[0.3em] text-gold">ENERGY LLC</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] font-semibold uppercase tracking-[0.18em] text-mist/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-outline-teal !py-2 !px-4 !text-[11px]">
            Get In Touch
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-mist"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/30 bg-navy-deep px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-semibold uppercase tracking-[0.18em] text-mist/85 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
