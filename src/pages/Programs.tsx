import Layout from "@/components/layout/Layout";
import { Shield, BookOpen, Users, Heart, Calendar, Clock } from "lucide-react";

const programs = [
  {
    title: "CME Meetings",
    schedule: "2nd Sunday of every month",
    description: "Continuing Medical Education to enhance knowledge and skills in obstetrics and gynecology.",
    icon: BookOpen,
  },
  {
    title: "Clinical Meetings",
    schedule: "4th Tuesday of every month",
    description: "Platform to discuss clinical cases, updates, and advancements in the field.",
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
      <section className="py-24 relative overflow-hidden">
        <div className="floating-shape w-96 h-96 -top-48 -right-48 blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-badge mx-auto">
              <Shield className="w-4 h-4" />
              <span>Programs</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Our <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Regular educational programs and community initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Programs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            Monthly <span className="gradient-text">Programs</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="p-8 rounded-3xl bg-card border border-border card-hover">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <program.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{program.title}</h3>
                    <p className="flex items-center gap-2 text-primary font-medium mb-4">
                      <Calendar className="w-4 h-4" />
                      {program.schedule}
                    </p>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">
                Provisional <span className="gradient-text">Workshops</span>
              </h2>
              <div className="space-y-4">
                {workshops.map((workshop, index) => (
                  <div key={index} className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-4 card-hover">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{workshop}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">
                Outreach <span className="gradient-text">Programs</span>
              </h2>
              <div className="space-y-4">
                {outreach.map((program, index) => (
                  <div key={index} className="p-4 rounded-xl bg-secondary/5 border border-secondary/20 flex items-center gap-4 card-hover">
                    <div className="w-10 h-10 rounded-full gradient-bg-secondary flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <span className="font-medium">{program}</span>
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
