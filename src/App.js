import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Routes from "./Routes";

function App() {
  return (
    <div className="">
      <Router>
        <Layout>
          <Routes />
        </Layout>
     </Router>
    </div>
  );
}

export default App;
