import vite from "../assets/vite.svg";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../redux/cart/cartSlice";
const Header = ({ handleShowModal }) => {
  const totalItems = useSelector(selectTotalItems);
  console.log(totalItems);
  return (
    <header className="bg-gradient-to-r fixed top-0 left-0 right-0 z-10 from-cyan-500 to-blue-500 h-12 py-3 px-5 flex justify-between">
      <div className="flex gap-1">
        <img src={vite} className="w-7 h-7" alt="" />
        <h1 className="font-semibold text-white">ReduxStore</h1>
      </div>

      <button className="relative rounded-full " onClick={handleShowModal}>
        <span className="bg-red-500 absolute rounded-full -top-2 -right-2 w-5 h-5 text-white text-sm flex items-center justify-center">
          {totalItems}
        </span>
        <TiShoppingCart size={28} className="text-white" />
      </button>
    </header>
  );
};

export default Header;
