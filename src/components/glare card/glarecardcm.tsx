import { GlareCard } from "./glare-card";

export function GlareCardDemo() {
    return (
      <div className="grid grid-cols-3 gap-12 px-2 mx-auto mt-24 ml-48 md:grid-cols-3 lg:grid-cols-3">
        {/* Question Generator Card */}
        <GlareCard className="relative flex flex-col items-center justify-center w-[300px] h-[350px] rounded-lg cursor-text hover:scale-105 transform transition-all duration-300">
          <div className="flex flex-col items-center cursor-pointer">
            {/* Question Generator Icon */}
            <svg
              width="66"
              height="65"
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white h-7 w-7"
            >
              <title>Question Generator Icon</title>
              <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round"
              />
            </svg>
            <p className="mt-4 text-xl font-bold text-white">Question Generator</p>
          </div>
          {/* Glare effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent mix-blend-overlay opacity-60" />
        </GlareCard>
  
        {/* Summarizer Card */}
        <GlareCard className="relative flex flex-col items-center justify-center w-[300px] h-[350px] rounded-lg cursor-text hover:scale-105 transform transition-all duration-300">
          <div className="flex flex-col items-center cursor-pointer">
            {/* Summarizer Icon */}
            <svg
              width="66"
              height="65"
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white h-7 w-7"
            >
              <title>Summarizer Icon</title>
              <path d="M5 15L5 50L55 50L55 15L5 15Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
            </svg>
            <p className="mt-4 text-xl font-bold text-white">Summarizer</p>
          </div>
          {/* Glare effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent mix-blend-overlay opacity-60" />
        </GlareCard>
  
        {/* Flashcard Generator Card */}
        <GlareCard className="relative flex flex-col items-center justify-center w-[300px] h-[350px] rounded-lg cursor-text hover:scale-105 transform transition-all duration-300">
          <div className="flex flex-col items-center cursor-pointer">
            {/* Flashcard Generator Icon */}
            <svg
              width="66"
              height="65"
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white h-7 w-7"
            >
              <title>Flashcard Generator Icon</title>
              <path d="M7 10H59V55H7V10Z" stroke="currentColor" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
            </svg>
            <p className="mt-4 text-xl font-bold text-white">Flashcard Generator</p>
          </div>
          {/* Glare effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent mix-blend-overlay opacity-60" />
        </GlareCard>
  
        {/* IELTS Card */}
        <GlareCard className="relative flex flex-col items-center justify-center w-[300px] h-[350px] rounded-lg cursor-text hover:scale-105 transform transition-all duration-300">
          <div className="flex flex-col items-center cursor-pointer">
            {/* IELTS Icon */}
            <svg
              width="66"
              height="65"
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white h-7 w-7"
            >
              <title>IELTS Icon</title>
              <path d="M14 22L33 10L52 22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M33 10V45" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M14 45L33 57L52 45" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <p className="mt-4 text-xl font-bold text-white">IELTS</p>
          </div>
          {/* Glare effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent mix-blend-overlay opacity-60" />
        </GlareCard>
  
        {/* Math Calculator Card */}
        <GlareCard className="relative flex flex-col items-center justify-center w-[300px] h-[350px] rounded-lg cursor-text hover:scale-105 transform transition-all duration-300">
          <div className="flex flex-col items-center cursor-pointer">
            {/* Math Calculator Icon */}
            <svg
              width="66"
              height="65"
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white h-7 w-7"
            >
              <title>Math Calculator Icon</title>
              <path d="M12 21V44" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M18 21V44" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M6 32H24" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <p className="mt-4 text-xl font-bold text-white">Math Calculator</p>
          </div>
          {/* Glare effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent mix-blend-overlay opacity-60" />
        </GlareCard>
      </div>


        
    );
  }
  