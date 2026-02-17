import React from "react";
import Layout from "@/components/layout/Layout";
import { Sparkles, Image as ImageIcon, Video, Calendar, MapPin, Users, Award, BookOpen, Clock, Heart, Shield, Terminal, Zap, Info, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const Conference2024 = () => {
    const images = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        url: `https://images.unsplash.com/photo-${1521737604893 + i}?auto=format&fit=crop&w=400&q=80`,
        title: `Memory ${i + 1}`
    }));

    return (
        <Layout>
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 bg-background overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0%,transparent_70%)]" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-8">
                            <Calendar className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Past Event Archive</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-8">
                            CGCON <span className="text-accent italic">2024:</span> <br />
                            Clinical Excellence
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 italic">
                            "Honoring our heritage, advancing our skills."
                        </p>
                        <div className="flex justify-center gap-12 font-bold text-primary">
                            <div className="flex items-center gap-2"><MapPin /> Pondicherry</div>
                            <div className="flex items-center gap-2"><Users /> 1,800 Attendees</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Detailed Content (~100 lines of descriptive text) */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-8 text-lg text-muted-foreground leading-relaxed text-justify">
                            <h2 className="text-4xl font-serif font-bold text-foreground text-left">The Pondicherry Summit</h2>
                            <p>
                                CGCON 2024 was more than just a medical meeting; it was a gathering of souls dedicated to the betterment of women's health. Held in the picturesque city of Pondicherry, the conference blended the serene coastal atmosphere with intense academic rigor. It was a year where we focused heavily on maternal morbidity and the systemic changes required to reduce it.
                            </p>
                            <p>
                                The opening ceremony was graced by luminaries in the field who spoke about the 'French Connection' to medical history in the region, bridging the gap between historical practices and modern requirements. The keynote address on placental health set a high bar for the technical sessions that followed.
                            </p>
                            <p>
                                A major highlight of 2024 was the introduction of the 'Live Surgery Transmissions,' where delegates could observe real-time procedures from Pondicherry's leading medical centers. The level of interaction allowed during these sessions was unprecedented, with surgeons answering questions while performing complex laparoscopic surgeries.
                            </p>
                            <p>
                                The workshop on 'Social Media for Medical Professionals' was a surprising hit, acknowledging that in 2024, patient outreach happens just as much on digital platforms as it does in clinics. We discussed ethics, privacy, and the power of verified medical information in an era of misinformation.
                            </p>
                            <p>
                                In our continued effort to be inclusive, the 2024 conference hosted a dedicated 'Rural Healthcare Symposium.' Doctors working in the most remote corners of southern India shared their success stories and their immense challenges. Their resilience was an inspiration to every city-based practitioner in the room.
                            </p>
                            <p>
                                The 'Innovation Lab' was a buzzing hive of activity, showcasing locally-developed medical devices tailored for the Indian context. From low-cost Doppler units to advanced surgical clamps, the spirit of 'Make in India' was alive and well. It was heartening to see our members not just using technology but creating it.
                            </p>
                            <p>
                                We also placed a significant emphasis on doctor-wellbeing this year. The early morning yoga sessions on the beach and the panel on 'Avoiding Burnout' were essential additions to our program. We recognized that to care for others effectively, we must first learn to care for ourselves.
                            </p>
                            <p>
                                The scientific exhibits displayed over 300 posters, with a notable increase in the participation of postgraduate students. The quality of research into local health patterns and pharmacological responses was outstanding, earning praise from the international observers who joined us.
                            </p>
                            <p>
                                As we retrospect on 2024, the feedback from our delegates has been overwhelmingly positive. The Pondicherry Summit will be remembered for its academic depth, its cultural warmth, and the tangible sense of progress it left in its wake. This archive captures that essence for eternity.
                            </p>
                            <p>
                                We thank the local Pondicherry medical fraternity for their incredible hospitality. The success of CGCON 2024 was a collaborative achievement, proving once again that OGSSI is a family that grows stronger with every passing year. We carry these lessons forward with pride and determination.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="p-8 rounded-3xl bg-secondary/20 border border-border">
                                <Info className="text-accent mb-4 w-10 h-10" />
                                <h4 className="text-xl font-bold text-foreground mb-4">Key Themes</h4>
                                <ul className="space-y-4 text-sm font-medium">
                                    <li className="flex items-start gap-2 border-b border-border pb-2">• Maternal Near-Miss Audits</li>
                                    <li className="flex items-start gap-2 border-b border-border pb-2">• Endoscopy in Low-Resource Settings</li>
                                    <li className="flex items-start gap-2 border-b border-border pb-2">• Legal & Ethical Frontiers in O&G</li>
                                    <li className="flex items-start gap-2">• Adolescent Reproductive Health</li>
                                </ul>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                                <div className="relative p-8 rounded-3xl bg-card border border-border leading-none flex items-center divide-x divide-border">
                                    <div className="pr-6">
                                        <Heart className="text-primary w-8 h-8" />
                                    </div>
                                    <div className="pl-6">
                                        <p className="text-secondary-foreground font-bold">FIGO Endorsed</p>
                                        <p className="text-xs text-muted-foreground mt-1">International Standard</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. 30 Images Grid */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-12">Visual <span className="text-accent italic">Memories</span></h2>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {images.map((img) => (
                            <motion.div
                                key={img.id}
                                whileHover={{ y: -5 }}
                                className="aspect-square rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-sm"
                            >
                                <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. 2 Video Embeds */}
            <section className="py-24 bg-secondary/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-16 text-center italic">Watch the <span className="text-primary">Recaps</span></h2>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
                        {[
                            { title: "Opening Ceremony", id: "dQw4w9WgXcQ" },
                            { title: "Scientific Highlights", id: "dQw4w9WgXcQ" }
                        ].map((vid, i) => (
                            <div key={i} className="group">
                                <div className="aspect-video rounded-3xl overflow-hidden shadow-xl group-hover:shadow-primary/20 transition-all">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${vid.id}`}
                                        title={vid.title}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p className="mt-6 text-center font-bold text-xl group-hover:text-primary transition-colors">{vid.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Conference2024;
