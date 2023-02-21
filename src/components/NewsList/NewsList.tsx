import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { getNews, deleteById } from 'redux/news/newsOperations';
import { selectNews } from 'redux/news/newsSelectors';

import {
  Box,
  Card,
  CardContent,
  Grid,
  CardActions,
  // Link,
  Button,
  Typography,
} from '@mui/material';

const NewsList: React.FC = () => {
  interface IItem {
    publishedAt: string;
    title: string;
    description: string;
    id: string;
  }

  const dispatch = useAppDispatch();
  const news: IItem[] = useAppSelector(selectNews);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const deleteNews = (id: string) => {
    dispatch(deleteById(id));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        sx={{ marginBottom: 1, marginTop: 2, textAlign: 'center' }}
        variant="h5"
        component="h2"
      >
        Головні новини країни
      </Typography>
      <Box sx={{ pt: 3 }}>
        <Grid container spacing={2}>
          {news.map(({ id, title, description }) => (
            <Grid
              sx={{ display: 'flex' }}
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
                  // height: '35vh',
                  // overflow: 'auto',
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
                    {/* <Link
                      href={item.url}
                      color="inherit"
                      rel="noopener noreferrer"
                    >
                      Читати більше...
                    </Link> */}
                    <Button
                      type="submit"
                      size="small"
                      onClick={() => deleteNews(id)}
                    >
                      Видалити
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default NewsList;
