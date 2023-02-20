import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  CardActions,
  Link,
  Button,
  Typography,
} from '@mui/material';
// import { Link } from 'react-router-dom';

interface IItem {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}

interface Iprops {
  items: IItem[];
}

const NewsList: React.FC<Iprops> = ({ items }) => {
  console.log(333);
  console.log(items);

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
          {items.map(item => (
            <Grid
              sx={{ display: 'flex' }}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={item.publishedAt}
            >
              <Card
                sx={{
                  padding: 2,
                }}
              >
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <br />
                    <Typography>{item.description}</Typography>
                    <br />
                  </Box>
                  <CardActions
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Link
                      href={item.url}
                      color="inherit"
                      rel="noopener noreferrer"
                    >
                      Читати більше...
                    </Link>
                    <Button size="small">Видалити</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* <ListItem></ListItem> */}
    </Box>
  );
};

export default NewsList;
