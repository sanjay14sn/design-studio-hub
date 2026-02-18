import React from "react";
import Layout from "@/components/layout/Layout";
import { Shield, Calendar, MapPin, ArrowRight, Info, Inbox } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Mid-Year Conference 2025",
    description: "Annual mid-year conference featuring workshops, presentations, and networking opportunities for medical professionals.",
    date: "July 15-17, 2025",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80",
    type: "Conference",
  },
  {
    id: 2,
    title: "CME Program on High Risk Pregnancy",
    description: "Continuing Medical Education program focusing on the latest protocols for managing high-risk pregnancies.",
    date: "August 10, 2025",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    type: "CME",
  },
  {
    id: 3,
    title: "Gynobotics Workshop",
    description: "Hands-on clinical training session on robotic-assisted gynecological procedures and surgical techniques.",
    date: "September 5, 2025",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    type: "Workshop",
  },
  {
    id: 4,
    title: "World Population Day Event",
    description: "Public awareness initiative featuring poster and slogan contests celebrating World Population Day.",
    date: "July 11, 2025",
    location: "Online",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80",
    type: "Event",
  },
];

const hasEvents = upcomingEvents.length > 0;

const Events = () => {
  return (
    <Layout>
      {/* --- Simple Hero Section --- */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm mb-4">


            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Conference <span className="text-primary">Events</span> & Programs
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Stay updated with our latest conferences, workshops, and educational programs
              designed to empower healthcare professionals through knowledge and connection.
            </p>
          </div>
        </div>
      </section>

      {/* --- Main Events Grid --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-slate-800">
            Upcoming Schedule
            <span className="h-px flex-1 bg-slate-200 ml-4"></span>
          </h2>

          {hasEvents ? (
            <div className="grid gap-8 lg:grid-cols-2">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col md:flex-row bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="md:w-2/5 h-56 md:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col">
                    <div className="mb-3">
                      <span className="px-2.5 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 flex-grow">
                      {event.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="font-medium">{event.location}</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
              <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800">No events currently scheduled</h3>
              <p className="text-slate-500 mt-2">Check back later or subscribe for email notifications.</p>
            </div>
          )}
        </div>
      </section>

      {/* --- Past Events / Archive --- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Event <span className="text-primary">Archive</span>
            </h2>
            <p className="text-slate-400">Review highlights and galleries from our previous milestones.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-primary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  <Info className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg mb-2">Annual Meet {2024 - item}</h4>
                <p className="text-sm text-slate-400 mb-6">
                  Documentation and key takeaways from the {2024 - item} regional medical symposium.
                </p>
                <button className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Gallery <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Simple CTA --- */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Want to host a CME or Workshop?</h2>
          <button className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-slate-100 transition-colors shadow-lg">
            Get in Touch
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Events;