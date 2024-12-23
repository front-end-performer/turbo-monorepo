// custom-elements.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "acrobat-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      primary?: boolean;
      backgroundColor?: string;
      size?: "small" | "medium" | "large";
      label?: string;
    };
  }
}
  