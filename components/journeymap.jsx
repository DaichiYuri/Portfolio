import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { animated, useSpring, useSpringValue } from "@react-spring/web";

const stops = [
  { id: 1, cx: 110, cy: 410, label: "Started Journey", stop:0 ,content:'Started my journey by exploring AI and robotics, attending workshops to build a strong foundation.'},
  { id: 2, cx: 155, cy: 470, label: "IoT & Embedded Systems", stop:87.5 ,content:'Explored Arduino, ESP8266, and more. Built my first web server to remotely control electronics, diving into protocols like HTTP, MQTT, and WebSockets while expanding my knowledge in IoT and embedded development.'},
  { id: 3, cx: 200, cy: 425, label: "Drones & Wireless Control", stop:175 ,content:'Built my own drone using ESP8266 and high-switching MOSFETs, integrating an ESP32-CAM for real-time video streaming. Explored advanced drone control and swarm coordination with ArduPilot.'},
  { id: 4, cx: 200, cy: 330, label: "First Milestone", stop:287.5 ,content:'3hfhghgjdfghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
  { id: 5, cx: 250, cy: 280, label: "First Milestone", stop:383.4 ,content:'4hfhghgjdfghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
  { id: 6, cx: 300, cy: 355, label: "First Milestone", stop:500 ,content:'5hfhghgjdfghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
  { id: 7, cx: 345, cy: 420, label: "First Milestone", stop:600 ,content:'6hfhghgjdfghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
  { id: 8, cx: 390, cy: 325, label: "First Milestone", stop:730 ,content:'7hfhghgjdfghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
  { id: 9, cx: 390, cy: 230, label: "First Milestone", stop:853.4 ,content:'8hfhghgjdfghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
  { id: 10, cx: 440, cy: 180, label: "First Milestone", stop:952.5 ,content:'9hfhghgjdfghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
  // { id: 11, cx: 490, cy: 230, label: "First Milestone", stop:1041 ,content:'10hfhghgjdfghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
  { id: 11, cx: 490, cy: 280, label: "First Milestone", stop:1100 ,content:'11hfhghgjdfghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
  { id: 12, cx: 570, cy: 320, label: "First Milestone", stop:1200 ,content:'12hfhghgjdfghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
];

export default function JourneyMap() {
  const [hovered, setHovered] = useState(null);
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
    config: { duration: 10000 },
    reset: startAnimation, // Restart animation when component mounts
    immediate: false,
    pause: hovered !== null, // Pause when hovered
  });

  // const offset = useSpringValue(totalLength); // Tracks animated stroke progress

  // const spring = useSpring({
  //   offset: 0,
  //   from: { offset: totalLength },
  //   config: { duration: 3000 },
  //   pause: hovered !== null,
  //   reset: startAnimation,
  //   onChange: (o) => offset.set(o.offset), // Update offset state dynamically
  // });
  
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
            fill={hovered === stop.id ? "#ed8008" : "#567ca3"}
          />
          {((stop.id === hovered) || hovered===null) && (
            <text x={stop.cx - 40} y={stop.cy - 15} fontSize="15" fill={hovered?"#ed8008":"#567ca3"}>
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
      className='pl-5 pb-5 lg:absolute left-[8%] lg:top-[152%] lg:w-[25%] text-[#ed8008] '
    >
      {hovered?stops[hovered-1].content:'* Hover over the milestones to explore more!'}
    </motion.p>
    </>
  );
}
