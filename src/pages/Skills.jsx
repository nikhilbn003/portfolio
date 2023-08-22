// import React from 'react';

// const Skills = () => {
//   return (
//     <div id="skills" className="container mx-auto mt-10">
//       <h2 className="text-3xl font-extrabold text-[#287676] mb-4" data-aos="fade-up">
//         Skills
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-lg p-6 shadow-md text-center">
//           <h3 className="text-xl font-semibold text-[#287676] mb-3">Front-end</h3>
//           {/* Add front-end skill content here */}
//         </div>
//         <div className="bg-white rounded-lg p-6 shadow-md text-center">
//           <h3 className="text-xl font-semibold text-[#287676] mb-3">Back-end</h3>
//           {/* Add back-end skill content here */}
//         </div>
//         <div className="bg-white rounded-lg p-6 shadow-md text-center">
//           <h3 className="text-xl font-semibold text-[#287676] mb-3">Cloud</h3>
//           {/* Add cloud skill content here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="container mx-auto mt-10 mb-24" data-aos="fade-up">
      <h2 className="text-3xl font-extrabold text-[#287676] mb-4" data-aos="fade-up">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up">
        <div className="bg-white rounded-lg p-6 h-64  shadow-md text-center transition-transform transform hover:scale-105" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-[#287676] mb-3">Front-end</h3>
          front-end skill content 
          
        </div>
        <div className="bg-white rounded-lg p-6 h-64 shadow-md text-center transition-transform transform hover:scale-105" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-[#287676] mb-3">Back-end</h3>
          back-end skill content 
        </div>
        <div className="bg-white rounded-lg p-6 h-64 shadow-md text-center transition-transform transform hover:scale-105" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-[#287676] mb-3">Cloud</h3>
           cloud skill content 
        </div>
      </div>
    </div>
  );
};

export default Skills;
