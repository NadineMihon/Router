import PropTypes from "prop-types";

import './typo.css'

export const Typo = ({
    size,
    bold = false,
    ...props
}) => {  
    const mode = bold ? 'bold' : '';  
    return (
        <h1
            className={`title ${mode}`}
            style={{fontSize: size + 'px'}}
            {...props}
        >
            Заголовок
        </h1>
    );
};

Typo.propTypes = {
    /** What size should the text be? */
    size: PropTypes.string,
    /** Should the text be bold? */
    bold: PropTypes.bool,
};