import { motion } from "framer-motion";
import Button from "./Button";

// Change this to your own currency symbol, e.g. "RM", "£", "€"
const currency = "$";

// All prices are placeholders. Edit them here and the page updates.
const services = [
    {
        name: "Haircuts",
        description:
            "A consultation, precision cut and blow-dry, shaped around your face, texture and the way you live.",
        price: 65,
    },
    {
        name: "Hair Colouring",
        description:
            "Balayage, glossing, root work and full colour, mixed by hand for depth that grows out gracefully.",
        price: 140,
    },
    {
        name: "Hair Treatments",
        description:
            "Deep-repair and scalp rituals that restore shine and strength, tailored to your hair's condition.",
        price: 85,
    },
    {
        name: "Hair Styling",
        description:
            "Polished blow-outs, soft waves and evening styles for the moments that matter.",
        price: 55,
    },
    {
        name: "Bridal Hairstyles",
        description:
            "A private trial and a styled finish on the day, designed to last from the first photo to the last dance.",
        price: 220,
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative scroll-mt-20 bg-char py-28 md:py-40"
        >
            <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-8">
                {/* Heading column */}
                <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-36">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6 flex items-center gap-5 text-[0.7rem] uppercase tracking-[0.4em] text-gold"
                        >
                            <span className="block h-px w-12 bg-gold" />
                            Our Services
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="font-serif text-5xl font-light leading-[1.05] md:text-6xl"
                        >
                            Crafted for
                            <br />
                            <span className="italic text-gold">every detail.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="mt-8 max-w-sm leading-relaxed text-cream/60"
                        >
                            Every appointment begins with a conversation. Prices shown are
                            starting prices and vary with hair length and density.
                        </motion.p>

                        <div className="mt-10 hidden lg:block">
                            <Button href="#booking">Book an Appointment</Button>
                        </div>
                    </div>
                </div>

                {/* Service list */}
                <ul className="lg:col-span-8 lg:pl-12">
                    {services.map((service, i) => (
                        <motion.li
                            key={service.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 gap-y-3 border-t border-cream/10 py-9 first:border-t-0 first:pt-0 md:gap-x-10 md:py-12"
                        >
                            <span className="font-serif text-lg italic text-gold/70">
                                0{i + 1}
                            </span>

                            <div>
                                <h3 className="font-serif text-3xl font-light transition-colors duration-500 group-hover:text-gold md:text-4xl">
                                    {service.name}
                                </h3>
                                <p className="mt-3 max-w-md leading-relaxed text-cream/60">
                                    {service.description}
                                </p>
                            </div>

                            <p className="text-right">
                                <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-cream/40">
                                    From
                                </span>
                                <span className="font-serif text-3xl text-cream md:text-4xl">
                                    {currency}
                                    {service.price}
                                </span>
                            </p>
                        </motion.li>
                    ))}
                </ul>

                {/* Button shown under the list on small screens */}
                <div className="lg:hidden">
                    <Button href="#booking">Book an Appointment</Button>
                </div>
            </div>
        </section>
    );
}