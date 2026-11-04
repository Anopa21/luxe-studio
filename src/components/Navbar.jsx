import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    // Make the bar solid once the visitor scrolls down
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Stop the page scrolling behind the open mobile menu
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${open
                    ? "bg-ink py-4"
                    : scrolled
                        ? "bg-ink/90 py-4 backdrop-blur-md"
                        : "bg-transparent py-7"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={() => setOpen(false)}
                    className="font-serif text-2xl tracking-[0.35em] text-cream"
                >
                    LUXE<span className="text-gold"> STUDIO</span>
                </a>

                {/* Desktop links (hidden on small screens) */}
                <ul className="hidden items-center gap-10 lg:flex">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="relative text-[0.7rem] uppercase tracking-[0.28em] text-cream/80 transition-colors duration-300 hover:text-gold after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#booking"
                            className="border border-gold px-6 py-3 text-[0.7rem] uppercase tracking-[0.28em] text-gold transition-colors duration-500 hover:bg-gold hover:text-ink"
                        >
                            Book
                        </a>
                    </li>
                </ul>

                {/* Hamburger button (only on small screens) */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="relative z-50 flex h-10 w-10 flex-col items-end justify-center gap-[7px] lg:hidden"
                >
                    <span
                        className={`block h-px bg-cream transition-all duration-300 ${open ? "w-7 translate-y-[4px] rotate-45" : "w-7"
                            }`}
                    />
                    <span
                        className={`block h-px bg-cream transition-all duration-300 ${open ? "w-7 -translate-y-[4px] -rotate-45" : "w-4"
                            }`}
                    />
                </button>
            </nav>

            {/* Full-screen mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="fixed inset-0 -z-10 flex flex-col justify-center bg-ink px-8 lg:hidden"
                    >
                        <ul className="space-y-6">
                            {links.map((link, i) => (
                                <motion.li
                                    key={link.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.07, duration: 0.6 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="font-serif text-5xl font-light text-cream transition-colors hover:text-gold"
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                        <a
                            href="#booking"
                            onClick={() => setOpen(false)}
                            className="mt-12 inline-block self-start border border-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-gold"
                        >
                            Book an Appointment
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}