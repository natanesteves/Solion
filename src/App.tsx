// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { Transparency } from "./pages/Transparency";
import { Events } from "./pages/Events";
import { Videos } from "./pages/Videos";

// Layout
import Layout from "./hocs/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/events" element={<Events />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
