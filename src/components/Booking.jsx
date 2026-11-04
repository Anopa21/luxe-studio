import { useState } from "react";
import { motion } from "framer-motion";
import { whatsappNumber } from "../siteConfig";

const serviceOptions = [
    "Haircut",
    "Hair Colouring",
    "Hair Treatment",
    "Hair Styling",
    "Bridal Hairstyle",
];

const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
];

const emptyForm = {
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
};

// Today's date as YYYY-MM-DD in the visitor's own time zone
function todayString() {
    const d = new Date();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${month}-${day}`;
}

// Returns an object of error messages. Empty object = form is valid.
function validate(values) {
    const errors = {};

    if (values.name.trim().length < 2) {
        errors.name = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
        errors.email = "Please enter a valid email address.";
    }

    const digits = values.phone.replace(/\D/g, "");
    if (
        !/^[0-9+\s\-()]+$/.test(values.phone) ||
        digits.length < 8 ||
        digits.length > 15
    ) {
        errors.phone = "Please enter a valid phone number (8 to 15 digits).";
    }

    if (!values.service) {
        errors.service = "Please choose a service.";
    }

    if (!values.date) {
        errors.date = "Please choose a date.";
    } else if (values.date < todayString()) {
        errors.date = "Please choose today or a later date.";
    }

    if (!values.time) {
        errors.time = "Please choose a time.";
    }

    return errors;
}

export default function Booking() {
    const [values, setValues] = useState(emptyForm);
    const [touched, setTouched] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [waUrl, setWaUrl] = useState("");

    const errors = validate(values);

    // Only show an error after the field was visited or a submit was tried
    const showError = (name) => (touched[name] || submitted) && errors[name];

    const handleChange = (e) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleBlur = (e) => {
        setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        const firstInvalid = Object.keys(errors)[0];
        if (firstInvalid) {
            e.target.elements[firstInvalid]?.focus();
            return;
        }

        const message = [
            "Hello LUXE STUDIO, I would like to request an appointment.",
            "",
            `Name: ${values.name.trim()}`,
            `Email: ${values.email.trim()}`,
            `Phone: ${values.phone.trim()}`,
            `Service: ${values.service}`,
            `Preferred date: ${values.date}`,
            `Preferred time: ${values.time}`,
        ].join("\n");

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        setWaUrl(url);
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const reset = () => {
        setValues(emptyForm);
        setTouched({});
        setSubmitted(false);
        setWaUrl("");
    };

    const fieldClass = (name) =>
        `w-full border-b bg-transparent py-3 text-cream outline-none transition-colors duration-300 placeholder:text-cream/30 focus:border-gold [color-scheme:dark] ${showError(name) ? "border-red-400/80" : "border-cream/25"
        }`;

    const labelClass =
        "block text-[0.65rem] uppercase tracking-[0.3em] text-cream/55";

    const ErrorText = ({ name }) =>
        showError(name) ? (
            <p id={`${name}-error`} role="alert" className="mt-2 text-xs text-red-300">
                {errors[name]}
            </p>
        ) : null;

    const aria = (name) => ({
        "aria-invalid": showError(name) ? "true" : "false",
        "aria-describedby": showError(name) ? `${name}-error` : undefined,
    });

    return (
        <section id="booking" className="scroll-mt-20 bg-char py-28 md:py-40">
            <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-8">
                {/* Intro column */}
                <div className="lg:col-span-5">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 flex items-center gap-5 text-[0.7rem] uppercase tracking-[0.4em] text-gold"
                    >
                        <span className="block h-px w-12 bg-gold" />
                        Book an Appointment
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-5xl font-light leading-[1.05] md:text-6xl"
                    >
                        Reserve
                        <br />
                        <span className="italic text-gold">your time.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-8 max-w-sm leading-relaxed text-cream/60"
                    >
                        Tell us what you have in mind and when suits you. Your request
                        opens in WhatsApp, and your appointment is confirmed once we reply
                        with availability.
                    </motion.p>
                </div>

                {/* Form column */}
                <div className="lg:col-span-7 lg:pl-12">
                    {waUrl ? (
                        <div role="status" className="border border-gold/40 p-8 md:p-12">
                            <h3 className="font-serif text-3xl font-light md:text-4xl">
                                Your request is ready in WhatsApp
                            </h3>
                            <p className="mt-5 max-w-md leading-relaxed text-cream/65">
                                We opened WhatsApp with your details filled in. Press{" "}
                                <strong className="font-medium text-cream">Send</strong> there
                                to deliver it. Nothing has been booked yet: your appointment is
                                only confirmed when the salon replies.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-8">
                                <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gold px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-ink transition-colors duration-500 hover:bg-cream"
                                >
                                    Open WhatsApp again
                                </a>
                                <button
                                    type="button"
                                    onClick={reset}
                                    className="text-[0.7rem] uppercase tracking-[0.28em] text-cream/70 underline decoration-gold/50 underline-offset-[10px] transition-colors hover:text-gold"
                                >
                                    Make another request
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className={labelClass}>Full name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Your name"
                                    className={fieldClass("name")}
                                    {...aria("name")}
                                />
                                <ErrorText name="name" />
                            </div>

                            <div>
                                <label htmlFor="email" className={labelClass}>Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="you@example.com"
                                    className={fieldClass("email")}
                                    {...aria("email")}
                                />
                                <ErrorText name="email" />
                            </div>

                            <div>
                                <label htmlFor="phone" className={labelClass}>Phone number</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="+00 000 000 0000"
                                    className={fieldClass("phone")}
                                    {...aria("phone")}
                                />
                                <ErrorText name="phone" />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="service" className={labelClass}>Service</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={values.service}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={fieldClass("service")}
                                    {...aria("service")}
                                >
                                    <option value="" className="bg-ink">Select a service</option>
                                    {serviceOptions.map((s) => (
                                        <option key={s} value={s} className="bg-ink text-cream">
                                            {s}
                                        </option>
                                    ))}
                                </select>
                                <ErrorText name="service" />
                            </div>

                            <div>
                                <label htmlFor="date" className={labelClass}>Preferred date</label>
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    min={todayString()}
                                    value={values.date}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={fieldClass("date")}
                                    {...aria("date")}
                                />
                                <ErrorText name="date" />
                            </div>

                            <div>
                                <label htmlFor="time" className={labelClass}>Preferred time</label>
                                <select
                                    id="time"
                                    name="time"
                                    value={values.time}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={fieldClass("time")}
                                    {...aria("time")}
                                >
                                    <option value="" className="bg-ink">Select a time</option>
                                    {timeSlots.map((t) => (
                                        <option key={t} value={t} className="bg-ink text-cream">
                                            {t}
                                        </option>
                                    ))}
                                </select>
                                <ErrorText name="time" />
                            </div>

                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="group inline-flex items-center gap-4 bg-gold px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-ink transition-colors duration-500 hover:bg-cream"
                                >
                                    Request via WhatsApp
                                    <span
                                        aria-hidden="true"
                                        className="block h-px w-6 bg-current transition-all duration-500 group-hover:w-10"
                                    />
                                </button>
                                <p className="mt-5 text-xs leading-relaxed text-cream/45">
                                    This opens WhatsApp with your details filled in. Nothing is
                                    booked until the salon confirms.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}