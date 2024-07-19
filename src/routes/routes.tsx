import React from "react";
import { Routes, Route } from "react-router-dom";

import ListPage from "../pages/list/list";

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<ListPage />} />
    </Routes>
  );
}
