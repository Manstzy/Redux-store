import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch} from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleClickBuy = (items) => {
    dispatch(addToCart(items));
  };

  return (
    <div className="grid grid-cols-2 tablet:grid-cols-3 large:grid-cols-4 laptop:grid-cols-5 gap-4 mt-16 phone:max-w-[400px] mx-auto tablet:max-w-[600px] large:max-w-[800px] laptop:max-w-[900px]">
      {products.map((items) => {
        const limitTitle = () => {
          return items.title.length >= 12
            ? items.title.slice(0, 12)
            : items.title;
        };
        return (
          <div
            key={items.id}
            className="group/item rounded-xl mx-auto border-2 border-solid p-4 bg-white"
          >
            <div className="relative w-[80px] h-[110px] phone:w-[120px] medium:w-[150px] laptop:w-[135px]  mx-auto overflow-hidden">
              <img
                src={items.image}
                className="group-hover/item:scale-110 group-hover/item:transition-all group-hover/item:duration-300 w-full h-full object-contain"
              />
            </div>

            <p className="text-gray-500 text-sm">{items.category}</p>
            <p className="font-semibold">{limitTitle()}</p>
            <button
              type="button"
              className="group bg-slate-400 rounded-full flex w-full items-center before:absolute before:bg-lime-500 before:w-0 relative before:inset-0 before:rounded-full hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"
              onClick={() => handleClickBuy(items)}
            >
              <span className="-z-[10] group-hover:z-10 absolute group-hover:transitioan-all group-hover:duration-300 group-hover:ease-in-out text-sm text-center ml-7 text-white group-hover:font-semibold">
                Buy Now
              </span>
              <p className="font-semibold mx-auto text-[12px] text-white">
                ${items.price}
              </p>
              <div className="bg-gray-700 rounded-full flex items-center justify-center px-2 text-white">
                +
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
