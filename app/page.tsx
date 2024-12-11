import Convertor from "@/components/convertor";
import Faq from "@/components/faq";
import { Header } from "@/components/header";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex flex-col justify-start items-center max-w-full min-h-screen">
        <header className="w-full">
          <Header heading="html2markdown" />
        </header>
        <main className="flex flex-col w-[900px] m-10">
          <Convertor />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Faq />
        </footer>
      </div>
    </NextUIProvider>
  );
}
