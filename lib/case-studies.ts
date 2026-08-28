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
    slug: "pizza-port-product-launch-program",
    title: "Annual Product Launch Program",
    client: "Pizza Port Brewing Company",
    platform: "Retail, DTC & Paid Social",
    summary:
      "Go-to-market and commercialization for 23 annual product releases across a $20M portfolio spanning seven locations and four-state distribution.",
    description:
      "Own integrated marketing strategy across brand, retail, DTC, CRM, and paid media for a $20M portfolio, aligning every channel around flagship product launches. Lead go-to-market and commercialization end-to-end, from positioning and messaging through retail rollout, managing complex multi-SKU retail ecosystems similar to Big Box channel execution. Scaled five product launches on a $20K media budget through structured creative testing and cost optimization.",
    tags: ["Product Launch", "Retail Strategy", "Go-To-Market"],
    video: {
      provider: "youtube",
      id: "YOUR_YOUTUBE_VIDEO_ID",
    },
    metrics: [
      { label: "Reach", value: "1.3M+" },
      { label: "Annual Releases", value: "23" },
      { label: "Media Cost Savings", value: "16%" },
      { label: "Distribution", value: "4 states" },
    ],
  },
  {
    slug: "pizza-port-performance-campaigns",
    title: "Seasonal Performance Marketing",
    client: "Pizza Port Brewing Company",
    platform: "Paid Social & Influencer",
    summary:
      "Integrated brand and performance campaigns for seasonal product launches across DTC, digital, and retail channels.",
    description:
      "Owned media planning, budget allocation, and optimization across paid social, influencer, and digital channels for seasonal product launches. Scaled ambassador and UGC programs to support performance creative, increasing content output and improving retail brand consistency across touchpoints while developing and maintaining brand standards across all retail-facing physical and digital assets.",
    tags: ["Performance Marketing", "Influencer", "Paid Social"],
    video: {
      provider: "vimeo",
      id: "YOUR_VIMEO_VIDEO_ID",
    },
    metrics: [
      { label: "Incremental Revenue", value: "$4M+" },
      { label: "Engagement Lift", value: "+45%" },
      { label: "CPA", value: "-8%" },
      { label: "Content Output", value: "+15%" },
    ],
  },
  {
    slug: "pizza-port-social-growth",
    title: "Organic Social & Ambassador Growth",
    client: "Pizza Port Brewing Company",
    platform: "Organic Social & Ambassador Program",
    summary:
      "Influencer and social growth initiatives that scaled the brand's audience from 5K to 100K followers.",
    description:
      "Executed influencer and social growth initiatives that scaled the brand's audience from 5K to 100K followers, improving organic reach, engagement efficiency, and brand visibility. Later implemented creative and media testing frameworks to optimize messaging, formats, and spend efficiency across channels, supporting retail partner integration and sell-through.",
    tags: ["Organic Social", "Influencer", "Brand Growth"],
    metrics: [
      { label: "Followers", value: "5K → 100K" },
      { label: "Digital & Retail Reach", value: "+30%" },
      { label: "Channels", value: "DTC & Wholesale" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((project) => project.slug === slug);
}
