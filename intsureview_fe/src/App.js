import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
