'use client';
import Image from "next/image";
import Link from 'next/link'
import React, { useState, useEffect, ReactNode } from "react";
import Dummy from '../../components/Dummy'
import Deck from '../../components/Cards'
import JourneyMap from '../../components/journeymap'
import { motion } from "framer-motion";



export default function Home() {
  return (
      <Dummy comp={<MainPage/>}/>
      
  );
}

function MainPage(){  
  return(
    <div className="px-6 z-[10]">
     
      {/* hero section */}
      <div className="bg-[#121212] text-[#567CA3] inline-block z-[2] flex items-center justify-center select-none shadow-5xl rounded-xl min-h-[35%] lg:mt-[18%] my-[38%] lg:my-[18%] sm:mx-[5%] lg:mx-[20%] pt-5 pr-4 pl-5 lg:pl-10 pb-5">
        <div className="max-w-5xl">
          <TypingEffect text="Creating Worlds with Code, Canvas & Cosmic Tales" /><br/>
          <p className="lg:m-3 lg:text-1g sm:text-sm"> {/*text-[#567CA3] */}
            <span className="lg:text-2xl text-xl font-lobster font-thin">Hi, I&apos;m Mahipal Rajpurohit, </span>
            <span className="lg:text-xl text-lg font-pacifico font-thin">Backend Developer and a tech enthusiast</span><br/>
            <span className="text-xs lg:text-base font-playfair italic lg:font-semibold">
            I thrive at the intersection of logic and innovation. Beyond tech, I weave stories and art, bringing imagination to life.
            </span>
          </p>
          <a href="#footer" className="mt-6 mr-3 lg:mr-6 px-3 lg:px-6 py-3 text-sm lg:text-lg  text-[#567CA3] rounded-lg shadow-4xl hover:bg-[#567CA3] hover:text-[#fff] transition">
            Get In Touch
          </a>
          <button className="mt-6  lg:mr-6 px-3 lg:px-6 py-3 text-sm lg:text-lg text-[#567CA3] rounded-lg shadow-4xl hover:bg-[#567CA3] hover:text-[#fff] transition">
            Join Community
          </button>
        </div>
      </div>

      {/* journey */}
      <div className="bg-[#121212] p-3 mt-[15%] mb-10 lg:mb-20 shadow-5xl rounded-2xl h-[20%] lg:flex">
        <div className="animate-rise lg:w-[50%] leading-[1.2] lg:ml-10 ml-3 mt-[8%] mb-5 text-3xl lg:text-7xl font-extrabold text-[#567CA3]" >
        <TextAnimation text={<>Every milestone is a story here’s mine.</>}/>
        </div>
        <JourneyMap/>
      </div>

      {/* tech stack */}
      <div className="bg-[#121212] p-3 pt-10 mt-10 mb-10 lg:mb-20 shadow-5xl rounded-2xl lg:h-[45%] lg:flex">
        <Deck/>
        <div className="h-[250px] lg:h-[0px]"></div>
        <div className="lg:w-[70%] leading-[1.2] lg:ml-[25%] ml-3 mt-10 mb-5 lg:mb-20 text-xl lg:text-6xl font-extrabold text-[#567CA3]" >
          <TextAnimation text={<>No more cards up my sleeve?<br/>Think again —<br/>I’ve got a full stack!</>}/>
        </div>
      </div>

      <Link href={"/blogs"} prefetch={true}>
      <div className="bg-[#121212] p-3 mt-10 mb-10 lg:mb-20 shadow-5xl rounded-2xl lg:h-80 lg:flex">
        <div className="lg:w-[70%] leading-[1.2] ml-3 lg:ml-10 lg:mt-10 mt-3 mb-5 lg:mb-20 text-xl lg:text-6xl font-extrabold text-[#567CA3]" >
          <TextAnimation text={<>Thoughts, insights, and discoveries –<br/>Excerpts from My Latest Blogs</>}/>
        </div>
          <Image
            aria-hidden
            src="/images/currys_paradox.png"
            alt="File icon"
            width={600}
            height={500}
            className="object-cover rounded-lg static"
          />
      </div>
      </Link>
      
      <Link href={"/projects"} prefetch={true}>
      <div className="bg-[#121212] p-3 mt-10 lg:mb-20 shadow-5xl rounded-2xl lg:h-80 lg:flex">
          <Image
            aria-hidden
            src="/images/virtual_workspace.png"
            alt="File icon"
            width={600}
            height={500}
            className="object-cover rounded-lg"
          />
        <div className="lg:w-[65%] leading-[1.2] lg:ml-20 ml-3 lg:mt-10 mt-5 mb-5 lg:mb-0 text-xl lg:text-6xl font-extrabold text-[#567CA3]" >
          <TextAnimation text={<>Bringing ideas to life -<br/>A Highlight of My Latest Project</>}/>
        </div>
      </div>
      </Link>

      <Link href={"/pins"} prefetch={true}>
      <div className="bg-[#121212] p-3 mt-10 lg:mb-20 shadow-5xl rounded-2xl lg:h-80 lg:flex">
      
        <div className="lg:w-[70%] leading-[1.2] lg:ml-10 ml-3 lg:mt-20 mt-3 mb-5 text-xl lg:text-6xl font-extrabold text-[#567CA3]" >
          <TextAnimation text={<>Where pixels meet passion –<br/> a glimpse into my art.</>}/>
        </div>
          <Image
            aria-hidden
            src="/images/painting_fishes_in_cloud.jpeg"
            alt="File icon"
            width={600}
            height={500}
            className="object-cover rounded-lg"
          />
      </div>
      </Link>

      <Link href={"/pulps"} prefetch={true}>
      <div className="bg-[#121212] p-3 mt-10 lg:mb-20 shadow-5xl rounded-2xl lg:h-80 lg:flex">
        <Image
          aria-hidden
          src="/images/butterfly_effect.jpeg"
          alt="File icon"
          width={600}
          height={500}
          className="object-cover rounded-lg"
        />
        <div className="lg:w-[65%] leading-[1.2] lg:mt-10 mt-3 mb-5 lg:ml-20 ml-3 text-xl lg:text-6xl font-extrabold text-[#567CA3]" >
          <TextAnimation text={<>Stories that breathe life into imagination -<br/>Exploring My Latest Pulp</>}/>
        </div>
      </div>
      </Link>
  </div>
  );
}

function TextAnimation({ text }: { text: ReactNode }){
  return (
  <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
    {text}
  </motion.h1>
  );
}
interface TypingEffectProps {
  text: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // Adjust speed here (100ms per letter)
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <h1 className="text-[29px] md:text-5xl lg:text-6xl font-extrabold tracking-tight">
      {displayedText}
      <span className="text-white animate-blink">|</span>
    </h1>
  );
};