import { socials } from "../siteConfig";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Book", href: "#booking" },
    { label: "Contact", href: "#contact" },
];

const linkClass =
    "text-[0.7rem] uppercase tracking-[0.28em] text-cream/60 transition-colors duration-300 hover:text-gold";

export default function Footer() {
    return (
        <footer className="border-t border-cream/10 bg-char">
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
                <div className="grid gap-14 md:grid-cols-12 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <a
                            href="#home"
                            className="font-serif text-3xl tracking-[0.35em] text-cream"
                        >
                            LUXE<span className="text-gold"> STUDIO</span>
                        </a>
                        <p className="mt-6 max-w-xs leading-relaxed text-cream/50">
                            A private hair atelier. Considered craft, unhurried appointments
                            and results that feel entirely your own.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav aria-label="Footer" className="md:col-span-3">
                        <p className="mb-6 text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                            Explore
                        </p>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className={linkClass}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social */}
                    <div className="md:col-span-4">
                        <p className="mb-6 text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                            Follow
                        </p>
                        <ul className="space-y-4">
                            {socials.map((social) => (
                                <li key={social.label}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={linkClass}
                                    >
                                        {social.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row md:justify-between">
                    <p>© {new Date().getFullYear()} LUXE STUDIO. All rights reserved.</p>
                    <p>A portfolio project. Names, prices and reviews are sample content.</p>
                </div>
            </div>
        </footer>
    );
}