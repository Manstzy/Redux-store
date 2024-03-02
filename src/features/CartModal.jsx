import Modal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  selectItems,
  selectTotalItems,
  selectTotalPrice,
  removeCart,
  addToCart,
} from "../redux/cart/cartSlice";

const CartModal = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const Items = useSelector(selectItems);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  console.log(Items);

  const handleRemoveCart = (product) => {
    dispatch(removeCart(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleCheckoutToWhatsapp = () => {
    if (totalItems === 0) return;

    const phoneNumber = `6281285241889`;
    const message = `Halo saya ingin membeli ${totalItems} barang dengan totaol harga ${totalPrice}`;
    const URL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(URL, "_blank");
  };

  console.log(Items);
  return (
    <Modal>
      <div className="flex flex-col gap-6 p-1 sm:p-2 w-full lg:w-[900px]">
        <div className="flex flex-col gap-6 max-h-[500px] overflow-auto">
          {Items.map((product) => (
            <div
              key={product.id}
              className="w-full border-b-4 border-blue-200 pb-2"
            >
              <div className="w-[120px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-10 w-[75%]">
                <h3 className="capitalize mt-3 text-lg">{product.title}</h3>
                <div className="flex items-center gap-2 ">
                  <h4 className="text-sm">{product.price}</h4>
                  <h3 className="text-lg">{product.totalPrice}</h3>
                </div>
                <div className="flex items-center gap-4 mt-4 ml-auto">
                  <button
                    type="button"
                    className="rounded-full bg-blue-400 w-5 h-5 text-white flex items-center justify-center"
                    onClick={() => handleRemoveCart(product)}
                  >
                    -
                  </button>
                  <h3 className="mx-2">{product.quantity}</h3>
                  <button
                    onClick={() => handleAddToCart(product)}
                    type="button"
                    className="rounded-full bg-blue-400 w-5 h-5 text-white flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-bold">Total Price : $ {totalPrice}</h3>
          <h3 className="text-lg font-bold">Total items : {totalItems} </h3>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="rounded-full hover:bg-slate-800 py-3 px-8 bg-blue-400 w-5 h-5 text-white flex items-center justify-center"
            onClick={handleCloseModal}
          >
            Close
          </button>
          <button
            type="button"
            className="rounded-full bg-blue-400 px-4 text-white flex items-center justify-center"
            onClick={handleCheckoutToWhatsapp}
          >
            Checkout
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
