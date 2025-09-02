// src/components/Markdown.tsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

type MdProps = {
  children: string;
  /** remove the first top-level # heading from the md */
  stripTopH1?: boolean;
  /** add 1 to all heading levels (h1->h2, etc.) */
  demoteHeadings?: boolean;
  /** slightly tighter spacing */
  compact?: boolean;
};

function remarkStripFirstH1() {
  return (tree: any) => {
    let removed = false;
    const walk = (node: any, parent: any) => {
      if (removed) return;
      if (node?.type === "heading" && node.depth === 1 && parent?.children) {
        const i = parent.children.indexOf(node);
        if (i !== -1) parent.children.splice(i, 1);
        removed = true;
        return;
      }
      if (node?.children) for (const child of [...node.children]) walk(child, node);
    };
    walk(tree, null);
  };
}

function remarkDemoteHeadings(by = 1) {
  return (tree: any) => {
    const walk = (node: any) => {
      if (node?.type === "heading") node.depth = Math.min(6, node.depth + by);
      if (node?.children) for (const c of node.children) walk(c);
    };
    walk(tree);
  };
}

export default function Markdown({
  children,
  stripTopH1 = true,      // modal already shows a title
  demoteHeadings = false,  // turn on if your md uses many H1s
  compact = false,
}: MdProps) {
  const plugins = [remarkGfm, remarkBreaks] as any[];
  if (stripTopH1) plugins.push(remarkStripFirstH1);
  if (demoteHeadings) plugins.push(remarkDemoteHeadings(1));

  return (
    <article
      className={[
        // Base typography
        "prose prose-invert",
        // Comfortable reading width (≈70–75 characters)
        "max-w-[72ch] md:max-w-[90ch]",
        // Slightly softer paragraph color + comfy line height
        "text-white/90 leading-relaxed",
        // Headings
        "prose-headings:prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-h2:text-green-400 text-l prose-h2:mt-5 prose-h2:mb-3",
        "prose-h3:text-green-200 text-l prose-h3:mt-4 prose-h3:mb-2",
        "prose-h4:text-green-200 mt-3 prose-h4:mb-1",
        // Paragraph + spacing rhythm
        compact ? "prose-p:my-2" : "prose-p:my-3",
        // Lists
        compact ? "prose-ul:my-2 prose-ol:my-2" : "prose-ul:my-3 prose-ol:my-3",
        "prose-li:my-1 prose-ol:marker:text-green-300 prose-li:marker:text-gray-500",
        // HR
        "prose-hr:my-8",
        // Make anchored headings not hide behind sticky nav
        "prose-headings:scroll-mt-24",
      ].join(" ")}
    >
      <ReactMarkdown remarkPlugins={plugins}>{children}</ReactMarkdown>
    </article>
  );
}
