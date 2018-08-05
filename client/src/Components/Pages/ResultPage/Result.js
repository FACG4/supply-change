import React from 'react';

import SearchForm from './SearchForm';
import Contract from './Contract';

const Result = ({ handleChange, handleSelect, SERegions, changeState, filtereContracts }) => {

  return (
    <main >
      <div className='contract-search-sec'>
        <h4 className='contract-search-sec__title'>Explore Contracts</h4>
        <SearchForm
          SERegions={SERegions}
          handleSelect={ handleSelect }
          handleChange={ handleChange }
          changeState={ changeState }
        />
      </div>
      <div className='contract-result'>
        <div className='contract-result-summary'>
          <h4 className='contract-result-summary__number'>{filtereContracts.length} Contracts found</h4>
        </div>
        {filtereContracts.map(contract => <Contract contract={contract} />)}
      </div>
    </main>
  );
};

export default Result;
