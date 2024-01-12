import "./App.css";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Information from "./components/Information/Information";
import Header from "./components/Profile/Header";

function App() {
  return (
    <>
      <main className="layout">
        <Header />
        <Experience />
        <Information />
        <Contact />
      </main>
    </>
  );
}

export default App;