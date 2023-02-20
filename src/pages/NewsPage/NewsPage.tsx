import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { getNews } from 'redux/news/newsOperations';
import { selectNews } from 'redux/news/newsSelectors';
import NewsList from 'components/NewsList';

const NewsPage: React.FC = () => {
  const news = useAppSelector(selectNews);
  const dispatch = useAppDispatch();
  console.log(news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <>
      <NewsList items={news} />
    </>
  );
};

export default NewsPage;
