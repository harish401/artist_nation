import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { getDefaultMetadata, getAllSchemas } from "@/lib/seo";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CursorGlow } from "@/components/providers/cursor-glow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const metadataConfig = getDefaultMetadata();
const siteDescription = metadataConfig.description;

export const metadata: Metadata = {
  metadataBase: new URL("https://artistnation.in"),
  title: {
    default: metadataConfig.title,
    template: "%s | Artist Nation",
  },
  description: metadataConfig.description,
  keywords: metadataConfig.keywords,
  openGraph: metadataConfig.openGraph,
  twitter: metadataConfig.twitter,
  alternates: metadataConfig.alternates,
  robots: metadataConfig.robots,
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
        <meta name="description" content={metadataConfig.description} />
        <meta property="og:description" content={siteDescription} />
        <meta name="twitter:description" content={siteDescription} />
        <link rel="canonical" href="https://artistnation.in" />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="bg-black text-white antialiased">
        <SmoothScrollProvider>
          <CursorGlow />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
