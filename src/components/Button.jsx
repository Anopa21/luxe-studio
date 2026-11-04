const styles = {
    primary: "bg-gold text-ink hover:bg-cream",
    outline:
        "border border-cream/30 text-cream hover:border-gold hover:text-gold",
};

export default function Button({
    href = "#",
    variant = "primary",
    children,
    className = "",
    ...props
}) {
    return (
        <a
            href={href}
            className={`group inline-flex items-center gap-4 px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] transition-colors duration-500 ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
            <span
                aria-hidden="true"
                className="block h-px w-6 bg-current transition-all duration-500 group-hover:w-10"
            />
        </a>
    );
}