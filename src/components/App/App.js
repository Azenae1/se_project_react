import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <ModalWithForm title="New Garment" buttonText="Add Garment" />
    </div>
  );
}

export default App;
