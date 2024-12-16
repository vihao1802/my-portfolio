"use client";
import ProjectSection from "@/components/project-section";
import { poppins } from "@/constants";
import IntroduceSection from "@/components/introduce-section";
import Footer from "@/components/footer";
import CertSection from "@/components/cert-section";
import ResourceSection from "@/components/resource-section";
import PDFViewerSection from "@/components/pdf-viewer-section";
import { useEffect, useState } from "react";
import { getPage } from "../../sanity/sanity-utils";
import { Page } from "../../types/Page";
import Header from "@/components/Header";

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
      <Header />
      <div className="w-full lg:w-[calc(100%-250px)] h-[100%] ml-auto px-4 lg:px-12 mt-10 lg:mt-0">
        {page && (
          <div className={`${poppins.className} py-8 text-left`}>
            <IntroduceSection
              occupation={page.occupation}
              yourName={page.yourName}
              introduction={page.introduction}
              frontend={page.frontend}
              backend={page.backend}
              others={page.others}
            />
            <ResourceSection
              githubProfile={page.githubProfile}
              facebookProfile={page.facebookProfile}
            />
            <CertSection
              toeicReadLisScore={page.toeicReadLisScore}
              toeicWriteSpeakScore={page.toeicWriteSpeakScore}
            />
            <ProjectSection />
            <PDFViewerSection pdfFile={page.pdfFile} />
            <Footer contactEmail={page.contactEmail} location={page.location} />
          </div>
        )}
      </div>
    </main>
  );
}
