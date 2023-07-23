import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/Layout/MainLayout";
import Home from "./pages/Home";
import Create from "./pages/Create";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='create' element={<Create />} />
          {/* <Route path='*' element={<Notfound/>} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
