import React from 'react';
import './Error.css'

interface Props {
    text: string
}

const Error: React.FC<Props> = (props) => {

    const {text} = props;

    return (
        <div className={'error'}>
            {text}
        </div>
    );
};

export default Error;
