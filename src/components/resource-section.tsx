"use client";
import { poppins } from "@/constants";

function downloadPDF() {
  const fileUrl = "/Nodefair_CV.pdf"; // Path to your PDF file in the public folder
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "TranViHao_CV.pdf"; // Name of the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const ResourceSection = ({ githubProfile }: { githubProfile: string }) => {
  return (
    <div className={`${poppins.className} font-semibold text-[20px] space-x-5`}>
      <a
        href={githubProfile}
        className="transition ease-in-out delay-50 no-underline px-[24px] py-[12px] bg-white hover:bg-orange-400 hover:text-white text-black rounded-xl font-bold inline-flex items-center"
      >
        <img src="/github_icon.png" alt="Github" className="w-6 h-6 mr-2" />
        Github profile
      </a>
      {/* <button
        className="transition ease-in-out delay-50 bg-black border-2 border-white hover:bg-white hover:text-black px-[22px] py-[10px] text-white font-bold rounded-xl inline-flex items-center"
        onClick={downloadPDF}
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download</span>
      </button> */}
    </div>
  );
};

export default ResourceSection;
