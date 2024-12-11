"use client";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import SlideToTop from "./SlideToTop";

const PDFViewerSection = ({ pdfFile }: { pdfFile: string }) => {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  });

  return (
    <div className="h-[650px]">
      <SlideToTop>
        <h1 id="my-cv" className="text-[45px] text-white mb-4">
          MY CV
        </h1>
      </SlideToTop>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default PDFViewerSection;
