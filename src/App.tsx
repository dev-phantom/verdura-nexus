import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Create from "./pages/create";
import Decrypt from "./pages/decrypt";

export default function App() {
  return (
    <Routes>

    <Route index element={<Home />} />
    <Route path="create" element={<Create />} />
    <Route path="decrypt" element={<Decrypt />} />

    </Routes>

  );
}
