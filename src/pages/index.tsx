import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import { NextSeo } from "next-seo";

const Home = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <NextSeo title="Salah's Portfolio" />

      <section data-testid="home-page">
        <div className="flex flex-row items-center justify-between py-20">
          <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-100">
            Salah&apos;s Portfolio
          </h1>
          <div className="flex flex-col border-2 border-blue-500 pt-1">
            <button
              className="border-2 border-red-500 flex px-4 py-2 mt-11 font-semibold text-white bg-black rounded-md dark:text-black text-xs dark:bg-white"
              onClick={() => {
                setTheme(resolvedTheme === "light" ? "dark" : "light");
              }}
            >
              Change Theme
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
