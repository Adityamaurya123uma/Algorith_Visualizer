import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <hr className="separator" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
