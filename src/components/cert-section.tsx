"use client";
import SlideToLeft from "@/components/SlideToLeft";

const CertSection = ({
  toeicReadLisScore,
  toeicWriteSpeakScore,
}: {
  toeicReadLisScore: string;
  toeicWriteSpeakScore: string;
}) => {
  return (
    <div>
      <SlideToLeft>
        <h1 id="cert" className="text-[45px] text-orange-500">
          CERTIFICATES
        </h1>
      </SlideToLeft>
      <SlideToLeft delay={0.3}>
        <div className="mt-4 space-y-2 text-left text-zinc-400 text-[20px]">
          <p className="flex justify-between">
            TOEIC ETS Listening & Reading{" "}
            <strong className="text-white">{toeicReadLisScore}</strong>
          </p>
          <p className="flex justify-between">
            TOEIC ETS Writing & Speaking{" "}
            <strong className="text-white">{toeicWriteSpeakScore}</strong>
          </p>
        </div>
      </SlideToLeft>
    </div>
  );
};

export default CertSection;
