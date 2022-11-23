import React, { useEffect, useState } from 'react';
import SearchCondition from './searchShop/searchCondition';
import SearchResult from './searchShop/searchResult';

const SearchShop = () => {
  return (
    <div>
      <SearchCondition />
      <SearchResult />
    </div>
  );
};

export default SearchShop;
