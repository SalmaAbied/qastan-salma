import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

const TeamCard = () => {
  return (
    <div className="mb-16">
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-lightgray text-lg text-center font-normal pb-3">Ons team</p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">De getalenteerde mensen achter de schermen van Qastan</h1>
        </div>
      </div>
      <div className="w-full px-10 pt-10">
        <div className="container mx-auto">
          <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {teamData.map((member, index) => (
              <div key={index} role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded-lg overflow-hidden shadow-lg bg-slate-50">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img src={member.image} alt={`Afbeelding van ${member.name}`} role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">{member.name}</h1>
                    <p className="text-gray-800 text-sm text-center">{member.position}</p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">{member.description}</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a target="_blank" href={member.instagram} className="mx-5">
                        <div aria-label="Instagram" role="img" className="hover:text-pink-500 transition duration-300">
                          <Instagram />
                        </div>
                      </a>
                      <a target="_blank" href={member.facebook} className="mx-5">
                        <div aria-label="Facebook" role="img" className="hover:text-blue-500 transition duration-300">
                          <Facebook />
                        </div>
                      </a>
                      <a target="_blank" href={member.linkedin} className="mx-5">
                        <div aria-label="LinkedIn" role="img" className="hover:text-blue-300 transition duration-300">
                          <Linkedin />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const teamData = [
  {
    name: "Geert Debruyne",
    position: "CEO",
    description: "Lorem ipsum",
    image: "https://th.bing.com/th/id/OIG3.xtAItkukGm5ehjdiPvP5?pid=ImgGn",
    instagram: "https://www.instagram.com/qastan_it/",
    facebook: "https://www.facebook.com/QastanIT?locale=nl_NL",
    linkedin: "https://www.linkedin.com/in/geertdebruyne/",
  },
  {
    name: "Arne Debruyne",
    position: "COO",
    description: "Lorem ipsum",
    image: "https://th.bing.com/th/id/OIG3.8n3PhRQR.asKhNUULkrq?pid=ImgGn",
    instagram: "https://www.instagram.com/qastan_it/",
    facebook: "https://www.facebook.com/QastanIT?locale=nl_NL",
    linkedin: "https://www.linkedin.com/in/geertdebruyne/",
  },
  {
    name: "Arne Debruyne",
    position: "COO",
    description: "Lorem ipsum",
    image: "https://th.bing.com/th/id/OIG3..RHs3IgdGs9_xErmZpLJ?pid=ImgGn",
    instagram: "https://www.instagram.com/qastan_it/",
    facebook: "https://www.facebook.com/QastanIT?locale=nl_NL",
    linkedin: "https://www.linkedin.com/in/geertdebruyne/",
  },
];

export default TeamCard;
