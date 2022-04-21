import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const ProductAddBtn = ({
  cartCount,
  id,
  onAddItemToCart,
  onDecreaseProductQuantity,
}) => {
  return (
    <div className="productAddBtn d-flex align-items-center flex-wrap">
      <button className="button" onClick={() => onDecreaseProductQuantity()}>
        <span>
          <AiOutlineMinus />
        </span>
      </button>
      <span>{cartCount(id)}</span>
      <button className="button" onClick={() => onAddItemToCart()}>
        <span>
          <AiOutlinePlus />
        </span>
      </button>
    </div>
  );
};
export default ProductAddBtn;
