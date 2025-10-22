import { Routes, Route } from "react-router";
import { Button } from "@mui/material";
import { Playground } from "../pages/playground/Playground";
import { PageNotFound } from "../pages/page-not-found/PageNotFound";
export const AppRoutes = () => {
  const handleClick = () => {
    if (window.confirm("abc")) {
      console.log("ok");
    } else {
      console.log("cancel");
    }
  };

  return (
    <Routes>
      <Route
        path="/start"
        element={
          <Button onClick={handleClick} variant="contained" color="primary">
            StartPage
          </Button>
        }
      />
      <Route path="/playground" element={<Playground />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
