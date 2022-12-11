import React from 'react';
import SectionTitle from '../../../components/SectionTitle';

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(name, email, message);
  }
  return (
    <div className='max-w-7xl mx-auto mt-16 mb-8'>
      <SectionTitle title="contact me" />
      <form className='mt-4' onSubmit={handleContact}>
        <div>
        <input className='border rounded-md border-slate-500 text-lg py-1 px-4 w-1/3 mb-4' type="text" placeholder='name' name='name' />
        </div>
        <div>
        <input className='border rounded-md border-slate-500 text-lg py-1 px-4 w-1/3 mb-4' type="email" placeholder='email' name='email' />
        </div>
        <div>
        <textarea className='border rounded-md border-slate-500 text-lg py-1 px-4 w-1/3' type="text" placeholder='message' name='message' />
        </div>
        <input className='bg-amber-300 py-3 px-8 text-xl capitalize rounded-md font-medium mt-4 cursor-pointer' type="submit" value="send message" />
      </form>
    </div>
  );
};

export default Contact;