import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import ModernHeader from "./components/ModernHeader";
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
import LinkedInPostManager from "./components/LinkedInPostManager";
import ITCalculatorPage from "./pages/ITCalculatorPage";

// Service sub-pages
import ManagedInfrastructurePage from "./pages/services/ManagedInfrastructurePage";
import ManagedWorkplacePage from "./pages/services/ManagedWorkplacePage";
import ManagedServersPage from "./pages/services/ManagedServersPage";
import ManagedNetworkPage from "./pages/services/ManagedNetworkPage";
import ManagedBackupPage from "./pages/services/ManagedBackupPage";
import M365MigrationPage from "./pages/services/M365MigrationPage";
import AzureMigrationPage from "./pages/services/AzureMigrationPage";
import SharePointTeamsMigrationPage from "./pages/services/SharePointTeamsMigrationPage";
import ModernWorkplacePage from "./pages/services/ModernWorkplacePage";
import CloudSecurityPage from "./pages/services/CloudSecurityPage";
import CollaborationPage from "./pages/services/CollaborationPage";
import TeamstelephonePage from "./pages/services/TeamstelephonePage";
import WorkshopPage from "./pages/services/WorkshopPage";

// Technology pages
import Microsoft365Page from "./pages/technologies/Microsoft365Page";
import MicrosoftAzurePage from "./pages/technologies/MicrosoftAzurePage";
import CloudPage from "./pages/technologies/CloudPage";
import SecurityPage from "./pages/technologies/SecurityPage";
import NetworkingPage from "./pages/technologies/NetworkingPage";
import InfrastructurePage from "./pages/technologies/InfrastructurePage";
import DatabasePage from "./pages/technologies/DatabasePage";
import AvePointBackupPage from "./pages/technologies/AvePointBackupPage";
import CatoNetworksPage from "./pages/technologies/CatoNetworksPage";
import KeeperPage from "./pages/technologies/KeeperPage";
import PeoplefonePage from "./pages/technologies/PeoplefonePage";
import PrintixPage from "./pages/technologies/PrintixPage";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <ModernHeader />
            <main className="flex-1">
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/admin/linkedin" element={<LinkedInPostManager />} />
              <Route path="/services/managed-services" element={<ManagedServicesPage />} />
              <Route path="/services/migration" element={<MigrationPage />} />
              <Route path="/services/consulting" element={<ConsultingPage />} />
              <Route path="/services/support" element={<SupportPage />} />
              <Route path="/technologies" element={<TechnologiesPage />} />
              
              {/* Service sub-pages */}
              <Route path="/services/managed-infrastructure" element={<ManagedInfrastructurePage />} />
              <Route path="/services/managed-workplace" element={<ManagedWorkplacePage />} />
              <Route path="/services/managed-servers" element={<ManagedServersPage />} />
              <Route path="/services/managed-network" element={<ManagedNetworkPage />} />
              <Route path="/services/managed-backup" element={<ManagedBackupPage />} />
              <Route path="/services/m365-migration" element={<M365MigrationPage />} />
              <Route path="/services/azure-migration" element={<AzureMigrationPage />} />
              <Route path="/services/sharepoint-teams-migration" element={<SharePointTeamsMigrationPage />} />
              <Route path="/services/modern-workplace" element={<ModernWorkplacePage />} />
              <Route path="/services/cloud-security" element={<CloudSecurityPage />} />
              <Route path="/services/collaboration" element={<CollaborationPage />} />
              <Route path="/services/teams-telephone" element={<TeamstelephonePage />} />
              <Route path="/services/workshop" element={<WorkshopPage />} />
              
              {/* Technology pages */}
              <Route path="/technologies/microsoft-365" element={<Microsoft365Page />} />
              <Route path="/technologies/microsoft-azure" element={<MicrosoftAzurePage />} />
              <Route path="/technologies/cloud" element={<CloudPage />} />
              <Route path="/technologies/security" element={<SecurityPage />} />
              <Route path="/technologies/networking" element={<NetworkingPage />} />
              <Route path="/technologies/infrastructure" element={<InfrastructurePage />} />
              <Route path="/technologies/database" element={<DatabasePage />} />
              <Route path="/technologies/avepoint-backup" element={<AvePointBackupPage />} />
              <Route path="/technologies/cato-networks" element={<CatoNetworksPage />} />
              <Route path="/technologies/keeper" element={<KeeperPage />} />
              <Route path="/technologies/peoplefone" element={<PeoplefonePage />} />
              <Route path="/technologies/printix" element={<PrintixPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/kalkulator" element={<ITCalculatorPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;
