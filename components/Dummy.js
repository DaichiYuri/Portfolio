'use client';
import Link from 'next/link'
import { FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import React, { useState} from "react";
import { useSpring, animated } from "react-spring";

export default function Dummy({comp}) {
  const [clicked, setClicked] = useState(false);
  const [navi, setNav] = useState(false);
  const styles = useSpring({
      boxShadow: clicked ? '1px 1px 2px #8a3d05, -0.5px -0.5px 2px #ff9600' : '2px 2px 4px #8a3d05, -2px -2px 2px #ff9600',
      config: { duration: 100 },
  });
  const navStyles = useSpring({
    width: navi ?'400px':'0px',
    paddingLeft: navi ? '20px':'0px',
    config: { duration: 250 },
  });

  const menuItems = [{"name":"Projects","url":"/projects"}, {"name":"Blogs","url":"/blogs"}, {"name":"Pins","url":"/pins"},  {"name":"Home","url":"/"},{"name":"About me","url":"/about"}]; //{"name":"Pulp","url":"/pulps"}
  const dotCount = 12;
  return (
      <div className="items-center min-h-screen justify-item-end pt-6 sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)] overflow-hidden z-[2]">
      <main className="font-[family-name:var(--font-geist-mono)] font-semibold">
        <animated.div style={{...styles}} className="grid grid-cols-2 gap-1 w-8 p-1 rounded right-2 lg:right-5 top-[45%] fixed z-[11] bg-[#ed8008]" onClick={()=>setNav(!navi)} onMouseDown={()=>setClicked(true)} onMouseUp={()=>setClicked(false)} onTouchStart={()=>setClicked(true)} onTouchEnd={()=>setClicked(false)}>
          {Array.from({ length: dotCount }).map((_, index) => (
            <div
              key={index}
              className="w-2.5 h-2.5 rounded-full bg-[#ed8008] shadow-orxl"
            ></div>
          ))}
        </animated.div>

        <animated.div
          id="nav"
          style={{ ...navStyles }}
          className="h-[100%] right-0 top-0 rounded fixed z-[10] bg-[#000] lg:pt-[250px] pt-[30%]"
        >
          {menuItems.map((item, index) => (
            <div key={index} className="w-30 h-[50px] m-3 rounded">
              <Link href={item.url} prefetch={true}>
                <p className="p-3 text-[#fff] text-[20px]">{item.name}</p>
              </Link>
            </div>
          ))}
        </animated.div>
        {comp}
      </main>
      {/* Footer */}
      <footer id="footer" className="m-6 p-6 text-center bg-gray-800 rounded-lg">
        <div className="gap-2 font-normal text-gray-400" >
          Self-hosted on a home server with &nbsp;
          <a href="https://www.cloudflare.com" className="hover:underline hover:underline-offset-4" target="_blank" rel="noopener noreferrer" style={{ color: "#f38020" }}>Cloudflare</a>.
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:mahipal.kbrp2001@gmail.com" className="text-white hover:text-gray-300">
            <FaEnvelope size={20} />
          </a>
          <a href="https://github.com/Mahipal2001" className="text-white hover:text-gray-300">
            <FaGithub size={20} />
          </a>
          <a href="https://www.instagram.com/duh_vincing/" className="text-white hover:text-gray-300">
            <FaInstagram size={20} />
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} Mahipal Rajpurohit</p>
      </footer>
    </div>
  );
}
