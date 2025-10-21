import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/intex";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
