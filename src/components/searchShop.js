import React, { useEffect, useState } from 'react';
import SearchCondition from './searchShop/searchCondition';
import SearchResult from './searchShop/searchResult';

const SearchShop = () => {
  const [searchShopIsSubmitted, setSearchShopIsSubmitted] = useState(false);
  const [resultSearchShop, setResultSearchShop] = useState();

  return (
    <div>
      <SearchCondition
        setSearchShopIsSubmitted={setSearchShopIsSubmitted}
        setResultSearchShop={setResultSearchShop}
      />
      {searchShopIsSubmitted && (
        <SearchResult resultSearchShop={resultSearchShop} />
      )}
    </div>
  );
};

export default SearchShop;
