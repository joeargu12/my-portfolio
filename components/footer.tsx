import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
