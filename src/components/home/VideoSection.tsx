import React, { useRef } from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <section className="py-20 bg-muted/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
                    >
                        Our Impact in Motion
                    </motion.h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-muted-foreground">
                        Watch highlights from our recent conferences and clinical workshops
                        aimed at advancing gynecological excellence.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-black aspect-video group"
                >
                    {/* Native Video Tag for better control */}
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                    >
                        <source
                            src="https://res.cloudinary.com/ddibq0tya/video/upload/v1771399981/WhatsApp_Video_2026-02-13_at_9.23.31_AM_mplpkn.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                    {/* Decorative Gradient Overlay (Only visible when not hovering) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

                    {/* Border Glow */}
                    <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;