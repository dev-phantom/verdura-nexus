import { Route, Routes } from "react-router";
import Home from "./pages/home";

export default function App() {
  return (
    <Routes>

    <Route index element={<Home />} />

    </Routes>

  );
}
