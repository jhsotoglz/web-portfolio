declare module "react-syntax-highlighter" {
  import * as React from "react";
  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    PreTag?: any;
    showLineNumbers?: boolean;
    wrapLongLines?: boolean;
    children?: React.ReactNode;
    [key: string]: any;
  }
  export class Prism extends React.Component<SyntaxHighlighterProps> {}
  export class Light extends React.Component<SyntaxHighlighterProps> {}
  export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export const oneDark: any;
  export const oneLight: any;
  export const dracula: any;
  const styles: any;
  export default styles;
}
