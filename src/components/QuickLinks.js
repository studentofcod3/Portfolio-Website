import React, { Fragment } from "react";

const QuickLinks = () => {
  return (
    <Fragment>
      <a
        href='https://www.linkedin.com/in/ayyoub-maknassa-7a939a112/'
        target='_blank'
        rel='noopener noreferrer'
        className='quick-link'
      >
        <i className='fab fa-linkedin' />
      </a>
      <a
        href='https://github.com/studentofcod3'
        target='_blank'
        rel='noopener noreferrer'
        className='quick-link'
      >
        {" "}
        <i className='fab fa-github' />
      </a>
    </Fragment>
  );
};

export default QuickLinks;
