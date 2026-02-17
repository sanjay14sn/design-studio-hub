import React from "react";
import { motion } from "framer-motion";
import { Activity, Thermometer, ShieldCheck, HeartPulse, UserCheck, Microscope } from "lucide-react";

const services = [
    {
        title: "Obstetrics & Prenatal Care",
        desc: "Comprehensive maternal-fetal medicine for high-risk and normal pregnancies.",
        icon: <HeartPulse className="w-6 h-6" />,
        img: "https://images.unsplash.com/photo-1584362946444-1e7c4f944bc8?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Minimal Access Surgery",
        desc: "Advanced laparoscopic and hysteroscopic procedures with faster recovery times.",
        icon: <Activity className="w-6 h-6" />,
        img: "https://images.unsplash.com/photo-1579154235602-3c2051694202?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Gynae-Oncology",
        desc: "Specialized screening and treatment for gynecological malignancies.",
        icon: <Microscope className="w-6 h-6" />,
        img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    },
];

const GynecologySection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#FDFCF0]/50 -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-12 h-[2px] bg-accent"></span>
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">
                                Clinical Excellence
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                            Specialized <span className="italic font-light text-slate-500">Gynecology</span> & <br /> Women's Health Services
                        </h2>
                    </div>
                    <p className="text-muted-foreground max-w-sm mb-2 font-medium">
                        Advancing the standards of obstetric and gynecological care through academic
                        leadership and clinical innovation.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-[2.5rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 w-full overflow-hidden rounded-[2rem] mb-6">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60" />
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-primary shadow-lg">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-4 pb-6">
                                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {service.desc}
                                </p>

                                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                                    Explore Department
                                    <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all"></span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Statistics/Trust Bar */}
                <div className="mt-20 p-10 rounded-[3rem] bg-primary text-white flex flex-wrap justify-around gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />

                    <div className="text-center relative z-10">
                        <div className="text-3xl font-serif font-bold mb-1">90+ Years</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Legacy of Care</div>
                    </div>
                    <div className="w-[1px] h-12 bg-white/10 hidden md:block" />
                    <div className="text-center relative z-10">
                        <div className="text-3xl font-serif font-bold mb-1">500+</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Expert Consultants</div>
                    </div>
                    <div className="w-[1px] h-12 bg-white/10 hidden md:block" />
                    <div className="text-center relative z-10">
                        <div className="text-3xl font-serif font-bold mb-1">24/7</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Academic Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GynecologySection;