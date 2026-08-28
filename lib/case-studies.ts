export type VideoEmbed = {
  provider: "youtube" | "vimeo";
  id: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  platform: string;
  summary: string;
  description: string;
  tags: string[];
  video?: VideoEmbed;
  metrics: Metric[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "streamline-launch-campaign",
    title: "Product Launch Campaign",
    client: "Streamline Home",
    platform: "YouTube & Meta Ads",
    summary:
      "A multi-channel launch campaign that introduced a new smart-home product line to a cold audience.",
    description:
      "Planned and executed a six-week launch campaign spanning YouTube pre-roll, Meta feed and story placements, and an influencer seeding program. Led creative direction on a 60-second hero video and produced five cutdowns tailored to each platform's format. Coordinated with the analytics team to build a full-funnel attribution model so spend could be reallocated toward the best-performing creative mid-flight.",
    tags: ["Paid Social", "Video Production", "Product Launch"],
    video: {
      provider: "youtube",
      id: "YOUR_YOUTUBE_VIDEO_ID",
    },
    metrics: [
      { label: "Reach", value: "4.2M" },
      { label: "CTR", value: "2.8%" },
      { label: "CAC", value: "-34%" },
      { label: "ROAS", value: "5.1x" },
    ],
  },
  {
    slug: "brightloop-demo-growth",
    title: "Demo Request Growth Program",
    client: "Brightloop",
    platform: "LinkedIn Ads & Email",
    summary:
      "A full-funnel B2B program combining targeted LinkedIn ads with a lifecycle email sequence to triple demo requests.",
    description:
      "Redesigned the top-of-funnel strategy for a Series B SaaS product, moving from generic awareness ads to a tightly segmented ABM approach on LinkedIn. Built a nurture sequence in the email platform that adjusted messaging based on firmographic data and engagement signals, cutting the sales cycle by two weeks on average.",
    tags: ["B2B", "Lifecycle Marketing", "ABM"],
    video: {
      provider: "vimeo",
      id: "YOUR_VIMEO_VIDEO_ID",
    },
    metrics: [
      { label: "Demo Requests", value: "+212%" },
      { label: "Cost / Lead", value: "-41%" },
      { label: "Sales Cycle", value: "-14 days" },
      { label: "Pipeline", value: "$1.8M" },
    ],
  },
  {
    slug: "fieldstone-social-refresh",
    title: "Social Content Refresh",
    client: "Fieldstone Hospitality",
    platform: "Instagram & TikTok",
    summary:
      "A short-form video content strategy that rebuilt an underperforming hospitality brand's organic social presence.",
    description:
      "Audited a year of underperforming organic content and rebuilt the content calendar around short-form, behind-the-scenes video. Trained the in-house team on a repeatable filming and editing workflow, and introduced a always-on UGC repost program to fill gaps between produced content.",
    tags: ["Organic Social", "Short-Form Video", "Hospitality"],
    metrics: [
      { label: "Followers", value: "+58%" },
      { label: "Engagement Rate", value: "6.4%" },
      { label: "Video Views", value: "1.3M" },
      { label: "UGC Submissions", value: "340" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((project) => project.slug === slug);
}
