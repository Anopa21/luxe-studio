import { motion } from "framer-motion";
import Button from "./Button";

// Placeholder copy. Replace it with your own salon's story.
const principles = [
    {
        title: "Listen first",
        text: "Every appointment begins with a conversation about your hair, your routine and what you want to feel.",
    },
    {
        title: "Craft over trend",
        text: "We shape cuts and colour that suit you and grow out beautifully, long after you leave the chair.",
    },
    {
        title: "Exacting quality",
        text: "Considered products, unhurried time and meticulous finishing on every single visit.",
    },
];

export default function About() {
    return (
        <section id="about" className="scroll-mt-20 bg-char py-28 md:py-40">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
                    {/* Image column */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative isolate mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                            <img
                                src="/images/about.jpg"
                                alt="Inside the LUXE STUDIO salon"
                                loading="lazy"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        {/* Offset outline frame */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-5 -left-5 -z-10 hidden h-full w-full border border-gold/40 sm:block"
                        />
                    </motion.div>

                    {/* Text column */}
                    <div className="lg:col-span-7 lg:pl-16">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6 flex items-center gap-5 text-[0.7rem] uppercase tracking-[0.4em] text-gold"
                        >
                            <span className="block h-px w-12 bg-gold" />
                            About Us
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="font-serif text-5xl font-light leading-[1.05] md:text-6xl"
                        >
                            A quieter kind
                            <br />
                            <span className="italic text-gold">of luxury.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="mt-8 max-w-xl space-y-5 leading-relaxed text-cream/65"
                        >
                            <p>
                                LUXE STUDIO is a private hair atelier built on a simple belief:
                                great hair is personal. We take the time to understand you
                                before we pick up the scissors.
                            </p>
                            <p>
                                Our approach is unhurried and precise. Each appointment is
                                designed around your hair type, lifestyle and personal style,
                                with a level of care and finishing that you can see and feel.
                            </p>
                        </motion.div>

                        {/* Principles */}
                        <ul className="mt-14 grid gap-10 border-t border-cream/10 pt-10 sm:grid-cols-3 sm:gap-8">
                            {principles.map((item, i) => (
                                <motion.li
                                    key={item.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{
                                        duration: 0.9,
                                        delay: i * 0.12,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <span className="font-serif text-lg italic text-gold/70">
                                        0{i + 1}
                                    </span>
                                    <h3 className="mt-2 font-serif text-2xl font-light">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-cream/55">
                                        {item.text}
                                    </p>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-14">
                            <Button href="#booking">Book an Appointment</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}