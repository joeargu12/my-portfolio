import type { VideoEmbed as VideoEmbedType } from "@/lib/case-studies";

const embedSrc = (video: VideoEmbedType) => {
  if (video.provider === "youtube") {
    return `https://www.youtube.com/embed/${video.id}`;
  }
  return `https://player.vimeo.com/video/${video.id}`;
};

export function VideoEmbed({ video, title }: { video: VideoEmbedType; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
      <iframe
        src={embedSrc(video)}
        title={title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
