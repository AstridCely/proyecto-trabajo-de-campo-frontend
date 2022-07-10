import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./Routes/AppRoute";

export const GamerApp = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
};
