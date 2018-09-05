import React from 'react';

export default ({ selected, img, title, activePageIndex, index }) => {
  const className = `progress__circle ${activePageIndex === index ? 'progress__circle-selected' : ''}`;

  return (
    <div className = 'progress__image-info'>
      <div className = { className }>
        <img className = 'progress__icon' src = { img } alt = { img }/>
      </div>
      <p>{ title }</p>
    </div>
  );
};
