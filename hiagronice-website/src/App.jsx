import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/common/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import GarbageCollection from "./pages/services/GarbageCollection";
import SanitaryCollection from "./pages/services/SanitaryCollection";
import CleaningServices from "./pages/services/CleaningServices";
import WasteBags from "./pages/services/WasteBags";
import Landscaping from "./pages/services/Landscaping";
import HazardousWasteManagement from "./pages/services/HazardousWasteManagement";
import BookMeeting from "./pages/BookMeeting";
import GetQuote from "./pages/GetQuote";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LocateUs from "./pages/LocateUs";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/garbage-collection" element={<GarbageCollection />} />
          <Route path="/services/sanitary-collection" element={<SanitaryCollection />} />
          <Route path="/services/cleaning-services" element={<CleaningServices />} />
          <Route path="/services/waste-bags" element={<WasteBags />} />
          <Route path="/services/landscaping" element={<Landscaping />} />
          <Route path="/services/hazardous-waste-management" element={<HazardousWasteManagement />} />
          <Route path="/book" element={<BookMeeting />} />
          <Route path="/quote" element={<GetQuote />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locate-us" element={<LocateUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
