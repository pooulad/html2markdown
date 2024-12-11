"use client";

import { DarkIcon, GithubIcon, LightIcon } from "@/assets/icons";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.png";

interface HeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function Header({ heading, text }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const classList = document.documentElement.classList;

    if (classList.contains("dark")) {
      classList.remove("dark");
      setIsDarkMode(false);
    } else {
      classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div className="w-full flex flex-row justify-between items-center p-2">
      <div>
        <div className="flex flex-row justify-center items-center gap-2">
          <Link href={siteConfig.url}>
            <Image src={Logo} alt="logo" width={40} />
          </Link>
          <Link href={siteConfig.url}>
            <h1 className="text-center text-dark font-bold dark:text-white">
              {heading}
            </h1>
          </Link>
        </div>
        {text && (
          <p className="text-lg text-muted-foreground text-center">{text}</p>
        )}
      </div>
      <div className="flex flex-row items-center gap-1 text-center justify-center">
        <button onClick={toggleTheme} className="rounded-full  bg-white p-1">
          {isDarkMode ? (
            <LightIcon
              style={{
                width: "20px",
                height: "20px",
                fill: "#000000",
              }}
            />
          ) : (
            <DarkIcon
              style={{
                width: "20px",
                height: "20px",
                fill: "#000000",
              }}
            />
          )}
        </button>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className=" bg-white p-1 rounded-full"
        >
          <GithubIcon
            stroke={"#000000"}
            style={{ width: "20px", height: "20px" }}
          />
        </Link>
      </div>
    </div>
  );
}
