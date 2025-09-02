import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default function Markdown({ children }: { children: string }) {
  return (
    <article
      className={[
        "prose prose-invert max-w-none",
        "prose-headings:text-green-400 prose-a:text-green-400",
        "prose-hr:border-white/10 prose-blockquote:border-l-green-400",
        "prose-strong:text-white",
        // optional pretties:
        "prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10",
        "prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded",
      ].join(" ")}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
        {children}
      </ReactMarkdown>
    </article>
  );
}
