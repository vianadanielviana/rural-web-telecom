import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Satelites from "./pages/Satelites";
import Plataformas from "./pages/Plataformas";
import Vsats from "./pages/Vsats";
import Segmentos from "./pages/Segmentos";
import Clientes from "./pages/Clientes";
import Fotos from "./pages/Fotos";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/satelites" element={<Satelites />} />
          <Route path="/plataformas" element={<Plataformas />} />
          <Route path="/vsats" element={<Vsats />} />
          <Route path="/segmentos" element={<Segmentos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/fotos" element={<Fotos />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
