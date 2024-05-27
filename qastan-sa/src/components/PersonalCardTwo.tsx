import React from 'react';

const TeamTwo = () => {
  return (
    <div className="mb-16">
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
        </div>
      </div>
      <div className="w-full px-10 pt-10">
        <div className="container mx-auto">
          <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {teamData.map((member, index) => (
              <div key={index} role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img src={member.image} alt={`Display Picture of ${member.name}`} role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">{member.name}</h1>
                    <p className="text-gray-800 text-sm text-center">{member.position}</p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">{member.description}</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href={member.github} className="mx-5">
                        <div aria-label="Github" role="img">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href={member.twitter} className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A11.47 11.47 0 0 0 20 3.88 9 9 0 0 1-2.54.69 4.5 4.5 0 0 0 1.59-2.81 9.09 9.09 0 0 0-2.5.69 4.5 4.5 0 0 0-7.59 4.06A12.15 12.15 0 0 1 2.3 3.55a4.47 4.47 0 0 0 1.4 6 4.51 4.51 0 0 1-2.04-.56v.06a4.49 4.49 0 0 0 3.63 4.42 4.5 4.5 0 0 1-2.02.08 4.5 4.5 0 0 0 4.2 3.13 9 9 0 0 1-5.6 1.93A9 9 0 0 1 2 18.5a12.81 12.81 0 0 0 6.86 2"></path>
                          </svg>
                        </div>
                      </a>
                      <a href={member.linkedin} className="mx-5">
                        <div aria-label="LinkedIn" role="img">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                            <path d="M4 4v16H20V4zm2 2h12v12H6zm6 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                          </svg>
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
    name: "John Doe",
    position: "Web Developer",
    description: "John Doe is a talented web developer with expertise in React, Node.js, and other web technologies.",
    image: "https://www.qastan.be/swfiles/logo/logo.svg?nocache=1716801733",
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe"
  },
  // Add more team members here
];

export default TeamTwo;

