import React from "react";
import Layout from "@/components/layout/Layout";
import { Newspaper, Shield, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
    { id: 1, title: "OGSSI's Move to Modernize Maternal Healthcare", date: "Jan 12, 2025", paper: "The Medical Times" },
    { id: 2, title: "Pioneering Robotic Surgery in Chennai", date: "Dec 05, 2024", paper: "City Health Bulletin" },
    { id: 3, title: "Society's Impact on Rural Women's Health", date: "Oct 22, 2024", paper: "Healthcare Weekly" },
];

const GalleryMedia = () => {
    return (
        <Layout>
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8">
                            <Newspaper className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Press & Media</span>
                        </div>
                        <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
                            Media <span className="text-primary italic">Coverage</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Recent news features and press releases documenting our society's initiatives.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {articles.map((article) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl bg-secondary/10 border border-border flex flex-col md:flex-row justify-between items-center group hover:bg-white hover:shadow-xl transition-all"
                            >
                                <div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{article.paper}</p>
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{article.title}</h3>
                                    <p className="text-sm text-muted-foreground">{article.date}</p>
                                </div>
                                <button className="mt-6 md:mt-0 p-4 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default GalleryMedia;
