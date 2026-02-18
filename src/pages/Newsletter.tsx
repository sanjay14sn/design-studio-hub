import React from "react";
import Layout from "@/components/layout/Layout";
import { Mail, BookOpen, Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Newsletter = () => {
    const newsletters = [
        { title: "January 2025 Edition", date: "Jan 1, 2025", type: "Monthly Digest" },
        { title: "December 2024 Edition", date: "Dec 1, 2024", type: "Year-End Special" },
        { title: "November 2024 Edition", date: "Nov 1, 2024", type: "Monthly Digest" },
    ];

    return (
        <Layout>
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute w-[420px] h-[420px] bg-accent/10 -bottom-40 -left-40 rounded-full blur-3xl" />
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
                            <Mail className="w-4 h-4" />
                            Stay Updated
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                            CGSI <span className="text-primary">Newsletter</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Download our latest newsletters and keep yourself informed about society activities and medical updates.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {newsletters.map((news, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-card p-6 rounded-3xl border border-border shadow-sm hover:border-primary/50 transition-all flex flex-col"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{news.title}</h3>
                                <p className="text-sm text-muted-foreground mb-6">{news.type} - {news.date}</p>
                                <button className="mt-auto flex items-center justify-center gap-2 py-3 bg-secondary/20 hover:bg-primary/10 text-primary font-bold rounded-xl transition-colors group">
                                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                    Download PDF
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Newsletter;
