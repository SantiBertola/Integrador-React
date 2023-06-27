import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import Routes from "./routes/Routes";


function App() {
  return (    
    <Layout>
      <NavBar />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
