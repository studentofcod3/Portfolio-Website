import React from "react";
import styled from "styled-components";

const Contact = () => {
  const ContactStyle = styled.div`
    color: #ddd;

    :clicked {
      color: #fff;
    }

    div {
      a,
      .email {
        display: flex;
        flex-direction: column;
        align-items: space-around;
        margin-bottom: 3rem;
        text-decoration: none;
        color: #4d4b4b;
        transition: all 1s;

        :hover {
          color: #b3b854;
        }
      }
    }
  `;
  return (
    <ContactStyle>
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
          {" "}
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
    </ContactStyle>
  );
};

export default Contact;
