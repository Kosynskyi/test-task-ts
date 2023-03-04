import { FC, useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BackToTop: FC = () => {
  const [backToTop, setBackToTop] = useState(false);

  const addScroll = (): void => {
    if (window.scrollY > 100) {
      setBackToTop(true);
    } else {
      setBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', addScroll);

    return () => {
      window.removeEventListener('scroll', addScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {backToTop && (
        <IconButton
          sx={{ position: 'fixed', bottom: 20, right: 20 }}
          onClick={scrollToTop}
        >
          <ArrowUpwardIcon sx={{ color: '#57b846d7' }} />
        </IconButton>
      )}
    </>
  );
};

export default BackToTop;
