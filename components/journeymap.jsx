import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { animated, useSpring, useSpringValue } from "@react-spring/web";

const stops = [
  { id: 1, cx: 110, cy: 410, label: "Spark of Curiosity", stop:0 ,content:'Dove into the world of AI & robotics. Attended hands-on workshops that laid the foundation for everything ahead.'},
  { id: 2, cx: 155, cy: 470, label: "Wired to the Web", stop:87.5 ,content:'Experimented with Arduino and ESP8266, and built my first IoT web server. Explored HTTP, MQTT, and WebSocket protocols to control real-world devices.'},
  // { id: 3, cx: 200, cy: 425, label: "Drones & Wireless Control", stop:175 ,content:'Built my own drone using ESP8266 and high-switching MOSFETs, integrating an ESP32-CAM for real-time video streaming. Explored advanced drone control and swarm coordination with ArduPilot.'},
  { id: 3, cx: 200, cy: 330, label: "Drone Zone (Crash Course)", stop:287.5 ,content:'Built a drone with ESP8266 and ESP32-CAM for live streaming. Took a wild ride into swarm coordination and control systems. (Yes, it tried to fly...)'},
  { id: 4, cx: 250, cy: 280, label: "Pandemic Protector", stop:383.4 ,content:'In a college hackathon, developed a smart COVID surveillance app with face-mask detection, patient similarity check, and contact tracking using ESP-CAM + Flask + CNNs.'},
  { id: 5, cx: 300, cy: 355, label: "Tumor Tracker", stop:500 ,content:'At Ingenium Hackathon, developed brain tumor segmentation, 3D reconstruction, and survival prediction from CT scans — bridging healthcare and AI. Later extended the work to liver tumor analysis for JIPMER Hospital, under the guidance of Prof. Jayanthi Ma\'am.'},
  { id: 6, cx: 345, cy: 420, label: "DSA Dungeon", stop:600 ,content:'Battled through CodeJam and CodeChef contests, sharpening my data structures & algorithms skills, one bug at a time.'},
  { id: 7, cx: 390, cy: 325, label: "ChatBot Builder", stop:730 ,content:'Built a smart chatbot builder for Dell during the Smart India Hackathon. Used DistilBERT for instant replies and T5 for PDF-based FAQ generation. Integrated flow control, context handling, and pretrained NLP models.'},
  { id: 8, cx: 390, cy: 230, label: "Into the VR-verse", stop:853.4 ,content:'Final year project: Built a virtual workspace using a smart data glove and 3D WebVR interface powered by ESP + Three.js + WebSockets + Express.js + Electron.js.'},
  { id: 9, cx: 440, cy: 180, label: "Speedy Search Sorcerer", stop:952.5 ,content:'As a project trainee, engineered a fast and generic search module with Redis caching and automatic DB fallback on cache misses.'},
  // { id: 11, cx: 490, cy: 230, label: "First Milestone", stop:1041 ,content:'10hfhghgjdfghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
  { id: 10, cx: 490, cy: 280, label: "Security Sentinel", stop:1100 ,content:'Explored Docker and Kubernetes (Minikube), while mastering 37 web security vulnerabilities. Applied this knowledge to mitigate 3 critical issues in my app team — including SQL Injection, ZipBomb, and ZipSlip.'},
  { id: 11, cx: 570, cy: 320, label: "…And the Journey Continues", stop:1200 ,content:'Every step taught me something new. The road ahead is filled with endless bytes of adventure.'},
];

export default function JourneyMap() {
  const [hovered, setHovered] = useState(null);
  const [offver, setOffver] = useState(null);
  const totalLength = 1200; // Approximate total length of the path

  // // Spring animation
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true); // Trigger animation on mount
    setTimeout(() => {
      setStartAnimation(false);
    }, 1000);
  }, []); // Runs only once when the component mounts

  const { offset } = useSpring({
    from: { offset: totalLength },
    to: { offset: 0 },
    loop: true,
    config: { duration: 20000 },
    reset: startAnimation, // Restart animation when component mounts
    immediate: false,
    pause: hovered !== null, // Pause when hovered
  });

  //trigger hover over offset value
  useEffect(() => {
    let frameId;
  
    const checkOffset = () => {
      const val = offset.get(); // get the current offset value
      //finding closest stop
      const current = stops.reduce((closest, stop) => {
        const diff = val - stop.stop;
        if(closest && val-closest.stop < 0){
          closest.stop = totalLength;
        }
        if (diff >= 0) {
          if (!closest || diff < val - closest.stop) {
            return stop;
          }
        }
        return closest;
      }, null);

      setOffver(11-current.id);
      frameId = requestAnimationFrame(checkOffset); // keep polling
    };
  
    frameId = requestAnimationFrame(checkOffset);
  
    return () => cancelAnimationFrame(frameId);
  }, [offset, offver]);

  const calculateDashArray = (hoveredId) => {
    if (!hoveredId) return totalLength;
    const stop = stops.find((s) => s.id === hoveredId);
    return totalLength-stop.stop;
  };

  return (
    <>
    <svg width="100%" height="50%" viewBox="50 100 630 440" className="lg:scale-75">
      {/* Path */}
      <path d="M110,410 L110,450 Q110,470 130,470 L180,470 Q200,470 200,450 L200,350
        M200,360 L200,300 Q200,280 220,280 L280,280 Q300,280 300,300 L300,360
        M300,360 L300,400 Q300,420 320,420 L370,420 Q390,420 390,400 L390,250
        M390,260 L390,200 Q390,180 410,180 L470,180 Q490,180 490,200 L490,260
        M490,260 L490,300 Q490,320 510,320 L570,320" 
        stroke="#ccc"
        strokeWidth="3"
        strokeDasharray="5,5"
        fill="none"/>
      {/* Dynamic Foreground Path */}
      <animated.path d="M110,410 L110,450 Q110,470 130,470 L180,470 Q200,470 200,450 L200,350  
        L200,360 L200,300 Q200,280 220,280 L280,280 Q300,280 300,300 L300,360  
        L300,360 L300,400 Q300,420 320,420 L370,420 Q390,420 390,400 L390,250  
        L390,260 L390,200 Q390,180 410,180 L470,180 Q490,180 490,200 L490,260  
        L490,260 L490,300 Q490,320 510,320 L570,320" 
        stroke="#ed8008"
        strokeWidth="3"
        strokeDasharray={`${totalLength},${totalLength}`}
        strokeDashoffset={hovered !== null ? calculateDashArray(hovered) : offset}
        fill="none"/>
      {/* Stops (Circles) */}
      {stops.map((stop) => (
        <g
          key={stop.id}
          onMouseEnter={() => setHovered(stop.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <circle
            cx={stop.cx}
            cy={stop.cy}
            r={hovered === stop.id ? 15 : 10}
            fill={hovered === stop.id || offver===stop.id ? "#ed8008" : "#567ca3"}
          />
          {((stop.id === hovered) || hovered===null) && (
            <text x={stop.cx - 40} y={stop.cy - 15} fontSize="15" fill={hovered || offver===stop.id ?"#ed8008":"#567ca3"}>
              {stop.label}
            </text>
          )}
        </g>
      ))}
    </svg>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className='pl-5 pb-5 lg:absolute left-[8%] lg:top-[152%] lg:w-[25%] text-[#ed8008] lg:text-[20px] text-[10px]'
    >
      {hovered?stops[hovered-1].content:'* Hover over the milestones to explore more!'}
    </motion.p>
    </>
  );
}
