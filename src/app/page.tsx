"use client";
import Image from "next/image";
import ProjectSection from "@/components/project-section";
import { poppins, pjs } from "@/constants";
import IntroduceSection from "@/components/introduce-section";
import Footer from "@/components/footer";
import CertSection from "@/components/cert-section";
import ResourceSection from "@/components/resource-section";
import PDFViewerSection from "@/components/pdf-viewer-section";
import { useEffect, useState } from "react";
import { getPage } from "../../sanity/sanity-utils";
import { Page } from "../../types/Page";

export default function Home() {
  const [page, setPage] = useState<Page>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPage();
      setPage(res);
    };
    if (!page) fetchData();
  }, [page]);

  return (
    <main>
      <div className="flex justify-evenly items-center bg-zinc-900">
        <div>
          <Image src={"/logo.png"} width={80} height={80} alt="Logo" />
        </div>
        <div
          className={`flex flex-row gap-[70px] ${pjs.className} font-semibold text-[16px]`}
        >
          <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
            <p>Home</p>
          </div>
          <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
            <p>
              <a href="#projects">Projects</a>
            </p>
          </div>
          <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
            <p>
              <a href="#cert">Certificates</a>
            </p>
          </div>
          <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
            <p>
              <a href="#my-cv">My CV</a>
            </p>
          </div>
          <div className="transition ease-in-out delay-50 p-1 border-b-2 border-zinc-900 hover:border-white cursor-pointer">
            <p>
              <a href="#contact">Contact</a>
            </p>
          </div>
        </div>
      </div>
      <div>
        {page && (
          <div
            className={`${poppins.className} py-[100px] max-w-[720px] mx-auto text-center space-y-14`}
          >
            <IntroduceSection
              occupation={page.occupation}
              yourName={page.yourName}
              introduction={page.introduction}
            />
            <ResourceSection githubProfile={page.githubProfile} />
            <ProjectSection />
            <CertSection
              toeicReadLisScore={page.toeicReadLisScore}
              toeicWriteSpeakScore={page.toeicWriteSpeakScore}
            />
            <PDFViewerSection pdfFile={page.pdfFile} />
          </div>
        )}
      </div>
      {page && (
        <Footer contactEmail={page.contactEmail} location={page.location} />
      )}
    </main>
  );
}
