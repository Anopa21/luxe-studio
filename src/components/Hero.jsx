import { useRef } from "react";
import {
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import Button from "./Button";

const reveal = {
    hidden: { opacity: 0, y: 28 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 + i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] },
    }),
};

// 14 particles with fixed positions (no randomness, so they never jump on re-render)
const particles = Array.from({ length: 14 }, (_, i) => ({
    left: `${(i * 37 + 11) % 100}%`,
    top: `${(i * 53 + 7) % 100}%`,
    size: 2 + (i % 3),
    duration: 6 + (i % 5) * 1.5,
    delay: (i % 4) * 0.7,
}));

export default function Hero() {
    const sectionRef = useRef(null);

    // --- Scroll parallax ---
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

    // --- Mouse tilt ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), {
        stiffness: 120,
        damping: 18,
    });
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [9, -9]), {
        stiffness: 120,
        damping: 18,
    });

    const handleMove = (e) => {
        if (e.pointerType !== "mouse") return; // tilt is for mouse users only
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative flex min-h-svh items-center overflow-hidden bg-ink"
        >
            {/* Soft glow behind the image */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]"
            />

            {/* Floating gold particles */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                {particles.map((p, i) => (
                    <motion.span
                        key={i}
                        className="absolute rounded-full bg-gold"
                        style={{
                            left: p.left,
                            top: p.top,
                            width: p.size,
                            height: p.size,
                        }}
                        animate={{ y: [0, -28, 0], opacity: [0.15, 0.6, 0.15] }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-20 pt-36 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pt-32">
                {/* Text column */}
                <motion.div style={{ y: textY }} className="lg:col-span-7">
                    <motion.p
                        custom={0}
                        variants={reveal}
                        initial="hidden"
                        animate="show"
                        className="mb-8 flex items-center gap-5 text-[0.7rem] uppercase tracking-[0.4em] text-gold"
                    >
                        <span className="block h-px w-12 bg-gold" />
                        Luxury Hair Atelier
                    </motion.p>

                    <motion.h1
                        custom={1}
                        variants={reveal}
                        initial="hidden"
                        animate="show"
                        className="font-serif text-[clamp(3.25rem,9vw,7.5rem)] font-light leading-[0.95] tracking-tight"
                    >
                        Your Hair.
                        <br />
                        <span className="italic text-gold">Your Signature.</span>
                    </motion.h1>

                    <motion.p
                        custom={2}
                        variants={reveal}
                        initial="hidden"
                        animate="show"
                        className="mt-10 max-w-md text-base leading-relaxed text-cream/70 md:text-lg"
                    >
                        LUXE STUDIO is a private hair atelier where every cut, colour and
                        finish is designed around you. Unhurried appointments, considered
                        craft and results that feel entirely your own.
                    </motion.p>

                    <motion.div
                        custom={3}
                        variants={reveal}
                        initial="hidden"
                        animate="show"
                        className="mt-12 flex flex-wrap items-center gap-8"
                    >
                        <Button href="#booking">Book an Appointment</Button>
                        <a
                            href="#services"
                            className="text-[0.7rem] uppercase tracking-[0.28em] text-cream/70 underline decoration-gold/50 underline-offset-[10px] transition-colors hover:text-gold"
                        >
                            Explore Services
                        </a>
                    </motion.div>
                </motion.div>

                {/* Image column (the perspective container) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1.2 }}
                    onPointerMove={handleMove}
                    onPointerLeave={handleLeave}
                    style={{ perspective: "1200px" }}
                    className="relative mx-auto w-full max-w-sm sm:max-w-md lg:col-span-5 lg:max-w-none"
                >
                    {/* The tilting 3D stack */}
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative"
                    >
                        {/* Arched photo */}
                        <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-char">
                            <motion.div
                                style={{ y: photoY }}
                                className="absolute inset-x-0 -top-[10%] h-[120%]"
                            >
                                <motion.img
                                    src="/images/hero.jpg"
                                    alt="Woman with glossy, freshly styled hair in a luxury salon"
                                    initial={{ scale: 1.15 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                                    className="h-full w-full object-cover object-[50%_25%]"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                        </div>

                        {/* Gold outline, pushed BEHIND the photo */}
                        <div
                            aria-hidden="true"
                            style={{ transform: "translateZ(-40px)" }}
                            className="pointer-events-none absolute -right-4 top-10 hidden h-full w-full rounded-t-full border border-gold/40 sm:block"
                        />

                        {/* Caption card, pulled IN FRONT of the photo */}
                        <div
                            style={{ transform: "translateZ(70px)" }}
                            className="absolute -bottom-6 left-0 sm:-left-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, duration: 0.9 }}
                                className="bg-cream px-7 py-5 text-ink shadow-2xl shadow-black/40"
                            >
                                <p className="font-serif text-xl italic leading-none">
                                    Bespoke by appointment
                                </p>
                                <p className="mt-2 text-[0.6rem] uppercase tracking-[0.3em] text-ink/60">
                                    Cut · Colour · Care
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}