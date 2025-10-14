/**
 * MAIN APP COMPONENT
 * 
 * Sets up routing and theme provider for the entire application
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/theme/ThemeProvider";
import Home from "@/pages/Home";
import Colors from "@/pages/tokens/Colors";
import ComponentsOverview from "@/pages/components/ComponentsOverview";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tokens/colors" element={<Colors />} />
          <Route path="/components" element={<ComponentsOverview />} />
          {/* Add more routes as we build out the documentation */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
