import { Component, lazy, Suspense, useEffect, useState } from "react";

// Loaded only when needed, so three.js stays out of the first page load
const GoldObject = lazy(() => import("./GoldObject"));

// If anything in the 3D fails (for example, no WebGL), show nothing
class Boundary extends Component {
    state = { failed: false };
    static getDerivedStateFromError() {
        return { failed: true };
    }
    render() {
        return this.state.failed ? null : this.props.children;
    }
}

// True only on wide screens, and only if the visitor has not asked for less motion
function useShow3D() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const wide = window.matchMedia("(min-width: 1024px)");
        const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setShow(wide.matches && !calm.matches);

        update();
        wide.addEventListener("change", update);
        calm.addEventListener("change", update);
        return () => {
            wide.removeEventListener("change", update);
            calm.removeEventListener("change", update);
        };
    }, []);

    return show;
}

export default function Hero3D() {
    const show = useShow3D();
    if (!show) return null;

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-14 top-[10%] z-20 h-52 w-52 xl:h-64 xl:w-64"
        >
            <Boundary>
                <Suspense fallback={null}>
                    <GoldObject />
                </Suspense>
            </Boundary>
        </div>
    );
}