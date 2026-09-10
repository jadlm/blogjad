import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jad Lamtaifi — Full-Stack Developer",
  description:
    "Portfolio de Jad Lamtaifi, développeur full-stack basé à Casablanca. Sites web, e-commerce et applications modernes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" style={{ scrollBehavior: "smooth" }}>
      <body>{children}</body>
    </html>
  );
}
