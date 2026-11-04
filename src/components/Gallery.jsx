import { motion } from "framer-motion";
import Tilt from "./Tilt";

// Each photo is listed once. Edit the captions and alt text here.
const photos = [
    {
        src: "/images/gallery-1.jpg",
        alt: "Long, glossy waves styled at LUXE STUDIO",
        caption: "Soft waves",
        layout: "col-span-2 aspect-[4/5] md:col-span-5",
    },
    {
        src: "/images/gallery-2.jpg",
        alt: "The LUXE STUDIO salon interior",
        caption: "The studio",
        layout: "col-span-2 aspect-[4/3] md:col-span-7",
    },
    {
        src: "/images/gallery-3.jpg",
        alt: "Hand-painted balayage colour",
        caption: "Hand-painted colour",
        layout: "col-span-1 aspect-[3/4] md:col-span-4",
    },
    {
        src: "/images/gallery-4.jpg",
        alt: "A stylist at work",
        caption: "In the chair",
        layout: "col-span-1 aspect-[3/4] md:col-span-4",
    },
    {
        src: "/images/gallery-5.jpg",
        alt: "A bridal hairstyle",
        caption: "Bridal",
        layout: "col-span-2 aspect-[4/3] md:col-span-4 md:aspect-[3/4]",
    },
    {
        src: "/images/gallery-6.jpg",
        alt: "Details from inside the salon",
        caption: "The details",
        layout: "col-span-2 aspect-[16/9] md:col-span-12 md:aspect-[21/8]",
    },
];

export default function Gallery() {
    return (
        <section id="gallery" className="scroll-mt-20 bg-ink py-28 md:py-40">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                {/* Heading row */}
                <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6 flex items-center gap-5 text-[0.7rem] uppercase tracking-[0.4em] text-gold"
                        >
                            <span className="block h-px w-12 bg-gold" />
                            Our Gallery
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="font-serif text-5xl font-light leading-[1.05] md:text-6xl"
                        >
                            Where craft
                            <br />
                            <span className="italic text-gold">becomes art.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="max-w-sm leading-relaxed text-cream/60"
                    >
                        A glimpse of the work and the space: considered colour, precise
                        cutting and an atmosphere made for slowing down.
                    </motion.p>
                </div>

                {/* Photo grid */}
                <div className="grid grid-cols-2 items-end gap-3 md:grid-cols-12 md:gap-5">
                    {photos.map((photo) => (
                        <Tilt
                            as="figure"
                            max={5}
                            key={photo.src}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className={`group relative overflow-hidden bg-char ${photo.layout}`}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                            />

                            {/* Caption: always visible on touch screens, on hover for desktop */}
                            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                                <span className="font-serif text-xl italic text-cream">
                                    {photo.caption}
                                </span>
                            </figcaption>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
}