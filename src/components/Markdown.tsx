import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Markdown({ children }: { children: string }) {
  return (
    <article
      className={[
        // Tailwind typography styles (dark mode friendly)
        "prose prose-invert max-w-none",
        // A few tasteful tweaks for your brand
        "prose-headings:text-green-400 prose-a:text-green-400",
        "prose-hr:border-white/10 prose-blockquote:border-l-green-400",
        "prose-strong:text-white",
      ].join(" ")}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            if (!inline && match) {
              return (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              );
            }
            return (
              <code
                className="px-1.5 py-0.5 rounded bg-white/10"
                {...props}
              >
                {children}
              </code>
            );
          },
          a({ children, ...props }) {
            return (
              <a target="_blank" rel="noopener noreferrer" {...props}>
                {children}
              </a>
            );
          },
          img({ ...props }) {
            // Keep images responsive inside the modal
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img {...props} className="rounded-lg border border-white/20 mx-auto" />
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </article>
  );
}