import { AiOutlineSetting } from "react-icons/ai";
import Logo from "../img/logo.png";
import { useState } from "react";
import Modal from "./Modal";
import FormularioCuenta from "./FormularioCuenta";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-emerald-300 p-4 brightness-40 ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex">
          <img className="w-12 mr-4 md:mr-10 lg:mr-96 " src={Logo} />
          <h1 className=" text-4xl font-bold text-center"> La Michoacana </h1>
        </div>
        <div className="md:visible absolute top-8 right-14">
          <button onClick={toggleMenu}>
            <AiOutlineSetting className="text-2xl cursor-pointer" />
          </button>
        </div>
        <div className={`md:flex ${menuOpen ? "block" : "invisible"}`}>
          <div>
            <button
              className="block md:inline-block mt-4 md:mt-0 md:ml-4"
              onClick={openModal}
            >
              Cuenta
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <div className="bg-red-300">
                <h2 className=" text-xl font-bold mb-4">
                  Contenido de la Ventana Emergente
                </h2>
                <h1 className="">
                  <FormularioCuenta />
                </h1>
              </div>
            </Modal>
            <a href="" className="block md:inline-block mt-4 md:mt-0 md:ml-4">
              Acerca
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
