import React from "react";
import Layout from "@/components/layout/Layout";
import { PlayCircle, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const videos = [
    { id: 1, title: "CGCON 2024 Highlights", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", category: "Event" },
    { id: 2, title: "Surgical Mastery Workshop", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", category: "Clinical" },
    { id: 3, title: "Patient Awareness Drive", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", category: "Community" },
    { id: 4, title: "CME Session: Robotics", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", category: "Academic" },
];

const GalleryVideos = () => {
    return (
        <Layout>
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8">
                            <PlayCircle className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Video Archive</span>
                        </div>
                        <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
                            Our <span className="text-primary italic">Video Gallery</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Explore our collection of recorded sessions, event highlights, and educational content.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {videos.map((video) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-sm group hover:shadow-xl transition-all"
                            >
                                <div className="aspect-video relative">
                                    <iframe
                                        className="w-full h-full"
                                        src={video.url}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-8">
                                    <span className="px-3 py-1 rounded-full bg-secondary text-[10px] font-black uppercase tracking-tighter text-accent-foreground mb-4 inline-block">
                                        {video.category}
                                    </span>
                                    <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                                        {video.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default GalleryVideos;
