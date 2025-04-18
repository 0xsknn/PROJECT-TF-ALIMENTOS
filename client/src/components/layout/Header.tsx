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
              <img 
                src="/images/logo.png" 
                alt="TF Alimentos Logo" 
                className="h-12 mr-2" 
              />
              <span className="text-xl font-heading font-bold text-verde-lodo">TF Alimentos</span>
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
            <Link href="/" className="font-heading font-semibold text-verde-lodo">
              Início
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="font-heading font-semibold text-verde-lodo p-0 h-auto">
                  Produtos <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/produtos" className="w-full">Todos os Produtos</Link>
                </DropdownMenuItem>
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
            
            <Link href="/sobre" className="font-heading font-semibold text-verde-lodo">
              Sobre Nós
            </Link>
            
            <Link href="/qualidade" className="font-heading font-semibold text-verde-lodo">
              Centro de Qualidade
            </Link>
            
            <Link href="/contato" className="font-heading font-semibold text-verde-lodo">
              Contato
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <Link href="/" className="block py-2 font-heading font-semibold text-verde-lodo">
              Início
            </Link>
            
            <div className="mobile-dropdown">
              <button 
                className="w-full text-left py-2 font-heading font-semibold text-verde-lodo flex items-center justify-between"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Produtos <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileDropdownOpen && (
                <div className="pl-4 py-1">
                  <Link href="/produtos" className="block py-2 hover:text-verde-lodo">
                    Todos os Produtos
                  </Link>
                  <Link href="/produtos/arroz-com-casca" className="block py-2 hover:text-verde-lodo">
                    Arroz com Casca
                  </Link>
                  <Link href="/produtos/soja-grao" className="block py-2 hover:text-verde-lodo">
                    Soja Grão
                  </Link>
                  <Link href="/produtos/milho" className="block py-2 hover:text-verde-lodo">
                    Milho
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/sobre" className="block py-2 font-heading font-semibold text-verde-lodo">
              Sobre Nós
            </Link>
            
            <Link href="/qualidade" className="block py-2 font-heading font-semibold text-verde-lodo">
              Centro de Qualidade
            </Link>
            
            <Link href="/contato" className="block py-2 font-heading font-semibold text-verde-lodo">
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
