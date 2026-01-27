import Layout from "@/components/layout/Layout";
import { Shield, Calendar, MapPin, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Mid-Year Conference 2025",
    description: "Annual mid-year conference featuring workshops, presentations, and networking opportunities.",
    date: "July 15-17, 2025",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80",
    type: "Conference",
  },
  {
    id: 2,
    title: "CME Program on High Risk Pregnancy",
    description: "Continuing Medical Education program focusing on managing high-risk pregnancies.",
    date: "August 10, 2025",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    type: "CME",
  },
  {
    id: 3,
    title: "Gynobotics Workshop",
    description: "Hands-on training on robotic-assisted gynecological procedures.",
    date: "September 5, 2025",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    type: "Workshop",
  },
  {
    id: 4,
    title: "World Population Day Event",
    description: "Poster and slogan contest celebrating World Population Day.",
    date: "July 11, 2025",
    location: "Online",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80",
    type: "Event",
  },
];

const pastEvents = [
  {
    id: 1,
    title: "OGSSI FOGSI and TNFOG Meeting",
    date: "May 2025",
  },
  {
    id: 2,
    title: "HPV Vaccination Drive",
    date: "April 2025",
  },
  {
    id: 3,
    title: "International Nurses Day",
    date: "May 2025",
  },
  {
    id: 4,
    title: "Vivaadham Webinar Series",
    date: "April 2025",
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="floating-shape w-96 h-96 -top-48 -right-48 blur-3xl" />
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-badge mx-auto">
              <Shield className="w-4 h-4" />
              <span>Events</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Our <span className="gradient-text">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join us at conferences, workshops, and educational programs.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card group flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-card-image w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12">
            Past <span className="gradient-text">Events</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <h3 className="font-serif font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {event.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
