import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItemCard = (props) => {
  const { name, imageId, price, description } = props.item;

  const dispatch = useDispatch();

  const handleAddItem = (itemObj) => {
    dispatch(addItem(itemObj));
  };

  return (
    <div className="flex p-2 m-4 bg-gray-200 rounded">
      <div className="w-40 rounded">
        <img className="w-full h-full rounded" src={IMG_CDN_URL + imageId} />
      </div>
      <div className="p-2 w-full">
        <h3 className="font-bold">{name}</h3>
        <p>{description}</p>
        <div className="font-bold">₹ {price}</div>
        <button
          className="bg-green-500 m-1 py-2 px-4 rounded font-bold "
          onClick={() => handleAddItem(props.item)}
          data-testid="add-btn"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
