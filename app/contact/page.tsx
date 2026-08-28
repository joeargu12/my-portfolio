import type { Metadata } from "next";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
};

export default function ContactPage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 max-w-xl text-lg text-neutral-600 dark:text-neutral-300">
          Have a campaign in mind or just want to talk shop? Send a note and
          I&apos;ll get back to you within a couple of days.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <form
            action={`https://formspree.io/f/YOUR_FORM_ID`}
            method="POST"
            className="flex flex-col gap-5"
          >
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-neutral-200 bg-transparent px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-neutral-400 dark:border-neutral-800 dark:text-neutral-100 dark:focus:border-neutral-600"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-neutral-200 bg-transparent px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-neutral-400 dark:border-neutral-800 dark:text-neutral-100 dark:focus:border-neutral-600"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-neutral-900 dark:text-neutral-100"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-lg border border-neutral-200 bg-transparent px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-neutral-400 dark:border-neutral-800 dark:text-neutral-100 dark:focus:border-neutral-600"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-fit rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Email
              </h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-lg text-neutral-900 hover:underline dark:text-neutral-100"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Location
              </h2>
              <p className="mt-1 text-lg text-neutral-900 dark:text-neutral-100">
                {siteConfig.location}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                Elsewhere
              </h2>
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-neutral-900 hover:underline dark:text-neutral-100"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-neutral-900 hover:underline dark:text-neutral-100"
                >
                  Twitter
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-neutral-900 hover:underline dark:text-neutral-100"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
