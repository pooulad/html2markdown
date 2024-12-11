import { MDXProvider } from "@mdx-js/react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}

export function MDXGlobalProvider({ children }: { children: React.ReactNode }) {
  const components = useMDXComponents({});

  return (
    <MDXProvider components={components}>
      <div className="prose dark:prose-invert">{children}</div>
    </MDXProvider>
  );
}
