import { Hourglass, ShieldOff, Shuffle, TriangleAlert, Link, Database, Merge, Sheet, Calendar, GraduationCap, Briefcase, BarChart, Settings, UserMinus, Lock, Layers, Users, Code, Gem, Star, Puzzle, Rocket, Download } from "lucide-react";
import React from "react";

function CardWSymbol({ title, description, icon, button, className, tag }: CardWSymbolProps) {
  const selectIcon = (icon: string) => {
    switch (icon) {
      case "Hourglass":
        return <Hourglass size={32} />;
      case "ShieldOff":
        return <ShieldOff size={32} />;
      case "Shuffle":
        return <Shuffle size={32} />;
      case "TriangleAlert":
        return <TriangleAlert size={32} />;
      case "Link":
        return <Link size={32} />;
      case "Database":
        return <Database size={32} />;
      case "Merge":
        return <Merge size={32} />;
      case "Excel":
        return <Sheet size={32} />;
      case "Calendar":
        return <Calendar size={32} />;
      case "Graduation":
        return <GraduationCap size={32} />;
      case "Briefcase":
        return <Briefcase size={32} />;
      case "Chart":
        return <BarChart size={32} />;
      case "Settings":
        return <Settings size={32} />;
      case "User":
        return <UserMinus size={32} />;
      case "Lock":
        return <Lock size={32} />;
      case "Layers":
        return <Layers size={32} />;
      case "UserRound":
        return <Users size={32} />;
      case "Code":
        return <Code size={32} />;
      case "Gem":
        return <Gem size={32} />;
      case "Star":
        return <Star size={32} />;
      case "Puzzle":
        return <Puzzle size={32} />;
      case "Rocket":
        return <Rocket size={32} />;
      case "Download":
        return <Download size={32} />;
      default:
        return null;
    }
  };

  return (
    <div className={`mx-10 md:mx-0 rounded-xl ${className} bg-slate-50 shadow-lg shadow-lightgray/50 p-6 flex flex-col justify-between`}>
      <div>
        {tag && <span className="rounded-lg bg-orange-200 py-px px-2 text-sm text-orange-900 w-fit">{tag}</span>}
        <div className="flex items-center mb-4">
          {icon && <span className="text-darkorange mr-2">{selectIcon(icon)}</span>}
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
      </div>
      <p>{description}</p>
      {button && (
        <a href="/Contact" className="bg-darkorange text-white font-medium rounded-full mt-10 py-2 px-4 hover:bg-lightblue transition duration-300 w-fit">
          {button}
        </a>
      )}
    </div>
  );
}

export default CardWSymbol;
