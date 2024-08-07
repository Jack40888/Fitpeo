import "./global.css";
import Layout from "./Layout";
import { ThemeProvider } from "./theme";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Homepage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
