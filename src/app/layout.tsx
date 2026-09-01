import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { getDefaultMetadata, getAllSchemas } from "@/lib/seo";
import { CursorGlow } from "@/components/providers/cursor-glow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const metadataConfig = getDefaultMetadata();

export const metadata: Metadata = {
  metadataBase: new URL("https://artistnation.in"),
  applicationName: metadataConfig.applicationName,
  title: {
    default: metadataConfig.title,
    template: "%s | Artist Nation Entertainments",
  },
  description: metadataConfig.description,
  keywords: metadataConfig.keywords,
  authors: metadataConfig.authors,
  creator: metadataConfig.creator,
  publisher: metadataConfig.publisher,
  openGraph: metadataConfig.openGraph,
  twitter: metadataConfig.twitter,
  alternates: metadataConfig.alternates,
  robots: metadataConfig.robots,
  icons: metadataConfig.icons,
  manifest: metadataConfig.manifest,
  other: metadataConfig.other,
  verification: {},
  category: "Event Management",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = getAllSchemas();

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta
          name="description"
          content="Artist Nation Entertainments is South India's premier event management company for corporate galas, product launches, movie promotions, and live stage shows across Bangalore, Chennai, and Cochin."
        />
        {process.env.NODE_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9DCJBRV');`,
            }}
          />
        )}
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="bg-black text-white antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9DCJBRV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
