import { Routes, Route, Navigate } from "react-router";
import { Button } from "@mui/material";
import { Playground } from "../pages/playground/Playground";
import { PageNotFound } from "../pages/page-not-found/PageNotFound";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/start"
        element={
          <Button variant="contained" color="primary">
            StartPage
          </Button>
        }
      />
      <Route path="/playground" element={<Playground />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
