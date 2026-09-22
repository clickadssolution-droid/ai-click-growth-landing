import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import { AuditModalProvider } from "@/context/AuditModalContext";
import { AuditModal } from "@/components/modal/AuditModal";
import { SITE } from "@/lib/constants";
import "./globals.css";

/**
 * Display (V1.3 punto 1): Manrope reemplaza a Plus Jakarta Sans en todo el sitio
 * (una sola familia de display, sigue siendo "font-display" en globals.css).
 * ExtraBold(800)/Bold(700) — más editorial y con más peso visual que Jakarta para
 * el headline del Hero, sin perder legibilidad. Sora y Space Grotesk se evaluaron
 * y descartaron: Sora aporta menos contraste de peso en ExtraBold real para un
 * headline grande, y Space Grotesk (con su "a" de un solo piso y "G" inusual) lee
 * más "indie-tech" que "agencia B2B premium", que es el posicionamiento de marca.
 */
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  // 600 cubre los usos existentes de font-semibold+font-display (botones, FAQ,
  // acordeones); 700/800 son Bold/ExtraBold para headlines (V1.3 punto 1).
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — Auditoría Growth 360° gratuita`,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-navy-900">
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        <AuditModalProvider>
          {children}
          <AuditModal />
        </AuditModalProvider>
      </body>
    </html>
  );
}
