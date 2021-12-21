import React from 'react';
import './Error.css'

interface Props {
    text: string | undefined
    type: string
}

const InfoMessage: React.FC<Props> = (props) => {

    const {text, type} = props;

    return (
        <>
            {type === 'success' ? <div className={'success'}>
                {text}
            </div> : <div className={'error'}>
                {text}
            </div>}
        </>
    );
};

export default InfoMessage;
