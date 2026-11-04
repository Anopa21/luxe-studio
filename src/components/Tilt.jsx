import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Wrap any element in <Tilt> and it leans toward the mouse.
// "as" picks the HTML tag, e.g. as="figure". "max" is the tilt in degrees.
export default function Tilt({
    as = "div",
    max = 6,
    className = "",
    style,
    children,
    ...props
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const spring = { stiffness: 150, damping: 20 };
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), spring);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), spring);

    const handleMove = (e) => {
        if (e.pointerType !== "mouse") return; // mouse users only
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Component = motion[as];

    return (
        <Component
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            style={{ ...style, rotateX, rotateY, transformPerspective: 900 }}
            className={className}
            {...props}
        >
            {children}
        </Component>
    );
}