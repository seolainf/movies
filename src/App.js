import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Watch from "./pages/Watch/Watch";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:slug" element={<Single />} />
          <Route path="/watch/:slug" element={<Watch />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
