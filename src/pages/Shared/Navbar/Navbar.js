import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-orange-200'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-3'>
        <Link className='text-lg font-semibold' to='/'>Sufian</Link>
        <button className='capitalize border px-4 py-2 rounded-md'>Download resume</button>
      </div>
    </div>
  );
};

export default Navbar;