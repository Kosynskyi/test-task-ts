"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const hooks_1 = require("hooks/hooks");
const newsOperations_1 = require("redux/news/newsOperations");
const newsSelectors_1 = require("redux/news/newsSelectors");
const material_1 = require("@mui/material");
const NewsList = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const news = (0, hooks_1.useAppSelector)(newsSelectors_1.selectNews);
    (0, react_1.useEffect)(() => {
        dispatch((0, newsOperations_1.getNews)());
    }, [dispatch]);
    const deleteNews = (id) => {
        dispatch((0, newsOperations_1.deleteById)(id));
    };
    return (<material_1.Box sx={{ p: 2 }}>
      <material_1.Typography sx={{ marginBottom: 1, marginTop: 2, textAlign: 'center' }} variant="h5" component="h2">
        Головні новини країни
      </material_1.Typography>
      <material_1.Box sx={{ pt: 3 }}>
        <material_1.Grid container spacing={2}>
          {news.map(({ id, title, description }) => (<material_1.Grid sx={{ display: 'flex' }} item xs={12} sm={6} md={4} lg={3} key={id}>
              <material_1.Card sx={{
                padding: 2,
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
                      Видалити
                    </material_1.Button>
                  </material_1.CardActions>
                </material_1.CardContent>
              </material_1.Card>
            </material_1.Grid>))}
        </material_1.Grid>
      </material_1.Box>
    </material_1.Box>);
};
exports.default = NewsList;
//# sourceMappingURL=NewsList.jsx.map