"use client";
import SlideToRight from "@/components/SlideToRight";

const CertSection = ({
  toeicReadLisScore,
  toeicWriteSpeakScore,
}: {
  toeicReadLisScore: string;
  toeicWriteSpeakScore: string;
}) => {
  return (
    <div>
      <SlideToRight className="mt-1">
        <h1 id="cert" className="text-[32px] text-orange-500 pt-14">
          CERTIFICATES
        </h1>
      </SlideToRight>
      <SlideToRight delay={0.3}>
        <div className="mt-4 space-y-4 text-left text-zinc-400 text-[20px]">
          <p className="flex flex-col md:flex-row justify-between">
            TOEIC ETS Listening & Reading{" "}
            <strong className="text-white">{toeicReadLisScore}</strong>
          </p>
          <p className="flex flex-col md:flex-row justify-between">
            TOEIC ETS Writing & Speaking{" "}
            <strong className="text-white">{toeicWriteSpeakScore}</strong>
          </p>
        </div>
      </SlideToRight>
    </div>
  );
};

export default CertSection;
