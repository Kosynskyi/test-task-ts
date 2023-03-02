import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { Box, Button, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const ToggleLanguages: FC = () => {
  const { t, i18n } = useTranslation();

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <LanguageIcon sx={{ mr: 1 }} />
      <Button
        sx={{
          p: 0,
          color: 'inherit',
          minWidth: '25px',
          mr: 1,
        }}
        aria-label="switch language"
        onClick={() => switchLang('en')}
      >
        EN
      </Button>
      <Typography>|</Typography>
      <Button
        sx={{
          p: 0,
          color: 'inherit',
          minWidth: '25px',
          ml: 1,
        }}
        aria-label="switch language"
        onClick={() => switchLang('ua')}
      >
        UA
      </Button>
    </Box>
  );
};

export default ToggleLanguages;
