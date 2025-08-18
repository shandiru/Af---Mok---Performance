// WhyChooseUs.jsx
import React from "react";

export default function WhyChooseUs() {
    const items = [
        {
            title: "PERFORMANCE-DRIVEN EXPERTISE",
            desc:
                "From Stage 1 and 2 remaps to DPF, EGR, and AdBlue solutions, we fine-tune your car for maximum power, efficiency, and responsiveness.",
        },
        {
            title: "FULL-SERVICE SOLUTIONS",
            desc:
                "Whether it’s fault code diagnostics, stop-start system repairs, or routine servicing — we handle it under one roof to save you time.",
        },
        {
            title: "PRECISION. PASSION. CARE.",
            desc:
                "We treat every car like our own. With top-tier tools and genuine passion, you can count on results that feel as good as they drive.",
        },
        {
            title: "TRANSPARENT PRICING",
            desc:
                "Clear quotes with no surprises. You’ll know exactly what we’re doing and why — before we start any work.",
        },
        {
            title: "FAST TURNAROUND",
            desc:
                "Flexible scheduling and efficient workflow to get you back on the road quickly, without compromising quality.",
        },
        {
            title: "LOCAL & TRUSTED",
            desc:
                "Based in West Bromwich and serving the surrounding areas — relied on by drivers who value honest advice and solid results.",
        },
    ];

    return (
        <section id="why" className="py-20 bg-black">
            <div className="container mx-auto px-4 md:px-12">
                {/* Eyebrow */}
                <div className="text-center mb-2">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gray-300">
                        <span className="h-[2px] w-4 bg-gray-600 inline-block" />
                        Built for Results
                    </span>
                </div>

                {/* Heading + Sub */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Why Choose Us?</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        At <span className="font-semibold text-white">AF-MOK PERFORMANCE</span>, we do more than
                        fix cars — we unlock their full potential.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((it, i) => (
                        <article
                            key={i}
                            className="bg-black border border-slate-800 rounded-2xl p-8 text-center shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-shadow"
                        >
                            {/* Number badge */}
                            <div className="mx-auto mb-6 w-20 h-20 rounded-full grid place-items-center relative">
                                {/* soft outer glow (matches dark theme) */}
                                <span className="absolute inset-0 rounded-full bg-white/5 blur-[2px]" />
                                {/* ring */}
                                <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                                {/* inner core */}
                                <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-white text-black font-extrabold">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-extrabold text-white tracking-wide">
                                {it.title}
                            </h3>
                            <p className="mt-4 text-gray-300 leading-relaxed">{it.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
