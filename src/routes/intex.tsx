import { Routes, Route, Navigate } from "react-router";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/start" element={<p>StartPage</p>} />
      <Route path="*" element={<Navigate to="/start" replace />} />
    </Routes>
  );
};
