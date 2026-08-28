import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
          Page not found
        </h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
}
