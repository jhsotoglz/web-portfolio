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
  stripTopH1 = true,       // default: hide the first H1 (since modal already shows a title)
  demoteHeadings = false,   // set true if you also want to shift levels down
}: MdProps) {
  const plugins = [remarkGfm, remarkBreaks] as any[];
  if (stripTopH1) plugins.push(remarkStripFirstH1);
  if (demoteHeadings) plugins.push(remarkDemoteHeadings(1));

  return (
    <article
      className={[
        "prose prose-invert max-w-none",
        "prose-headings:text-green-400 prose-a:text-green-400",
        "prose-hr:border-white/10 prose-blockquote:border-l-green-400",
        "prose-strong:text-white",
        "prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10",
        "prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded",
      ].join(" ")}
    >
      <ReactMarkdown remarkPlugins={plugins}>{children}</ReactMarkdown>
    </article>
  );
}
