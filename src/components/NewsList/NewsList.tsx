import { FC, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { getNews, deleteById, loadMoreNews } from 'redux/news/newsOperations';
import { selectNews, selectIsLoading } from 'redux/news/newsSelectors';
import { getTotalNews } from 'apiNews/apiNews';

import {
  Box,
  Card,
  CardContent,
  Grid,
  CardActions,
  Button,
  Typography,
} from '@mui/material';

const NewsList: FC = () => {
  interface IItem {
    publishedAt: string;
    title: string;
    description: string;
    id: string;
  }

  const { t } = useTranslation();
  const [showBtnLoadMore, setShowBtnLoadMore] = useState(true);
  const [page, setPage] = useState(2);
  const dispatch = useAppDispatch();
  const news: IItem[] = useAppSelector(selectNews);
  const [total, setTotal] = useState(news.length);
  const isLoading: boolean = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getNews());
    getTotalNews().then(setTotal);
  }, [dispatch]);

  const deleteNews = (id: string) => {
    dispatch(deleteById(id));
  };

  const loadMore = (page: number) => {
    setPage(prev => prev + 1);
    dispatch(loadMoreNews(page));

    if (Math.ceil(total / 10) === page) {
      setShowBtnLoadMore(false);
      setPage(1);
      return;
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        sx={{ marginBottom: 1, marginTop: 2, textAlign: 'center' }}
        variant="h5"
        component="h2"
      >
        {t('newsPage.title')}
      </Typography>
      <Box sx={{ pt: 3 }}>
        <Grid container spacing={2}>
          {news.map(({ id, title, description }) => (
            <Grid
              sx={{ display: 'flex', marginBottom: 2 }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={id}
            >
              <Card
                sx={{
                  padding: 2,
                  width: '100%',
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ marginBottom: 2, fontWeight: 600 }}>
                      {title}
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                      {description}
                    </Typography>
                  </Box>
                  <CardActions
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      type="submit"
                      size="small"
                      onClick={() => deleteNews(id)}
                    >
                      {t('newsPage.deleteNewsBtn')}
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {showBtnLoadMore && (
            <Button
              variant="outlined"
              sx={{ marginX: 'auto' }}
              onClick={() => loadMore(page)}
              disabled={isLoading}
            >
              {t('newsPage.loadMore')}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NewsList;
