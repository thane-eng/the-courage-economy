import { cn } from "@/lib/utils";

export function BookObject({
  className,
  size = "hero",
}: {
  className?: string;
  size?: "hero" | "inline";
}) {
  return (
    <div className={cn("book-stage flex justify-center", className)}>
      <div className={cn("book-3d", size === "inline" && "book-3d-inline")}>
        <div className="book-spine" />
        <div className="book-face">
          <img
            src="/brand/book-cover.jpg"
            alt="The Courage Economy — Why Companies Lie and How to Change Yours"
            className="h-full w-full object-cover"
            width={681}
            height={1000}
          />
        </div>
        <div className="book-pages" />
      </div>
    </div>
  );
}
