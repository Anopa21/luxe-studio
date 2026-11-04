import { motion } from "framer-motion";

// Sample reviews for demonstration only. Replace with real ones.
const featured = {
    quote:
        "I have never felt so looked after in a salon. She listened, took her time, and I walked out with the best colour of my life.",
    name: "Amelia R.",
    detail: "Balayage client",
};

const reviews = [
    {
        quote:
            "A calm, beautiful space and a cut that still looks perfect six weeks later.",
        name: "Sofia L.",
        detail: "Haircut and styling",
    },
    {
        quote:
            "My bridal trial was relaxed and thoughtful. On the day, my hair held beautifully until midnight.",
        name: "Hannah M.",
        detail: "Bridal hairstyle",
    },
    {
        quote:
            "The treatment brought my hair back to life. Worth every minute of the appointment.",
        name: "Nadia K.",
        detail: "Hair treatment",
    },
];

function Stars() {
    return (
        <p aria-label="5 out of 5 stars" className="text-sm tracking-[0.3em] text-gold">
            ★★★★★
        </p>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonials" className="scroll-mt-20 bg-ink py-28 md:py-40">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                {/* Heading */}
                <div className="mb-16 md:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 flex items-center gap-5 text-[0.7rem] uppercase tracking-[0.4em] text-gold"
                    >
                        <span className="block h-px w-12 bg-gold" />
                        Testimonials
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-5xl font-light leading-[1.05] md:text-6xl"
                    >
                        Kind words from
                        <br />
                        <span className="italic text-gold">our guests.</span>
                    </motion.h2>
                </div>

                {/* Featured quote */}
                <motion.figure
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative max-w-4xl"
                >
                    <span
                        aria-hidden="true"
                        className="absolute -top-10 -left-2 font-serif text-[9rem] leading-none text-gold/20 md:-top-14 md:text-[12rem]"
                    >
                        “
                    </span>
                    <blockquote className="relative font-serif text-3xl font-light leading-snug md:text-5xl md:leading-[1.2]">
                        {featured.quote}
                    </blockquote>
                    <figcaption className="mt-10 flex items-center gap-5">
                        <span className="block h-px w-12 bg-gold" />
                        <span>
                            <span className="block text-sm uppercase tracking-[0.25em] text-cream">
                                {featured.name}
                            </span>
                            <span className="mt-1 block text-xs uppercase tracking-[0.25em] text-cream/45">
                                {featured.detail}
                            </span>
                        </span>
                    </figcaption>
                </motion.figure>

                {/* Three smaller reviews */}
                <ul className="mt-20 grid gap-px overflow-hidden border border-cream/10 bg-cream/10 md:mt-28 md:grid-cols-3">
                    {reviews.map((review, i) => (
                        <motion.li
                            key={review.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.9,
                                delay: i * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex flex-col bg-ink p-8 md:p-10"
                        >
                            <Stars />
                            <p className="mt-6 flex-1 leading-relaxed text-cream/70">
                                {review.quote}
                            </p>
                            <div className="mt-8">
                                <p className="text-sm uppercase tracking-[0.25em] text-cream">
                                    {review.name}
                                </p>
                                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cream/45">
                                    {review.detail}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}