"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const NewsList = ({ items }) => {
    console.log(333);
    console.log(items);
    return (<material_1.Box sx={{ p: 2 }}>
      <material_1.Typography sx={{ marginBottom: 1, marginTop: 2, textAlign: 'center' }} variant="h5" component="h2">
        Головні новини країни
      </material_1.Typography>
      <material_1.Box sx={{ pt: 3 }}>
        <material_1.Grid container spacing={2}>
          {items.map(item => (<material_1.Grid sx={{ display: 'flex' }} item xs={12} sm={6} md={4} lg={3} key={item.publishedAt}>
              <material_1.Card sx={{
                padding: 2,
            }}>
                <material_1.CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                  <material_1.Box sx={{ flexGrow: 1 }}>
                    <material_1.Typography sx={{ fontWeight: 600 }}>
                      {item.title}
                    </material_1.Typography>
                    <br />
                    <material_1.Typography>{item.description}</material_1.Typography>
                    <br />
                  </material_1.Box>
                  <material_1.CardActions sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                    <material_1.Link href={item.url} color="inherit" rel="noopener noreferrer">
                      Читати більше...
                    </material_1.Link>
                    <material_1.Button size="small">Видалити</material_1.Button>
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