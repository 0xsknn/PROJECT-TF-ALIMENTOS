import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location === path;
  
  // Close mobile menu when navigating
  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <header className="fixed w-full bg-white dark:bg-[var(--header-bg)] shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center mr-2 text-white font-heading font-bold text-sm md:text-base">TF</div>
              <span className="text-base md:text-xl font-heading font-bold dark:text-white">TF Alimentos</span>
            </Link>
          </div>
          
          {/* Botões de menu e tema mobile */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Botão de tema */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
              className="p-1"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            {/* Menu mobile */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="p-1"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <nav className="flex space-x-4 lg:space-x-8 items-center text-sm lg:text-base">
              <Link href="/" className="font-heading font-semibold text-verde-lodo dark:text-green-400 px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                Início
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="link" className="font-heading font-semibold text-verde-lodo dark:text-green-400 p-0 h-auto hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-2 py-1">
                    Produtos <ChevronDown className="ml-1 h-3 w-3 md:h-4 md:w-4" />
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
              
              <Link href="/sobre" className="font-heading font-semibold text-verde-lodo dark:text-green-400 px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                Sobre Nós
              </Link>
              
              <Link href="/qualidade" className="font-heading font-semibold text-verde-lodo dark:text-green-400 px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                Centro de Qualidade
              </Link>
              
              <Link href="/contato" className="font-heading font-semibold text-verde-lodo dark:text-green-400 px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                Contato
              </Link>
            </nav>
            
            {/* Botão de tema Desktop */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
              className="ml-2"
            >
              {theme === 'dark' ? (
                <><Sun className="h-4 w-4 mr-1" /> <span className="text-xs">Claro</span></>
              ) : (
                <><Moon className="h-4 w-4 mr-1" /> <span className="text-xs">Escuro</span></>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-lg max-h-[calc(100vh-60px)] overflow-y-auto transition-colors duration-300">
          <div className="container mx-auto px-4 py-2">
            <Link 
              href="/" 
              className="block py-3 font-heading font-semibold text-verde-lodo dark:text-green-400 border-b dark:border-gray-700"
              onClick={handleMobileNavClick}
            >
              Início
            </Link>
            
            <div className="border-b dark:border-gray-700">
              <button 
                className="w-full text-left py-3 font-heading font-semibold text-verde-lodo dark:text-green-400 flex items-center justify-between"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Produtos <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileDropdownOpen && (
                <div className="pl-4 py-1 bg-gray-50 dark:bg-gray-800 rounded-md mb-2">
                  <Link 
                    href="/produtos" 
                    className="block py-2 hover:text-verde-lodo dark:hover:text-green-300 text-sm"
                    onClick={handleMobileNavClick}
                  >
                    Todos os Produtos
                  </Link>
                  <Link 
                    href="/produtos/arroz-com-casca" 
                    className="block py-2 hover:text-verde-lodo dark:hover:text-green-300 text-sm"
                    onClick={handleMobileNavClick}
                  >
                    Arroz com Casca
                  </Link>
                  <Link 
                    href="/produtos/soja-grao" 
                    className="block py-2 hover:text-verde-lodo dark:hover:text-green-300 text-sm"
                    onClick={handleMobileNavClick}
                  >
                    Soja Grão
                  </Link>
                  <Link 
                    href="/produtos/milho" 
                    className="block py-2 hover:text-verde-lodo dark:hover:text-green-300 text-sm"
                    onClick={handleMobileNavClick}
                  >
                    Milho
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/sobre" 
              className="block py-3 font-heading font-semibold text-verde-lodo dark:text-green-400 border-b dark:border-gray-700"
              onClick={handleMobileNavClick}
            >
              Sobre Nós
            </Link>
            
            <Link 
              href="/qualidade" 
              className="block py-3 font-heading font-semibold text-verde-lodo dark:text-green-400 border-b dark:border-gray-700"
              onClick={handleMobileNavClick}
            >
              Centro de Qualidade
            </Link>
            
            <Link 
              href="/contato" 
              className="block py-3 font-heading font-semibold text-verde-lodo dark:text-green-400 border-b dark:border-gray-700"
              onClick={handleMobileNavClick}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
