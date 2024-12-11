"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TurndownService from "turndown";
import { Tooltip } from "@nextui-org/react";

function Convertor() {
  const [editorContent, setEditorContent] = useState<string>("");
  const [markdownOutput, setMarkdownOutput] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const turndownService = new TurndownService();

  const convertToMarkdown = () => {
    const markdown = turndownService.turndown(editorContent);
    setMarkdownOutput(markdown);
  };

  const clearAll = () => {
    setEditorContent("");
    setMarkdownOutput("");
  };

  const copyToClipboard = () => {
    if (markdownOutput.trim()) {
      navigator.clipboard.writeText(markdownOutput);
      setIsCopied(true);
      toast.success("Markdown copied successfuly");

      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  useEffect(() => {
    convertToMarkdown();
  }, [editorContent]);

  const copyButton = (
    <button
      disabled={!markdownOutput.trim()}
      onClick={copyToClipboard}
      className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-500 transition disabled:cursor-not-allowed"
    >
      {isCopied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25H16.5M7.5 12.75H16.5M7.5 17.25H16.5M4.5 8.25H3.75A1.5 1.5 0 012.25 6.75V4.5A1.5 1.5 0 013.75 3H4.5m0 5.25H16.5M4.5 8.25h12m-12 9H3.75A1.5 1.5 0 012.25 17.25v-2.25A1.5 1.5 0 013.75 13.5H4.5m0 5.25h12M4.5 13.5h12"
          />
        </svg>
      )}
      {isCopied ? "Copied" : "Copy"}
    </button>
  );

  return (
    <div className="flex flex-col justify-center text-center w-full">
      <div>
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Html to Markdown convertor
        </h1>
        <div className="text-sm text-black dark:text-white">
          Convert Html text into Markdown easily
        </div>
      </div>
      <div className="w-full mt-10">
        <textarea
          id="html"
          name="html"
          rows={10}
          value={editorContent}
          onChange={(e) => setEditorContent(e.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Html here..."
        ></textarea>

        <textarea
          id="text"
          name="text"
          rows={10}
          readOnly
          value={markdownOutput}
          className="block mt-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Plain text output will appear here..."
        ></textarea>

        <div className="flex flex-row justify-center items-center text-center gap-5 p-4">
          <button
            onClick={clearAll}
            className="gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-500 transition"
          >
            Clear All
          </button>

          {!markdownOutput.trim() ? (
            <Tooltip
              key={"danger"}
              className="capitalize"
              color={"danger"}
              content={"Add your HTML document first"}
            >
              {copyButton}
            </Tooltip>
          ) : (
            copyButton
          )}
        </div>
      </div>
    </div>
  );
}

export default Convertor;
