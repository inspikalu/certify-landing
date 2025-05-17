import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Certify",
  description: "Solana-Native Standard for Tokenizing Real-World Assets",
  keywords: "NFT certification, product authenticity, blockchain verification, anti-counterfeit, product tracking, digital certificates, secure verification, NFT ownership, product authentication, brand protection, African markets, secure NFT, product security",
  openGraph: {
    title: 'Certify',
    description: 'Solana-Native Standard for Tokenizing Real-World Assets',
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
        className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
