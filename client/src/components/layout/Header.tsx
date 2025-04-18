import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-2 text-white font-heading font-bold">TF</div>
              <span className="text-xl font-heading font-bold">TF Alimentos</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={`font-heading font-semibold ${isActive('/') ? 'text-primary border-b-2 border-primary' : 'hover:text-primary'}`}>
              Início
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="font-heading font-semibold hover:text-primary p-0 h-auto">
                  Produtos <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/produtos/arroz-com-casca" className="w-full">Arroz com Casca</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/produtos/soja-grao" className="w-full">Soja Grão</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/produtos/milho" className="w-full">Milho</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/sobre" className={`font-heading font-semibold ${isActive('/sobre') ? 'text-primary border-b-2 border-primary' : 'hover:text-primary'}`}>
              Sobre Nós
            </Link>
            

            <Link href="/qualidade" className={`font-heading font-semibold ${isActive('/qualidade') ? 'text-primary border-b-2 border-primary' : 'hover:text-primary'}`}>
              Centro de Qualidade
            </Link>
            
            <Link href="/contato" className={`font-heading font-semibold ${isActive('/contato') ? 'text-primary border-b-2 border-primary' : 'hover:text-primary'}`}>
              Contato
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <Link href="/" className={`block py-2 font-heading font-semibold ${isActive('/') ? 'text-primary' : 'hover:text-primary'}`}>
              Início
            </Link>
            
            <div className="mobile-dropdown">
              <button 
                className="w-full text-left py-2 font-heading font-semibold hover:text-primary flex items-center justify-between"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Produtos <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileDropdownOpen && (
                <div className="pl-4 py-1">
                  <Link href="/produtos/arroz-com-casca" className="block py-2 hover:text-primary">
                    Arroz com Casca
                  </Link>
                  <Link href="/produtos/soja-grao" className="block py-2 hover:text-primary">
                    Soja Grão
                  </Link>
                  <Link href="/produtos/milho" className="block py-2 hover:text-primary">
                    Milho
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/sobre" className={`block py-2 font-heading font-semibold ${isActive('/sobre') ? 'text-primary' : 'hover:text-primary'}`}>
              Sobre Nós
            </Link>
            

            <Link href="/qualidade" className={`block py-2 font-heading font-semibold ${isActive('/qualidade') ? 'text-primary' : 'hover:text-primary'}`}>
              Centro de Qualidade
            </Link>
            
            <Link href="/contato" className={`block py-2 font-heading font-semibold ${isActive('/contato') ? 'text-primary' : 'hover:text-primary'}`}>
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
