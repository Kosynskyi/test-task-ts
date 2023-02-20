import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks/hooks';
import { getNews } from 'redux/news/newsOperations';

const NewsPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return <div>NewsList</div>;
};

export default NewsPage;
