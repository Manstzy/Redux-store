import ReactDOM from "react-dom";

const BackdropOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black/80 backdrop:blur-md h-screen z-10" />
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 py-10 medium:px-20 w-full flex px-10 items-center justify-center z-30">
      <div className="bg-white p-4 w-full rounded-md shadow-lg text-gray-500">
        {children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("modal");
const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<BackdropOverlay />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
