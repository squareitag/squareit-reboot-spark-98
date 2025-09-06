import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  children?: React.ReactNode;
}

export const SEOHead = ({ 
  title, 
  description, 
  keywords = "IT Services, Managed Services, Cloud Migration, IT Consulting, Support, Schweiz, Zürich",
  canonical,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  children
}: SEOHeadProps) => {
  const { language } = useLanguage();
  const fullTitle = title.includes('Square IT') ? title : `${title} | Square IT AG`;
  
  // Determine if we're on staging and adjust canonical URLs accordingly
  const isStaging = typeof window !== 'undefined' && window.location.hostname.includes('sqsolutions.ch');
  const baseUrl = isStaging ? `https://${window.location.hostname}` : 'https://www.squareit.ch';
  
  // Get current path for hreflang
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const currentUrl = `${baseUrl}${currentPath}`;
  const finalCanonical = canonical || currentUrl;
  
  return (
    <Helmet>
      {/* Language and indexing attributes */}
      <html lang={language} />
      <meta httpEquiv="content-language" content={language} />
      {/* Allow indexing after authentication - Seobility can crawl after login */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Hreflang Links - Same URL serves multiple languages via context */}
      <link rel="alternate" hrefLang="de" href={currentUrl} />
      <link rel="alternate" hrefLang="en" href={currentUrl} />
      <link rel="alternate" hrefLang="de-CH" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />
      
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL - only add if not staging */}
      {!isStaging && finalCanonical && <link rel="canonical" href={finalCanonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={language === 'de' ? 'de_CH' : 'en_US'} />
      {finalCanonical && <meta property="og:url" content={finalCanonical} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Square IT AG",
          "url": "https://squareit.ch",
          "logo": "https://squareit.ch/squareit-favicon.png",
          "description": description,
          "inLanguage": language,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Alpenstrasse 12",
            "addressLocality": "Zug",
            "postalCode": "6300",
            "addressCountry": "CH"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+41-41-560-21-00",
            "contactType": "customer service",
            "email": "hello@squareit.ch"
          },
          "sameAs": [
            "https://www.linkedin.com/company/square-it-ag"
          ],
          "founder": {
            "@type": "Organization",
            "name": "Square IT AG"
          },
          "foundingDate": "1994",
          "numberOfEmployees": "5",
          "knowsAbout": [
            "Managed Services",
            "Cloud Migration", 
            "IT Consulting",
            "Microsoft 365",
            "Azure Migration",
            "IT Support"
          ]
        })}
      </script>
      
      {/* Sitemap reference for crawlers */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      
      {/* Additional custom meta tags */}
      {children}
    </Helmet>
  );
};