import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

import { List } from "./pages/github/list";
const routes = [{ path: "/home", element: <List />, exact: true }];

const App = () => {
  return (
    <main className="App">
      <Router>
        <main>
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
      </Router>
    </main>
  );
};
export default App;
