import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-10 md:pt-16 pb-6 md:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center mr-2">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold text-xs md:text-sm">TF</div>
              </div>
              <span className="text-lg md:text-xl font-heading font-bold">TF Alimentos</span>
            </div>
            <p className="mb-4 text-gray-400 text-xs md:text-sm mobile-text-fix">
              Qualidade em grãos há mais de 5 anos, fornecendo os melhores produtos para indústria e distribuição.
            </p>
            <div className="flex mb-3 md:mb-4">
              <MapPin className="text-yellow-500 mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0 mt-1" />
              <span className="text-xs md:text-sm mobile-text-fix">
                Rodovia BR-153 Parte Desmembrada 11 Remanescente Area 1 - Zona de Extensao Urbana<br />
                Cariri do Tocantins, TO - CEP 77453-000
              </span>
            </div>
            <div className="flex items-center mb-3 md:mb-4">
              <Phone className="text-yellow-500 mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              <span className="text-xs md:text-sm">(63) 98125-0698</span>
            </div>
            <div className="flex items-center break-all">
              <Mail className="text-yellow-500 mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              <span className="text-xs md:text-sm">tfalimentosltda1@gmail.com</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base md:text-lg mb-4 md:mb-6 relative pb-2 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-8 md:after:w-10 after:bg-yellow-500">
              Links Rápidos
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition flex items-center text-xs md:text-sm">
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" /> Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition flex items-center text-xs md:text-sm">
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" /> Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-gray-400 hover:text-white transition flex items-center text-xs md:text-sm">
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" /> Produtos
                </Link>
              </li>
              <li>
                <Link href="/qualidade" className="text-gray-400 hover:text-white transition flex items-center text-xs md:text-sm">
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" /> Centro de Qualidade
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition flex items-center text-xs md:text-sm">
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" /> Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-base md:text-lg mb-4 md:mb-6 relative pb-2 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-8 md:after:w-10 after:bg-yellow-500">
              Produtos
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/produtos/arroz-com-casca" className="text-gray-400 hover:text-white transition flex items-center text-xs md:text-sm">
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" /> Arroz com Casca
                </Link>
              </li>
              <li>
                <Link href="/produtos/soja-grao" className="text-gray-400 hover:text-white transition flex items-center text-xs md:text-sm">
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" /> Soja Grão
                </Link>
              </li>
              <li>
                <Link href="/produtos/milho" className="text-gray-400 hover:text-white transition flex items-center text-xs md:text-sm">
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" /> Milho
                </Link>
              </li>
              <li>
                <Link href="/qualidade" className="text-gray-400 hover:text-white transition flex items-center text-xs md:text-sm">
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" /> Certificações
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-base md:text-lg mb-4 md:mb-6 relative pb-2 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-8 md:after:w-10 after:bg-yellow-500">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4 text-xs md:text-sm mobile-text-fix">
              Receba novidades sobre produtos, tendências de mercado e conteúdos exclusivos.
            </p>
            <form className="mb-4">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="rounded-r-none bg-white text-xs md:text-sm h-8 md:h-10" 
                />
                <Button 
                  type="submit" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-l-none h-8 md:h-10 px-2 md:px-3"
                >
                  <Send className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </div>
            </form>
            <p className="text-xs text-gray-400 mb-3">Siga-nos</p>
            <div className="flex space-x-3 md:space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-primary w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="https://www.instagram.com/tfalimentos/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-primary w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition">
                <Youtube className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-0">
              © {new Date().getFullYear()} TF Alimentos. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
