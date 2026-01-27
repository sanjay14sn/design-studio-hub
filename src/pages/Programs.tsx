import Layout from "@/components/layout/Layout";
import { Shield, BookOpen, Users, Heart, Calendar } from "lucide-react";

const programs = [
  {
    title: "CME Meetings",
    schedule: "2nd Sunday of every month",
    description:
      "Continuing Medical Education to enhance knowledge and skills in obstetrics and gynecology.",
    icon: BookOpen,
  },
  {
    title: "Clinical Meetings",
    schedule: "4th Tuesday of every month",
    description:
      "Platform to discuss clinical cases, updates, and advancements in the field.",
    icon: Users,
  },
];

const workshops = [
  "Colposcopy Workshop",
  "6P's Workshop",
  "Adolescent Health Workshop",
  "Hysteroscopy Workshop",
  "FOGSI-FIGO-OGSSI Cervical Cancer Workshop",
  "Embryo Transfer Workshop",
];

const outreach = [
  "National Girls Child Day",
  "Cancer Awareness Programs",
  "Women Health Check-up Camps",
  "Anemia Screening Camps",
  "HPV Vaccination Drive",
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-[#FAFAFD] relative overflow-hidden">
        <div className="absolute w-[420px] h-[420px] bg-[#C6B7E2]/40 -top-40 -right-40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2436A8]/10 text-[#2436A8] font-semibold text-sm mb-6">
              <Shield className="w-4 h-4" />
              Programs
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1E245C] mb-6">
              Our <span className="text-[#2436A8]">Programs</span>
            </h1>

            <p className="text-lg text-[#1E245C]/70">
              Regular educational programs and community initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Programs */}
      <section className="py-0 bg-[#FAFAFD]">
        <div className="container mx-auto px-2">
          <h2 className="text-3xl font-serif font-bold text-center text-[#1E245C] mb-12">
            Monthly <span className="text-[#2436A8]">Programs</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {programs.map((program, index) => (
              <div
                key={index}
                className="
                  p-8 rounded-3xl bg-white
                  border border-[#C6B7E2]/40
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-lg hover:-translate-y-1
                "
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#2436A8] flex items-center justify-center flex-shrink-0">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#1E245C] mb-2">
                      {program.title}
                    </h3>

                    <p className="flex items-center gap-2 text-[#2436A8] font-medium mb-4">
                      <Calendar className="w-4 h-4" />
                      {program.schedule}
                    </p>

                    <p className="text-[#1E245C]/70">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops & Outreach */}
      <section className="py-24 bg-[#FAFAFD]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Workshops */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#1E245C] mb-8">
                Provisional <span className="text-[#2436A8]">Workshops</span>
              </h2>

              <div className="space-y-4">
                {workshops.map((workshop, index) => (
                  <div
                    key={index}
                    className="
                      p-4 rounded-xl
                      bg-[#C6B7E2]/20
                      border border-[#C6B7E2]/40
                      flex items-center gap-4
                      transition-all duration-300
                      hover:bg-[#F4A7B9]/20
                    "
                  >
                    <div className="w-10 h-10 rounded-full bg-[#2436A8] flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-[#1E245C]">
                      {workshop}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outreach */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#1E245C] mb-8">
                Outreach <span className="text-[#2436A8]">Programs</span>
              </h2>

              <div className="space-y-4">
                {outreach.map((program, index) => (
                  <div
                    key={index}
                    className="
                      p-4 rounded-xl
                      bg-[#C6B7E2]/20
                      border border-[#C6B7E2]/40
                      flex items-center gap-4
                      transition-all duration-300
                      hover:bg-[#F4A7B9]/20
                    "
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F4A7B9] flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-[#1E245C]">
                      {program}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
