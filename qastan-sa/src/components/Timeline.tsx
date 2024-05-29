import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Event {
  year: string;
  title: string;
}
const events: Event[] = [
  { year: "1998", title: "Oprichting door Geert Debruyne" },
  { year: "2000", title: "FIT (Freelance Information Technology) ontstaat" },
  { year: "2005", title: "Eerste werknemer komt in dienst" },
  { year: "2010", title: "FITdoc wordt geboren: van generalist naar specialist" },
  { year: "2011", title: "Producten worden scherp gesteld: Mount Q" },
  { year: "2018", title: "Verhuis naar Kuurne" },
  { year: "2021", title: "FIT wordt Qastan" },
];

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const { scrollLeft, clientWidth } = timelineRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      timelineRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    timelineRef.current!.dataset.startX = String(touch.clientX);
    timelineRef.current!.dataset.scrollLeft = String(timelineRef.current!.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!timelineRef.current!.dataset.startX || !timelineRef.current!.dataset.scrollLeft) return;
    const touch = e.touches[0];
    const startX = parseInt(timelineRef.current!.dataset.startX, 10);
    const scrollLeft = parseInt(timelineRef.current!.dataset.scrollLeft, 10);
    const walk = (touch.clientX - startX) * 2;
    timelineRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!timelineRef.current!.dataset.isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current!.offsetLeft;
    const walk = (x - parseInt(timelineRef.current!.dataset.startX || "0", 10)) * 2;
    timelineRef.current!.scrollLeft = parseInt(timelineRef.current!.dataset.scrollLeft || "0", 10) - walk;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    timelineRef.current!.dataset.isMouseDown = "true";
    timelineRef.current!.dataset.startX = String(e.pageX - timelineRef.current!.offsetLeft);
    timelineRef.current!.dataset.scrollLeft = String(timelineRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    timelineRef.current!.dataset.isMouseDown = "false";
  };

  const handleMouseUp = () => {
    timelineRef.current!.dataset.isMouseDown = "false";
  };

  return (
    <>
      <div className="container mx-auto px-10 md:px-0">
        <h2 className="mb-1 text-4xl font-extrabold leading-tight text-gray-900">Ons verhaal</h2>
        <p className="mb-12 text-base italic text-gray-500 md:w-1/2">Ontdek hoe Qastan zich sinds 1998 heeft ontwikkeld van een eenmanszaak tot een toonaangevend familiebedrijf in de IT-sector, met meer dan 25 jaar expertise in het leveren van innovatieve en betrouwbare IT-oplossingen.</p>
        <div className="container mx-auto px-4">
          <div className="relative p-4 pb-20">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button onClick={() => scroll("left")} className="p-2 bg-gray-200 rounded-full drop-shadow-md hover:bg-gray-300 focus:outline-none transition duration-300">
                <ArrowLeft size={20} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button onClick={() => scroll("right")} className="p-2 bg-gray-200 rounded-full drop-shadow-md hover:bg-gray-300 focus:outline-none transition duration-300">
                <ArrowRight size={20} />
              </button>
            </div>
            <div ref={timelineRef} className="flex overflow-x-auto space-x-8 scrollbar-hide py-4 cursor-grab" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
              {events.map((event, index) => (
                <div key={index} className="min-w-[200px] bg-slate-50 p-4 rounded-lg drop-shadow-lg md:min-w-[250px] flex flex-col items-center">
                  <div className="bg-darkblue font-bold p-4 text-white rounded-full w-12 h-12 flex items-center justify-center">{event.year}</div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg mx-auto">{event.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
