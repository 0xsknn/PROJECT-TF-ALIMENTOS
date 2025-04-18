import { useEffect } from 'react';
import { useLocation } from 'wouter';

// Componente que força o redirecionamento para a página de produtos
const RedirectToProducts = () => {
  const [, setLocation] = useLocation();
  
  // Efeito executado quando o componente é montado
  useEffect(() => {
    // Redireciona para a página de produtos
    setLocation('/produtos');
  }, [setLocation]);
  
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">Redirecionando para página de produtos...</p>
    </div>
  );
};

export default RedirectToProducts;