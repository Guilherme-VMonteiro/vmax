// import Continue from "../components/Continue";
import { useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
// import Showcase from "../components/Showcase";

function App() {
  const [modal, setModal] = useState("")

  const handleOpenModal = (model) => {
    setModal(model);
  } 

  return (
    <div className="max-w-full min-w-96 overflow-x-hidden h-screen min-h-96 bg-gray-800">
      <Header changeModal={handleOpenModal}/>
      <Modal modalOption={modal}/>
      {/* <Showcase/>
      <Continue/> */}
    </div>
  );
}

export default App;
