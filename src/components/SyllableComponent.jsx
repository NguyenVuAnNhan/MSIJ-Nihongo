import 'react';
import PropTypes from 'prop-types';
function SyllableComponent({syllable}){
    return (
        <>
            <input type={'checkbox'}></input>
            {syllable.romanji}
        </>
    );
}

SyllableComponent.propTypes = {
    syllable: PropTypes.node.isRequired, // Specify `isRequired` if children are mandatory
};

export default SyllableComponent