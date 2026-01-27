import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Shield } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Mid-Year Conference 2025",
    description: "Annual mid-year conference featuring workshops, presentations, and networking opportunities for healthcare professionals.",
    date: "July 15-17, 2025",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "CME Program on High Risk Pregnancy",
    description: "Continuing Medical Education program focusing on latest developments in managing high-risk pregnancies.",
    date: "August 10, 2025",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Gynobotics Workshop",
    description: "Hands-on training workshop on robotic-assisted gynecological procedures.",
    date: "September 5, 2025",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
  },
];

const EventsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge mx-auto">
            <Shield className="w-4 h-4" />
            <span>OGSSI Events</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Our Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join us at our upcoming conferences, workshops, and educational programs 
            designed to advance your knowledge and skills.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="event-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-card-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-primary-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{event.location}</span>
                </div>
                <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {event.description}
                </p>
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  View More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/events" className="btn-primary-gradient inline-flex items-center gap-2">
            View All Events
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
