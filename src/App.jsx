import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

// Pages
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import UpcomingEvents from "./pages/UpcomingEvents";
import EventBookings from "./pages/EventBookings";
import Story from "./pages/Story";

// Sections
import Phase1 from "./components/Phase1";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* OPENING / LANDING PAGE */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Phase1 />
              <Story />
              <Contact />
            </>
          }
        />

        {/* OTHER ROUTES */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/event-booking" element={<EventBookings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
