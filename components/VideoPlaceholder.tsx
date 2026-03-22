import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  /** Label shown below the play icon */
  title: string;
  /** Description text */
  description?: string;
  /** Aspect ratio class */
  aspect?: "video" | "square";
}

export default function VideoPlaceholder({
  title,
  description,
  aspect = "video",
}: VideoPlaceholderProps) {
  return (
    <div
      className={`relative w-full ${
        aspect === "video" ? "aspect-video" : "aspect-square"
      } rounded-2xl overflow-hidden bg-dark-700 border border-dark-400 group`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cerberus-red/5 via-transparent to-cerberus-red/10" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6">
        <div className="w-16 h-16 rounded-full bg-cerberus-red/15 border border-cerberus-red/30 flex items-center justify-center">
          <Play size={28} className="text-cerberus-red ml-1" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-cerberus-steel">{title}</p>
          {description && (
            <p className="text-xs text-cerberus-steel-dark mt-1 max-w-xs">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
