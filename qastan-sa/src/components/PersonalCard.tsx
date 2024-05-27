import React from "react";

interface TeamMemberProps {
  name: string;
  title: string;
  avatarSrc: string;
  linkedin: string;
  twitter: string;
  instagram: string;
}
const TeamMember: React.FC<TeamMemberProps> = ({ name, title, avatarSrc, linkedin, twitter, instagram }) => {
    return (
    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
      <div className="flex flex-col">
        {/* Avatar */}
        <a href="#" className="mx-auto">
          <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100" src={avatarSrc} alt={name} />
        </a>

        {/* Details */}
        <div className="text-center mt-6">
          {/* Name */}
          <h1 className="text-gray-900 text-xl font-bold mb-1">{name}</h1>

          {/* Title */}
          <div className="text-gray-700 font-light mb-2">{title}</div>

          {/* Social Icons */}
          <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
            {/* Linkedin */}
            <a href={linkedin} className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
              <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
            </a>

            {/* Twitter */}
            <a href={twitter} className="flex rounded-full hover:bg-blue-50 h-10 w-10">
              <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
            </a>

            {/* Instagram */}
            <a href={instagram} className="flex rounded-full hover:bg-orange-50 h-10 w-10">
              <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamCard = () => {
  const teamMembers = [
    {
      name: "Tranter Jaskulski",
      title: "Founder & Specialist",
      avatarSrc: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Denice Jagna",
      title: "Tired & M. Specialist",
      avatarSrc: "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Kenji Milton",
      title: "Team Member",
      avatarSrc: "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Doesn't matter",
      title: "Will be fired",
      avatarSrc: "https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-white pt-24">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-gray-900 text-4xl font-bold mb-4">Maak kennis met ons team!</h1>
                <p className="text-gray-700 text-lg font-light">Met meer dan 25 jaar ervaring zijn we gegroeid tot een team</p>
              </div>
            </div>
            <div className="flex flex-wrap">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
