import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google"

const inter = Inter({weight:["100","200","300","400","500","600","700","800","900"],subsets:["latin"]})

export const metadata: Metadata = {
  title: "Certify",
  description: "The smart way to verify and protect product authenticity with secure NFT integration.",
  keywords: "NFT certification, product authenticity, blockchain verification, anti-counterfeit, product tracking, digital certificates, secure verification, NFT ownership, product authentication, brand protection, African markets, secure NFT, product security",
  openGraph: {
    title: 'Certify',
    description: 'The smart way to verify and protect product authenticity with secure NFT integration.',
    url: 'https://certify.com', 
    siteName: 'Certify',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Certify - Product Authentication Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certify',
    description: 'The smart way to verify and protect product authenticity with secure NFT integration.',
    creator: '@inspikalu', 
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
