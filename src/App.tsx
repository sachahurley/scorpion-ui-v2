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
import BorderRadius from "@/pages/tokens/BorderRadius";
import SurfacesElevation from "@/pages/tokens/SurfacesElevation";
import Spacing from "@/pages/tokens/Spacing";
import FocusStates from "@/pages/tokens/FocusStates";
import Animations from "@/pages/tokens/Animations";
import ZIndex from "@/pages/tokens/ZIndex";
import ComponentsOverview from "@/pages/components/ComponentsOverview";
import Buttons from "@/pages/components/Buttons";
import Inputs from "@/pages/components/Inputs";
import Dropdowns from "@/pages/components/Dropdowns";
import SideNavigation from "@/pages/patterns/SideNavigation";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/scorpion-ui-v2">
        <Layout>
          <Routes>
            {/* All pages now use the same layout with sidebar */}
            <Route path="/" element={<Home />} />
            
            {/* Foundation pages */}
            <Route path="/foundation/base-colors" element={<Colors />} />
            <Route path="/foundation/semantic-colors" element={<SemanticColors />} />
            <Route path="/foundation/typography" element={<Typography />} />
            <Route path="/foundation/spacing" element={<Spacing />} />
            <Route path="/foundation/border-radius" element={<BorderRadius />} />
            <Route path="/foundation/surfaces-elevation" element={<SurfacesElevation />} />
            <Route path="/foundation/focus-states" element={<FocusStates />} />
            <Route path="/foundation/animations" element={<Animations />} />
            <Route path="/foundation/z-index" element={<ZIndex />} />
            
            {/* Legacy route redirect for backwards compatibility */}
            <Route path="/tokens/colors" element={<Colors />} />
            
            {/* Components pages */}
            <Route path="/components" element={<ComponentsOverview />} />
            <Route path="/components/buttons" element={<Buttons />} />
            <Route path="/components/inputs" element={<Inputs />} />
            <Route path="/components/dropdowns" element={<Dropdowns />} />
            
            {/* Patterns pages */}
            <Route path="/patterns/side-navigation" element={<SideNavigation />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
