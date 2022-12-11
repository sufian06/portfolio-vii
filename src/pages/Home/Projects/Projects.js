import React from 'react';
import project1 from '../../../assets/images/projects/1.png';
import project2 from '../../../assets/images/projects/2.png';
import project3 from '../../../assets/images/projects/3.png';
import SectionTitle from '../../../components/SectionTitle';

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto my-8">
      <SectionTitle title='Projects' />
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        <div className='w-96  shadow-lg rounded-md'>
          <img className='w-full h-64' src={project1} alt="" />
          <div className='p-4'>
            <h4>Name: Sale X</h4>
            <button className='bg-amber-300 mt-4 w-full py-2 font-medium capitalize rounded-md'>view details</button>
          </div>
        </div>
        <div className='w-96 shadow-lg rounded-md'>
          <img className='w-full h-64' src={project2} alt="" />
          <div className='p-4'>
            <h4>Name: Recovery Agent</h4>
            <button className='bg-amber-300 mt-4 w-full py-2 font-medium capitalize rounded-md'>view details</button>
          </div>
        </div>
        <div className='w-96 shadow-lg rounded-md'>
          <img className='w-full h-64' src={project3} alt="" />
          <div className='p-4'>
            <h4>Name: eSchool</h4>
            <button className='bg-amber-300 mt-4 w-full py-2 font-medium capitalize rounded-md'>view details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;