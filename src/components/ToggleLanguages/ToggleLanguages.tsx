import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { Box, IconButton } from '@mui/material';

const ToggleLanguages: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const toggleLang = (lang: string) => {
    language === 'ua' || language === 'ru-UA'
      ? setLanguage('en')
      : setLanguage('ua');
    i18n.changeLanguage(lang);
  };

  return (
    <Box>
      <IconButton
        aria-label="switch language"
        onClick={() => toggleLang(language)}
      >
        {language}
      </IconButton>
    </Box>
  );
};

export default ToggleLanguages;
