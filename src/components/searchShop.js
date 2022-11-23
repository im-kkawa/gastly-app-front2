import React, { useEffect, useState } from 'react';
import SearchCondition from './searchShop/searchCondition';
import SearchResult from './searchShop/searchResult';

const SearchShop = () => {
  const [searchShopIsSubmitted, setSearchShopIsSubmitted] = useState(false);

  return (
    <div>
      <SearchCondition setSearchShopIsSubmitted={setSearchShopIsSubmitted} />
      {searchShopIsSubmitted && <SearchResult />}
    </div>
  );
};

export default SearchShop;
