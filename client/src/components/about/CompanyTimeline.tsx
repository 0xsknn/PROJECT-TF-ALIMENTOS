import { Star } from "lucide-react";
import { timelineEvents } from "@/data/timelineEvents";

const CompanyTimeline = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
            Nossa Trajetória
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os principais marcos na história da TF Alimentos.
          </p>
        </div>
        
        <div className="space-y-8">
          {timelineEvents.map((event) => (
            <div key={event.year} className="relative pl-10 md:pl-0 timeline-item">
              <div className="md:flex md:items-center">
                <div className="absolute left-0 md:relative md:w-1/4 md:pr-8 md:text-right">
                  <div className="md:hidden absolute left-0 top-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                    <Star className="h-4 w-4" />
                  </div>
                  <span className="font-heading font-bold text-primary text-xl">{event.year}</span>
                </div>
                
                <div className="hidden md:block md:w-14 relative">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                    <Star className="h-4 w-4" />
                  </div>
                  <div className="absolute left-1/2 top-10 -translate-x-1/2 w-1 h-full bg-gray-300"></div>
                </div>
                
                <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md md:ml-8">
                  <h3 className="font-heading font-semibold text-xl mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
