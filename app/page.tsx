import Link from "next/link";
import { Container } from "@/components/container";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const featured = caseStudies.slice(0, 3);

  return (
    <>
      <section className="py-24 sm:py-32">
        <Container>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {siteConfig.title}
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-300">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/case-studies"
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              View Case Studies
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:text-neutral-100 dark:hover:border-neutral-700"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 py-20 dark:border-neutral-800">
        <Container>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Selected Work
            </h2>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <CaseStudyCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
