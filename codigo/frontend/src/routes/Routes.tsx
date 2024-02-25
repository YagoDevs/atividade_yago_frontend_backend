import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "../pages/Home";
import Layout from "./Layout";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
  
      </Route>
      </Routes>
    </BrowserRouter>
  );
}