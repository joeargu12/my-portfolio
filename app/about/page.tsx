import type { Metadata } from "next";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
};

export default function AboutPage() {
  const { about } = siteConfig;

  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          About
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
          {about.intro}
        </p>

        <div className="mt-16">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            What I Do
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {about.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800"
              >
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Experience
          </h2>
          <div className="mt-6 flex flex-col gap-8">
            {about.experience.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="flex flex-col gap-1 border-l-2 border-neutral-200 pl-6 dark:border-neutral-800 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                    {job.role} &middot; {job.company}
                  </h3>
                  <p className="mt-1 max-w-lg text-sm text-neutral-600 dark:text-neutral-300">
                    {job.summary}
                  </p>
                </div>
                <p className="whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                  {job.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
