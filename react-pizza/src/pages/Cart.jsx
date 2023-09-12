import { useSelector } from "react-redux";
import { CartEmpty } from "./CartEmpty";
import CartsItem from "./CartItem";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  console.log('JSX',items)

 
 
  return (
    <>
      <div className="container container--cart">
          
        {items.length > 0  &&  <CartsItem />}
        {items.length === 0 && <CartEmpty/>}
                
      </div>
    </>
  );
};

export default Cart;
