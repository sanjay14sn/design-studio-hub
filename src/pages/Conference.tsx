import React from "react";
import Layout from "@/components/layout/Layout";
import { Calendar, Shield, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const Conference = () => {
    const conferences = [
        {
            title: "Annual Global Conference 2025",
            date: "September 15-18, 2025",
            location: "Chennai Convention Center",
            description: "Bringing together experts from across the globe to discuss latest breakthroughs in O&G.",
            status: "Registration Open"
        },
        {
            title: "Regional CME Conference",
            date: "November 10, 2025",
            location: "Madras Medical College",
            description: "Focusing on regional challenges and medical advancements in maternal health.",
            status: "Upcoming"
        }
    ];

    return (
        <Layout>
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute w-[420px] h-[420px] bg-secondary/40 -top-40 -right-40 rounded-full blur-3xl" />
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
                            <Calendar className="w-4 h-4" />
                            Events & Conferences
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                            Our <span className="text-primary">Conferences</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Participate in leading medical conferences and symposiums led by pioneers in the field.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {conferences.map((conf, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                        {conf.status}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                    {conf.title}
                                </h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        <span>{conf.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span>{conf.location}</span>
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {conf.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Conference;
