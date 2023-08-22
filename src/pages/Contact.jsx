import React from 'react';

const Contact = () => {
  return (
    <div className='h-screen' id='contact'>
      <div className='flex'>
        {/* Left side box */}
        <div className='w-1/2 bg-gray-200 p-10'>
          <h2 className='text-2xl text-[#287676] font-bold mb-4'>Contact Information</h2>
          <p >Email: </p>
          <p>Phone: </p>
          {/* You can add more contact information here */}
        </div>

        {/* Right side form */}
        <div className='w-1/2 p-10'>
          <h2 className='text-2xl text-[#287676] font-bold mb-4'>Get in Touch</h2>
          <form>
          <div className='mb-4'>
  <label htmlFor='name' className='block text-custom-green font-semibold mb-2'>
    Name
  </label>
  
  <input
  type='text'
  id='name'
  name='name'
  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-custom-green'
  placeholder='Your Name'
/>


</div>

            <div className='mb-4'>
              <label htmlFor='email' className='block text-[#287676] font-semibold mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-custom-green'
                placeholder='Your Email'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-[#287676] font-semibold mb-2'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows='4'
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-custom-green'
                placeholder='Your Message'
              ></textarea>
            </div>
            <button
              type='submit'
              className='bg-[#287676] text-white px-4 py-2 rounded-lg hover:bg-[#457878]'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;