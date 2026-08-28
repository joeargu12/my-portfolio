import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { VideoEmbed } from "@/components/video-embed";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getCaseStudy(params.slug);
  if (!project) {
    return { title: `Case Study — ${siteConfig.name}` };
  }
  return { title: `${project.title} — ${siteConfig.name}` };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getCaseStudy(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Container>
      <div className="py-20">
        <Link
          href="/case-studies"
          className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          &larr; Back to Case Studies
        </Link>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          {project.client} &middot; {project.platform}
        </p>

        {project.video && (
          <div className="mt-8">
            <VideoEmbed video={project.video} title={project.title} />
          </div>
        )}

        <div className="mt-10 grid grid-cols-2 gap-6 border-y border-neutral-200 py-8 dark:border-neutral-800 sm:grid-cols-4">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            The Campaign
          </h2>
          <p className="mt-4 whitespace-pre-line text-neutral-600 dark:text-neutral-300">
            {project.description}
          </p>
        </div>
      </div>
    </Container>
  );
}
