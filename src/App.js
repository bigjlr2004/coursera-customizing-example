import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
var tasty = {
  name: "John Roberts",
  age: 23,
  sex: "Male",
};

function App() {
  return (
    <div>
      <Nav />
      <Intro1 prop1="This is a passed prop." />
      <Intro2 prop2="This is a passed prop also." />
      <Intro3 prop2="This is a passed prop to intro3." />
      <Footer tasty={tasty} />
    </div>
  );
}

export default App;
