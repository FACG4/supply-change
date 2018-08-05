import React from 'react';

import BusinessInfo from './BusinessInfo';
import Turnover from './Turnover';
import UploadLogo from './UploadLogo';

const SwitchComponents = ({ activePageIndex, changeState }) => {
  switch (activePageIndex) {
    case 0:
      return <BusinessInfo changeState={changeState}/>;
      break;
    case 1:
      return <UploadLogo changeState={changeState}/>;
      break;
    case 2:
      return <Turnover changeState={changeState}/>;
      break;
    default: return <BusinessInfo changeState={changeState}/>;
  }
};

export default SwitchComponents;
