"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const react_2 = require("redux-persist/integration/react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
require("./index.css");
const App_1 = __importDefault(require("./components/App"));
const store_1 = require("redux/store");
const root = client_1.default.createRoot(document.getElementById('root'));
root.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_1.store}>
      <react_2.PersistGate loading={null} persistor={store_1.persistor}>
        <react_router_dom_1.BrowserRouter basename="/test-task-ts">
          <App_1.default />
        </react_router_dom_1.BrowserRouter>
      </react_2.PersistGate>
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
//# sourceMappingURL=index.jsx.map