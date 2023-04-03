import React from 'react';

export default function Avartar({image, isNew}) {
    return (
        <div className='avatar'>
            <img 
            className='photo'
            src={image} /* 자바스크립트문법은 {} 을 표기해야한다. */
            alt='avatar' 
            />
            { isNew && <span className='new'>New</span>}
        </div>
    );
}