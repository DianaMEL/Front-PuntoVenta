

const Modal = ({ isOpen, onClose, children }) => {
    return (
      <div
        className={`fixed inset-0 bg-opacity-50 flex items-center justify-center ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="bg-white p-4 rounded-md shadow-md">
          <button className="absolute top-2 right-2" onClick={onClose}>
            Cerrar
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;