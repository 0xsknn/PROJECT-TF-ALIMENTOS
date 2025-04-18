import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import About from "@/pages/About";
import QualityCenter from "@/pages/QualityCenter";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/produtos/:id" component={ProductDetails} />
      <Route path="/sobre" component={About} />
      <Route path="/qualidade" component={QualityCenter} />
      <Route path="/contato" component={Contact} />
      {/* Route para página de produtos geral - redireciona para a home */}
      <Route path="/produtos" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
