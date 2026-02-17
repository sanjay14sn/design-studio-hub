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
  "Labor Ward Protocol Workshop",
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
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute w-[420px] h-[420px] bg-secondary/40 -top-40 -right-40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Shield className="w-4 h-4" />
              Programs
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-primary">Programs</span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Regular educational programs and community initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Programs */}
      <section className="py-0 bg-background">
        <div className="container mx-auto px-2">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
            Monthly <span className="text-primary">Programs</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {programs.map((program, index) => (
              <div
                key={index}
                className="
                  p-8 rounded-3xl bg-card
                  border border-border
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-lg hover:-translate-y-1
                "
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                      {program.title}
                    </h3>

                    <p className="flex items-center gap-2 text-primary font-medium mb-4">
                      <Calendar className="w-4 h-4" />
                      {program.schedule}
                    </p>

                    <p className="text-muted-foreground">
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Workshops */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Provisional <span className="text-primary">Workshops</span>
              </h2>

              <div className="space-y-4">
                {workshops.map((workshop, index) => (
                  <div
                    key={index}
                    className="
                      p-4 rounded-xl
                      bg-secondary/20
                      border border-border
                      flex items-center gap-4
                      transition-all duration-300
                      hover:bg-primary/10
                    "
                  >
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-foreground">
                      {workshop}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outreach */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Outreach <span className="text-primary">Programs</span>
              </h2>

              <div className="space-y-4">
                {outreach.map((program, index) => (
                  <div
                    key={index}
                    className="
                      p-4 rounded-xl
                      bg-secondary/20
                      border border-border
                      flex items-center gap-4
                      transition-all duration-300
                      hover:bg-primary/10
                    "
                  >
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-foreground">
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
