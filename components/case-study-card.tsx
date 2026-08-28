import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export function CaseStudyCard({ project }: { project: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${project.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
    >
      <div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-neutral-900 group-hover:underline dark:text-neutral-100">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {project.client} &middot; {project.platform}
        </p>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
          {project.summary}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
        {project.metrics.slice(0, 2).map((metric) => (
          <div key={metric.label}>
            <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {metric.value}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </Link>
  );
}
