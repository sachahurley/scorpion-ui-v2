/**
 * MAIN APP COMPONENT
 * 
 * Sets up routing and theme provider for the entire application
 * ALL pages use the Layout with sidebar and top bar
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Colors from "@/pages/tokens/Colors";
import SemanticColors from "@/pages/tokens/SemanticColors";
import Typography from "@/pages/tokens/Typography";
import ComponentsOverview from "@/pages/components/ComponentsOverview";
import Buttons from "@/pages/components/Buttons";
import SideNavigation from "@/pages/patterns/SideNavigation";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* All pages now use the same layout with sidebar */}
            <Route path="/" element={<Home />} />
            
            {/* Foundation pages */}
            <Route path="/foundation/base-colors" element={<Colors />} />
            <Route path="/foundation/semantic-colors" element={<SemanticColors />} />
            <Route path="/foundation/typography" element={<Typography />} />
            
            {/* Legacy route redirect for backwards compatibility */}
            <Route path="/tokens/colors" element={<Colors />} />
            
            {/* Components pages */}
            <Route path="/components" element={<ComponentsOverview />} />
            <Route path="/components/buttons" element={<Buttons />} />
            
            {/* Patterns pages */}
            <Route path="/patterns/side-navigation" element={<SideNavigation />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
