import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { WhatsappCta } from "@/components/gracias/WhatsappCta";
import { ThankYouViewTracker } from "@/components/gracias/ThankYouViewTracker";
import { GRACIAS_CONTENT } from "@/lib/constants";
import { hasLogoColor, hasLogoWhite } from "@/lib/brand-assets";

export const metadata: Metadata = {
  title: "Gracias — AI Click Solution",
  description: GRACIAS_CONTENT.headline,
};

export default function GraciasPage() {
  return (
    <div>
      <ThankYouViewTracker />
      <Header hasLogoColor={hasLogoColor} />
      <main id="main-content">
        <section className="bg-white py-14 sm:py-16 lg:py-20">
          <Container className="max-w-2xl text-center">
            <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12.5l4.5 4.5L19 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <h1 className="font-display text-[clamp(1.875rem,1.6rem+1.2vw,2.75rem)] font-bold leading-[1.15] text-navy-900">
              {GRACIAS_CONTENT.headline}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-muted-light">{GRACIAS_CONTENT.body}</p>

            <div className="mx-auto mt-12 max-w-lg rounded-[var(--radius-lg)] border border-border-light bg-ivory-50 p-7 sm:p-8">
              <h2 className="font-display text-xl font-bold text-navy-900">
                {GRACIAS_CONTENT.secondaryHeadline}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-text-muted-light">
                {GRACIAS_CONTENT.secondaryBody}
              </p>
              <div className="mt-6 flex justify-center">
                <WhatsappCta />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer hasLogoWhite={hasLogoWhite} />
    </div>
  );
}
