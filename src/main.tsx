import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IndexPage from "./pages/Index";
import PrivacyPage from "./pages/Privacy";
import CookiePolicyPage from "./pages/CookiePolicy";
import PlumbingPage from "./pages/Plumbing";
import ElectricalPage from "./pages/Electrical";
import NotFoundPage from "./pages/NotFound";
import CookieBanner from "./components/CookieBanner";
import "./styles.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/services/plumbing" element={<PlumbingPage />} />
          <Route path="/services/electrical" element={<ElectricalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
