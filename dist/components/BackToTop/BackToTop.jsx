"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const ArrowUpward_1 = __importDefault(require("@mui/icons-material/ArrowUpward"));
const BackToTop = () => {
    const [backToTop, setBackToTop] = (0, react_1.useState)(false);
    const addScroll = () => {
        if (window.scrollY > 100) {
            setBackToTop(true);
        }
        else {
            setBackToTop(false);
        }
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener('scroll', addScroll);
        return () => {
            window.removeEventListener('scroll', addScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (<>
      {backToTop && (<material_1.IconButton sx={{ position: 'fixed', bottom: 20, right: 20 }} onClick={scrollToTop}>
          <ArrowUpward_1.default sx={{ color: '#57b846d7' }}/>
        </material_1.IconButton>)}
    </>);
};
exports.default = BackToTop;
//# sourceMappingURL=BackToTop.jsx.map