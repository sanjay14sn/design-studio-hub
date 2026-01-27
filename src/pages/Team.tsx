import Layout from "@/components/layout/Layout";
import { Shield, Linkedin, Mail, Heart } from "lucide-react";
import { motion, Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const leadership = [
  {
    name: "Dr. Sampath Kumari S",
    role: "President",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. M.G Dhanalakshmi",
    role: "Vice President",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. M. Meena",
    role: "Hon. Secretary",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Meenakshi Sundaram",
    role: "Hon. Treasurer",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Mala Raj",
    role: "Hon. Joint Secretary",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Sumathy Prem Anand",
    role: "Hon. Joint Treasurer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
];

const committee = [
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
/*                               ANIMATIONS                                   */
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
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

const Team = () => {
  return (
    <Layout>
      {/* Global Background Mesh */}
      <div className="fixed inset-0 -z-10 bg-[#FAFAFD]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C6B7E2]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F4A7B9]/10 rounded-full blur-[120px]" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section
        className="pt-20 pb-16 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
           rgba(250,250,253,0.70),
rgba(250,250,253,0.60)


            ),
            url("/growth.png")
          `,
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2436A8]/5 border border-[#2436A8]/10 text-[#2436A8] mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                The Guardians of Care
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 text-[#1E245C]">
              Meet the <span className="text-[#2436A8] italic">Visionaries</span>
            </h1>

            <p className="text-lg text-[#1E245C]/70 font-medium">
              A union of trust and empathy, dedicated to the excellence of women's
              healthcare since 1934.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="pt-12 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px w-12 bg-[#F4A7B9]" />
            <h2 className="text-3xl font-serif font-bold text-[#1E245C]">
              Leadership <span className="text-[#2436A8]">Team</span>
            </h2>
            <div className="h-px w-12 bg-[#F4A7B9]" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {leadership.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl shadow-[#C6B7E2]/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2436A8]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <a className="w-12 h-12 rounded-full bg-[#FAFAFD] text-[#2436A8] flex items-center justify-center hover:bg-[#F4A7B9] hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a className="w-12 h-12 rounded-full bg-[#FAFAFD] text-[#2436A8] flex items-center justify-center hover:bg-[#F4A7B9] hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="font-serif font-bold text-xl text-[#1E245C] mb-1 group-hover:text-[#2436A8] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#F4A7B9] font-bold tracking-widest text-xs uppercase">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= COMMITTEE ================= */}
      <section className="py-24 bg-[#C6B7E2]/10 backdrop-blur-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Heart className="w-8 h-8 text-[#F4A7B9] mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl font-serif font-bold text-[#1E245C]">
              Committee <span className="text-[#2436A8]">Members</span>
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
                className="p-8 rounded-3xl bg-white border border-[#C6B7E2]/30 shadow-sm hover:shadow-2xl hover:shadow-[#F4A7B9]/20 transition-all duration-300 text-center relative overflow-hidden group"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#F4A7B9]/10 rounded-full group-hover:scale-[3] transition-transform duration-500" />

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2436A8] to-[#C6B7E2] flex items-center justify-center mx-auto mb-6 text-xl font-serif font-bold text-white shadow-lg">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <h3 className="font-serif font-bold text-[#1E245C] mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[#2436A8]/60 uppercase tracking-tighter">
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
