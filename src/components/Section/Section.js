import PropTypes from 'prop-types';
import React from 'react'; 

const Section = ({ title, children }) => {
    return (
        <>
            <h2 >{title}</h2>
            {children}
        </>
    );
};

 Section.propTypes = {
   title: PropTypes.string,
   children: PropTypes.element.isRequired,
 };

export default Section;