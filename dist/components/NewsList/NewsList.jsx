"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const hooks_1 = require("hooks/hooks");
const react_i18next_1 = require("react-i18next");
require("../../i18n");
const newsOperations_1 = require("redux/news/newsOperations");
const newsSelectors_1 = require("redux/news/newsSelectors");
const apiNews_1 = require("apiNews/apiNews");
const material_1 = require("@mui/material");
const NewsList = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [showBtnLoadMore, setShowBtnLoadMore] = (0, react_1.useState)(true);
    const [page, setPage] = (0, react_1.useState)(2);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const news = (0, hooks_1.useAppSelector)(newsSelectors_1.selectNews);
    const [total, setTotal] = (0, react_1.useState)(news.length);
    const isLoading = (0, hooks_1.useAppSelector)(newsSelectors_1.selectIsLoading);
    (0, react_1.useEffect)(() => {
        dispatch((0, newsOperations_1.getNews)());
        (0, apiNews_1.getTotalNews)().then(setTotal);
    }, [dispatch]);
    const deleteNews = (id) => {
        dispatch((0, newsOperations_1.deleteById)(id));
    };
    const loadMore = (page) => {
        setPage(prev => prev + 1);
        dispatch((0, newsOperations_1.loadMoreNews)(page));
        if (Math.ceil(total / 10) === page) {
            setShowBtnLoadMore(false);
            setPage(1);
            return;
        }
    };
    return (<material_1.Box sx={{ p: 2 }}>
      <material_1.Typography sx={{ marginBottom: 1, marginTop: 2, textAlign: 'center' }} variant="h5" component="h2">
        {t('newsPage.title')}
      </material_1.Typography>
      <material_1.Box sx={{ pt: 3 }}>
        <material_1.Grid container spacing={2}>
          {news.map(({ id, title, description }) => (<material_1.Grid sx={{ display: 'flex', marginBottom: 2 }} item xs={12} sm={6} md={4} lg={3} key={id}>
              <material_1.Card sx={{
                padding: 2,
                width: '100%',
            }}>
                <material_1.CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                  <material_1.Box sx={{ flexGrow: 1 }}>
                    <material_1.Typography sx={{ marginBottom: 2, fontWeight: 600 }}>
                      {title}
                    </material_1.Typography>
                    <material_1.Typography sx={{ marginBottom: 2 }}>
                      {description}
                    </material_1.Typography>
                  </material_1.Box>
                  <material_1.CardActions sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                    <material_1.Button type="submit" size="small" onClick={() => deleteNews(id)}>
                      {t('newsPage.deleteNewsBtn')}
                    </material_1.Button>
                  </material_1.CardActions>
                </material_1.CardContent>
              </material_1.Card>
            </material_1.Grid>))}
        </material_1.Grid>

        <material_1.Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
          {showBtnLoadMore && (<material_1.Button variant="outlined" sx={{ marginX: 'auto' }} onClick={() => loadMore(page)} disabled={isLoading}>
              {t('newsPage.loadMore')}
            </material_1.Button>)}
        </material_1.Box>
      </material_1.Box>
    </material_1.Box>);
};
exports.default = NewsList;
//# sourceMappingURL=NewsList.jsx.map