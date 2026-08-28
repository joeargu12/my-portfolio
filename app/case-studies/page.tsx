import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Case Studies — ${siteConfig.name}`,
};

export default function CaseStudiesPage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          Case Studies
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
          A selection of campaigns I&apos;ve planned and led, with the platforms
          they ran on and the results they drove.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
}
