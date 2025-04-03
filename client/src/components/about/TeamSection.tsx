import { Facebook, Twitter, Mail, Linkedin } from "lucide-react";
import { teamMembers } from "@/data/teamMembers";

const TeamSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
            Nossa Equipe
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os profissionais que fazem a diferença na TF Alimentos, unindo experiência e paixão pelo agronegócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin || "#"} className="text-gray-600 hover:text-primary transition">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.twitter || "#"} className="text-gray-600 hover:text-primary transition">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-primary transition">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
