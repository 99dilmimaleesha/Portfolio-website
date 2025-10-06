import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto text-left">
        {/* Contact Title */}
        <h2 className="text-3xl font-bold mb-8">Contact</h2>

        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's get in 
          <a href="mailto:your-email@example.com">
            <span className='text-pink-600 ml-1'>touch!</span>
          </a>
        </p>
      </div>
    </section>
  );
}



