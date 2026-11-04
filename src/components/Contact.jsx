import { motion } from "framer-motion";
import { whatsappNumber, contact, hours } from "../siteConfig";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello LUXE STUDIO, I have a question."
)}`;

const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
};

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-20 bg-ink py-28 md:py-40">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                {/* Heading */}
                <div className="mb-16 md:mb-24">
                    <motion.p
                        {...fade}
                        transition={{ duration: 0.8 }}
                        className="mb-6 flex items-center gap-5 text-[0.7rem] uppercase tracking-[0.4em] text-gold"
                    >
                        <span className="block h-px w-12 bg-gold" />
                        Contact
                    </motion.p>

                    <motion.h2
                        {...fade}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-5xl font-light leading-[1.05] md:text-6xl"
                    >
                        Visit the
                        <br />
                        <span className="italic text-gold">studio.</span>
                    </motion.h2>
                </div>

                <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
                    {/* Details */}
                    <motion.div
                        {...fade}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-10 lg:col-span-6"
                    >
                        <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                                Address
                            </p>
                            <address className="mt-3 font-serif text-2xl font-light not-italic leading-snug md:text-3xl">
                                {contact.address.map((line) => (
                                    <span key={line} className="block">
                                        {line}
                                    </span>
                                ))}
                            </address>
                        </div>

                        <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                                Phone
                            </p>
                            <a
                                href={`tel:${contact.phoneLink}`}
                                className="mt-3 inline-block font-serif text-2xl font-light transition-colors hover:text-gold md:text-3xl"
                            >
                                {contact.phone}
                            </a>
                        </div>

                        <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                                Email
                            </p>
                            <a
                                href={`mailto:${contact.email}`}
                                className="mt-3 inline-block break-all font-serif text-2xl font-light transition-colors hover:text-gold md:text-3xl"
                            >
                                {contact.email}
                            </a>
                        </div>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-4 bg-gold px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-ink transition-colors duration-500 hover:bg-cream"
                        >
                            Chat on WhatsApp
                            <span
                                aria-hidden="true"
                                className="block h-px w-6 bg-current transition-all duration-500 group-hover:w-10"
                            />
                        </a>
                    </motion.div>

                    {/* Opening hours */}
                    <motion.div
                        {...fade}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-6 lg:pl-12"
                    >
                        <div className="border border-cream/10 bg-char p-8 md:p-12">
                            <h3 className="font-serif text-3xl font-light md:text-4xl">
                                Opening hours
                            </h3>
                            <ul className="mt-8">
                                {hours.map((row) => (
                                    <li
                                        key={row.day}
                                        className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-cream/10 py-5 first:border-t-0"
                                    >
                                        <span className="text-sm uppercase tracking-[0.2em] text-cream/70">
                                            {row.day}
                                        </span>
                                        <span
                                            className={
                                                row.time === "Closed" ? "text-cream/40" : "text-cream"
                                            }
                                        >
                                            {row.time}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}