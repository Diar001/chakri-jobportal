import React from 'react'


const Heading = ({ type, children }) => {
    // eslint-disable-next-line default-case
    switch (type) {
       case 'primary':
          return <h1 className={`heading heading--${type}`}>{children}</h1>

        case 'secondary':
            return <h1 className={`heading heading--${type}`}>{children}</h1>
        
        default:
            return <h1 className={`heading heading--${type}`}>{children}</h1>
    }
};

export default Heading;
