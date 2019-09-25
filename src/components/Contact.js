import React from "react";

const Contact = () => {
  return (
    <div id='contact'>
      <div>
        <a
          href='https://www.linkedin.com/in/ayyoub-maknassa-7a939a112/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin fa-2x' />
          <span>Linkedin</span>
        </a>
        <a
          href='https://github.com/studentofcod3'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github fa-2x' />
          <span>Github</span>
        </a>
      </div>
      <div>
        <div className='email'>
          <i className='fas fa-envelope fa-2x' />
          ayyoub.maknassa@hotmail.com
        </div>
      </div>
    </div>
  );
};

export default Contact;
