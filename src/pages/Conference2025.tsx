import React from "react";
import Layout from "@/components/layout/Layout";
import { Sparkles, Image as ImageIcon, Video, Calendar, MapPin, Users, Award, BookOpen, Clock, Heart, Shield, Terminal, Zap, Info, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const Conference2025 = () => {
    const images = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        url: `https://images.unsplash.com/photo-${1516000000000 + i}?auto=format&fit=crop&w=400&q=80`,
        title: `Moment ${i + 1}`
    }));

    return (
        <Layout>
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 bg-background overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest italic">Flagship Event</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-tight mb-8">
                            CGCON <span className="text-primary italic">2025:</span> <br />
                            The Future of Care
                        </h1>
                        <div className="flex flex-wrap gap-8 text-lg font-medium text-muted-foreground">
                            <span className="flex items-center gap-3"><Calendar className="text-primary" /> Sept 15-18, 2025</span>
                            <span className="flex items-center gap-3"><MapPin className="text-primary" /> Chennai, India</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Massive Content Section (~100 lines of descriptive text broken into blocks) */}
            <section className="py-20 bg-white dark:bg-card">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                            <h2 className="text-4xl font-serif font-bold text-foreground">A Legacy of Excellence</h2>
                            <p>
                                Welcome to the digital archive of CGCON 2025. This year's conference stood as a testament to the unbreakable spirit of the medical community. Over four days, we gathered the brightest minds in Obstetrics and Gynaecology to chart a new course for women's health in the 21st century.
                            </p>
                            <p>
                                The theme, "Integrative Innovations," explored the intersection of traditional clinical wisdom and the cutting-edge technological advancements that are reshaping our operating theaters and labor wards. From the opening ceremony to the final valedictory session, the energy was palpable.
                            </p>
                            <p>
                                Keynote speakers from across six continents shared their insights on global health equity, emphasizing that modern medicine must be accessible to all regardless of geography. The plenary sessions delved deep into the nuances of high-risk pregnancy management and the rapid evolution of minimally invasive robotic surgery.
                            </p>
                            <p>
                                We also hosted specialized tracks for junior residents, providing them with mentorship opportunities and hands-on simulation training. These sessions weren't just about learning techniques; they were about fostering the next generation of compassionate healers who will carry the OGSSI legacy forward.
                            </p>
                            <p>
                                The research papers presented this year were of exceptional quality, covering everything from genomic breakthroughs in prenatal screening to community-based interventions for maternal nutrition. Each poster session sparked lively debates and collaborative ideas that will undoubtedly fuel new studies in the coming years.
                            </p>
                            <p>
                                Beyond the scientific sessions, CGCON 2025 was a celebration of our community. The cultural evening showcased the diverse talents of our members, reminding us that we are artists as much as we are scientists. The networking dinners saw old friends reconnecting and new alliances being formed.
                            </p>
                            <p>
                                As we look through this archive, we invite you to relive these moments. The photos capture the intensity of the workshops, the joy of the award ceremonies, and the quiet moments of reflection between sessions. Each image tells a story of dedication, hard work, and a shared passion for our noble profession.
                            </p>
                            <p>
                                The video highlights provide a dynamic look at the keynote addresses and the interactive panel discussions that were the hallmark of this conference. We hope these resources serve as an ongoing inspiration for your clinical practice and professional development until we meet again at the next CGCON.
                            </p>
                            <p>
                                Thank you to all our sponsors, organizing committee members, and delegates for making CGCON 2025 a resounding success. Your commitment to excellence is what makes OGSSI one of the most respected medical societies in the country. Let us continue to strive for perfection in care.
                            </p>
                            <p>
                                The journey toward better women's health is a continuous one, and events like this are the milestones that mark our progress. We are proud to have hosted such a significant gathering and look forward to building on the foundations laid here in Chennai.
                            </p>
                        </div>
                        <div className="space-y-12">
                            <div className="p-10 rounded-[3rem] bg-primary/5 border border-primary/10 relative overflow-hidden">
                                <Zap className="absolute -top-10 -right-10 w-40 h-40 text-primary/10 opacity-20" />
                                <h3 className="text-3xl font-serif font-bold text-foreground mb-6">Statistic Highlights</h3>
                                <div className="grid grid-cols-2 gap-8">
                                    {[
                                        { label: "Delegates", value: "2,500+" },
                                        { label: "Speakers", value: "150+" },
                                        { label: "Papers", value: "480+" },
                                        { label: "Workshops", value: "12" },
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                                            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-6">
                                {[
                                    { icon: Award, title: "Excellence Awards", desc: "Recognizing lifetime contributions." },
                                    { icon: BookOpen, title: "Abstract Book", desc: "Released with 500+ research papers." },
                                    { icon: Users, title: "Networking Hub", desc: "Dedicated space for collaborative meetups." }
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-6 p-6 rounded-2xl border border-border bg-background hover:border-primary/50 transition-all">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                            <feat.icon />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">{feat.title}</h4>
                                            <p className="text-sm text-muted-foreground">{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. 30 Images Grid */}
            <section className="py-24 bg-secondary/5">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-4xl font-serif font-bold text-foreground">Photo <span className="text-primary italic">Gallery</span></h2>
                        <div className="h-px flex-1 bg-border" />
                        <ImageIcon className="text-muted-foreground" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {images.map((img) => (
                            <motion.div
                                key={img.id}
                                whileHover={{ scale: 1.05 }}
                                className="aspect-square rounded-2xl overflow-hidden bg-white border-4 border-white shadow-lg"
                            >
                                <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. 2 Video Embeds */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <Video className="text-muted-foreground" />
                        <div className="h-px flex-1 bg-border" />
                        <h2 className="text-4xl font-serif font-bold text-foreground text-right">Video <span className="text-primary italic">Recaps</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: "Day 1 Highlights", id: "dQw4w9WgXcQ" },
                            { title: "Grand Gala Night", id: "dQw4w9WgXcQ" }
                        ].map((vid, i) => (
                            <div key={i} className="space-y-6">
                                <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-border">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${vid.id}`}
                                        title={vid.title}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <h3 className="text-2xl font-serif font-bold flex items-center gap-3">
                                    <PlayCircle className="text-primary" /> {vid.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Conference2025;
