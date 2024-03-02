import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./features/productlist/ProductList";
import CartModal from "./features/CartModal";
const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleShowModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      {isOpenModal ? <CartModal handleCloseModal={handleCloseModal} /> : null}
      <Header handleShowModal={handleShowModal} />
      <main className="mx-auto px-4">
        <ProductList />
      </main>
    </>
  );
};

export default App;
