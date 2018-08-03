import React from 'react';

export default (props) => {

    const {selected, img, title} = props;
    const className = "progress__circle " + (selected ? "progress__circle-selected" : "");

    return(
        <div className="progress__image-info">
            <div className={className}>
                <img className="progress__icon" src={img} alt={img}/>
            </div>
            <p>{title}</p>
        </div>
    )
}
