import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  return (
    <>
        <Navbar title="Text-Blink"  />
        <div className="container my-3">
            <TextForm heading="Try TextBlink - Word Counter, Character Counter, Removed extra spaces" />
        </div>
    </>
  );
}

export default App;
