import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ManagedServicesPage from "./pages/services/ManagedServicesPage";
import MigrationPage from "./pages/services/MigrationPage";
import ConsultingPage from "./pages/services/ConsultingPage";
import SupportPage from "./pages/services/SupportPage";
import CareersPage from "./pages/CareersPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";

// Technology sub-pages
import CloudPage from "./pages/technologies/CloudPage";
import SecurityPage from "./pages/technologies/SecurityPage";
import InfrastructurePage from "./pages/technologies/InfrastructurePage";
import DatabasePage from "./pages/technologies/DatabasePage";
import NetworkingPage from "./pages/technologies/NetworkingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/managed-services" element={<ManagedServicesPage />} />
              <Route path="/services/migration" element={<MigrationPage />} />
              <Route path="/services/consulting" element={<ConsultingPage />} />
              <Route path="/services/support" element={<SupportPage />} />
              <Route path="/technologies" element={<TechnologiesPage />} />
              <Route path="/technologies/cloud" element={<CloudPage />} />
              <Route path="/technologies/security" element={<SecurityPage />} />
              <Route path="/technologies/infrastructure" element={<InfrastructurePage />} />
              <Route path="/technologies/database" element={<DatabasePage />} />
              <Route path="/technologies/networking" element={<NetworkingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
