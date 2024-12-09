import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Create from "./pages/create";

export default function App() {
  return (
    <Routes>

    <Route index element={<Home />} />
    <Route path="create" element={<Create />} />

    </Routes>

  );
}
