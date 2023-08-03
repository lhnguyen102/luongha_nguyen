import React from 'react';
import { email, linkedin, github, resume, resumepdf, googlescholar } from '../assets';

const Network = () => {
  return (
    <div className="mt-2 mb-12 flex flex-row items-center justify-center">
        <a href="https://github.com/lhnguyen102" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github" className="w-12 h-12 mb-5 object-contain"/>
        </a>
        <span className="mx-2">&nbsp;</span>
        <a href="https://www.linkedin.com/in/luong-ha-nguyen-697941b4" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkedin" className="w-12 h-12 mb-5 object-contain"/>
        </a>
        <span className="mx-2">&nbsp;</span>
        <a href="mailto:luongha.nguyen@gmail.com">
            <img src={email} alt="email" className="w-12 h-12 mb-5 object-contain"/>
        </a>
        <span className="mx-2">&nbsp;</span>
        <a href="https://scholar.google.com/citations?user=c8ieu2oAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
          <img src={googlescholar} alt="Google Scholar" className="w-12 h-12 mb-5 object-contain" />
        </a>
        <span className="mx-2">&nbsp;</span>
        <a href={resumepdf} download>
          <img src={resume} alt="Download Resume" className="w-12 h-12 mb-5 object-contain" />
        </a>
        
    </div>
  )
}

export default Network;
