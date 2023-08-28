
import React from 'react';

const Skills = () => {

  const frontEndSkills = [
    "HTML & tailwind css",
    "JavaScript",
    "React",
    "Context API",
    "API Integration",
    "Redux"
  ];


  const backEndSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "SQL"
  ];

  const cloudSkills = [
    "Amazon Web Services (AWS)",
  ];


  return (
    <div id="skills" className="container mx-auto mt-10 mb-24" data-aos="fade-up">
      <h2 className="text-3xl font-extrabold text-[#287676] mb-4 animate-pulse" data-aos="fade-up">
        Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up">
        <div className="bg-white rounded-lg p-6 h-64 shadow-md text-center transition-transform transform hover:scale-105" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-[#287676] mb-3">Front-End</h3>
          <div className="text-left">
            <p className="mb-2">
              <strong>Front-end skill content:</strong>
            </p>
            <ul className="list-disc pl-4">
              {frontEndSkills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 h-64 shadow-md text-center transition-transform transform hover:scale-105 mt-4 lg:mt-0" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-[#287676] mb-3">Back-End</h3>
          <div className="text-left">
            <p className="mb-2">
              <strong>Back-end skill content:</strong>
            </p>
            <ul className="list-disc pl-4">
              {backEndSkills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 h-64 shadow-md text-center transition-transform transform hover:scale-105 mt-4 lg:mt-0" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-[#287676] mb-3">Cloud</h3>
          <div className="text-left">
            <p className="mb-2">
              <strong>Cloud skill content:</strong>
            </p>
            <ul className="list-disc pl-4">
              {cloudSkills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-4  mt-8">
       <div className="bg-white rounded-full mx-auto  h-24 w-24 shadow-md mt-4 lg:mt-0" data-aos="fade-up">
          <img src="/images/react-1.svg" alt="Front-end" className="rounded-full h-24 w-24" />
          <p className='mb-6 ml-5'>React js</p>
        </div>
        <div className="bg-white rounded-full mx-auto  h-24 w-24 shadow-md mt-4 lg:mt-0" data-aos="fade-up">
          <img src="/images/redux.jpeg" alt="Front-end" className="rounded-full h-24 w-24" />
          <p className='mb-6 ml-5'>Redux</p>
        </div>
        <div className="bg-white rounded-full mx-auto  h-24 w-24 shadow-md mt-4 lg:mt-0" data-aos="fade-up">
          <img src="/images/node.png" alt="Front-end" className="rounded-full h-24 w-24" />
          <p className='mb-6 ml-4'>Node JS </p>
        </div>
        <div className="bg-white rounded-full mx-auto  h-24 w-24 shadow-md mt-4 lg:mt-0" data-aos="fade-up">
          <img src="/images/mongo.png" alt="Back-end" className="rounded-full h-24 w-24" />
          <p className='mb-6 ml-4'>Mongo DB</p>
        </div>
        <div className="bg-white rounded-full mx-auto  h-24 w-24 shadow-md mt-4 lg:mt-0" data-aos="fade-up">
          <img src="/images/awslogo.png" alt="Cloud" className="rounded-full h-24 w-24" />
          <p className='mb-6 ml-7'>AWS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
