import { Routes, Route, Navigate } from "react-router";
import { Button } from "@mui/material";
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
      <Route path="*" element={<Navigate to="/start" replace />} />
    </Routes>
  );
};
