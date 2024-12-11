"use client";

import React from "react";
import FaqMdx from "@/content/faq.mdx";
import { MDXGlobalProvider } from "./mdx-component";

function Faq() {
  return (
    <MDXGlobalProvider>
      <div className="flex flex-col text-black dark:text-white">
        <FaqMdx />
      </div>
    </MDXGlobalProvider>
  );
}

export default Faq;
