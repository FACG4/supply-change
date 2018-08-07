import React from 'react';

import BusinessInfo from './BusinessInfo';
import Turnover from './Turnover';
import ImageUploader from './ImageUploader';
import Location from './Location_Places';
import Policy from './Policy';
import SocialImpact from './SocialImpact';

const SwitchComponents = ({ activePageIndex, changeState }) => {
  switch (activePageIndex) {
    case 0:
      return <BusinessInfo changeState={changeState}/>;
      break;
    case 1:
      return <ImageUploader changeState={changeState}/>;
      break;
    case 2:
      return <SocialImpact changeState={changeState}/>;
      break;
    case 3:
      return <Location changeState={changeState}/>;
      break;
    case 4:
      return <Turnover changeState={changeState}/>;
      break;
    case 5:
      return <Policy changeState={changeState}/>;
      break;
    default: return <BusinessInfo changeState={changeState}/>;
  }
};

export default SwitchComponents;
