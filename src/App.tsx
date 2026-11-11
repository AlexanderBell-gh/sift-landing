import type { ComponentType } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LandingPage from './components/pages/LandingPage';
import { CookieConsent } from './components/ui/CookieConsent';
import {
  AboutPage,
  CookiesPage,
  LicensePage,
  PrivacyPage,
  TermsPage,
} from './components/pages/LegalPages';

// Cloudflare Pages serves every path from index.html (public/_redirects), so
// route on the pathname — five static pages don't need a router dependency.
const PAGES: Record<string, ComponentType> = {
  '/about': AboutPage,
  '/cookies': CookiesPage,
  '/license': LicensePage,
  '/privacy': PrivacyPage,
  '/terms': TermsPage,
};

export default function App() {
  const Page = PAGES[window.location.pathname.replace(/\/+$/, '')] ?? LandingPage;
  return (
    <ThemeProvider>
      <Page />
      <CookieConsent />
    </ThemeProvider>
  );
}
