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

const ResourceSection = ({
  githubProfile,
  facebookProfile,
}: {
  githubProfile: string;
  facebookProfile: string;
}) => {
  return (
    <div
      className={`${poppins.className} font-semibold text-[20px] flex gap-2 flex-wrap pt-14`}
    >
      <a
        href={githubProfile}
        className="transition ease-in-out delay-50 no-underline px-[24px] py-[12px] bg-white hover:bg-orange-400 hover:text-white text-black rounded-xl font-bold inline-flex items-center"
        target="_blank"
      >
        <img src="/github_icon.png" alt="Github" className="w-6 h-6 mr-2" />
        Github profile
      </a>
      <a
        href={facebookProfile}
        className="transition ease-in-out delay-50 no-underline px-[24px] py-[12px] bg-[#0866FF] hover:bg-orange-400 hover:text-white text-white rounded-xl font-bold inline-flex items-center"
        target="_blank"
      >
        <img
          src="/Facebook_Logo_Secondary.png"
          alt="Facebook"
          className="w-6 h-6 mr-2"
        />
        Facebook
      </a>
    </div>
  );
};

export default ResourceSection;
