import Layout from "@/components/layout/Layout";
import { Shield, Linkedin, Mail, Heart } from "lucide-react";
import { motion, Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/* DATA                                     */
/* -------------------------------------------------------------------------- */

const leadership = [
  {
    name: "Dr. Deepa Ganesh",
    role: "President",
    image: "/deepa.png",
  },
  {
    name: "Dr. Shamika Dechamma",
    role: "Secretary",
    image: "/shamika.png",
  },
  {
    name: "Dr. Anitha Prem",
    role: "Treasurer",
    image: "https://res.cloudinary.com/ddibq0tya/image/upload/v1771399917/WhatsApp_Image_2026-02-10_at_12.54.13_PM_cfq4bx.jpg",
  },
];

const committee = [
  { name: "Dr. M.G Dhanalakshmi", role: "Vice President" },
  { name: "Dr. Mala Raj", role: "Hon. Joint Secretary" },
  { name: "Dr. Sumathy Prem Anand", role: "Hon. Joint Treasurer" },
  { name: "Dr. S. Vijaya", role: "Imm. Past President" },
  { name: "Dr. Vanitha A", role: "Managing Committee" },
  { name: "Dr. Uma Ram", role: "Managing Committee" },
  { name: "Dr. K. Balakumari", role: "Executive Committee" },
  { name: "Dr. Deepa Thangamani", role: "Executive Committee" },
  { name: "Dr. P. Josephin Rosy", role: "Executive Committee" },
  { name: "Dr. Karpagambal Sairam", role: "Executive Committee" },
  { name: "Dr. Meera V V Ragavan", role: "Executive Committee" },
];

/* -------------------------------------------------------------------------- */
/* ANIMATIONS                                   */
/* -------------------------------------------------------------------------- */

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

/* -------------------------------------------------------------------------- */
/* PAGE                                     */
/* -------------------------------------------------------------------------- */

const Team = () => {
  return (
    <Layout>
      {/* Global Background Mesh */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="pt-20 pb-16 relative overflow-hidden bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/60 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                The Guardians of Care
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 text-foreground">
              Meet the <span className="text-primary italic">Visionaries</span>
            </h1>

            <p className="text-lg text-muted-foreground font-medium">
              Established as a union of trust and empathy, CGSI is dedicated to advancing excellence in women’s healthcare. Launched alongside CGCON 2025, the society focuses on setting global standards for cosmetic and functional gynecology in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= LEADERSHIP (3 MEMBERS) ================= */}
      <section className="pt-12 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px w-12 bg-primary/40" />
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Leadership <span className="text-primary">Team</span>
            </h2>
            <div className="h-px w-12 bg-primary/40" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          >
            {leadership.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl shadow-secondary/50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <a className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary-light hover:text-white transition-colors cursor-pointer">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary-light hover:text-white transition-colors cursor-pointer">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="font-serif font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-bold tracking-widest text-xs uppercase">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= COMMITTEE (REST OF THE TEAM) ================= */}
      <section className="py-24 bg-secondary/10 backdrop-blur-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Heart className="w-8 h-8 text-primary mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Committee <span className="text-primary">Members</span>
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {committee.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 text-center relative overflow-hidden group"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full group-hover:scale-[3] transition-transform duration-500" />

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 text-xl font-serif font-bold text-white shadow-lg">
                  {member.name
                    .split(" ")
                    .filter((n) => n.length > 2) // Filter out "Dr." for the initials
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <h3 className="font-serif font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary/80 uppercase tracking-tighter">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;