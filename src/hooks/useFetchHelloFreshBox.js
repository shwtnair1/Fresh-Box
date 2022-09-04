import { useState, useEffect } from 'react';
import hellofreshBox from '../data/hellofreshbox';

const useFetchHelloFreshBox = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(hellofreshBox);
  }, [data]);

  return { data };
};

export default useFetchHelloFreshBox;
