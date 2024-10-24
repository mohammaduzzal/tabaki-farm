import About from "../About/About";
import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';

const CartContainer = ({handleIsActiveStatus,isActive,selectedProducts,handleDelete}) => {
    
    return (
        <div className="w-1/2 mx-auto">
              <h1 className="text-3xl font-bold underline">
    CartContainer
    </h1>

            <div className="flex gap-4 my-2">
            <button onClick={()=>handleIsActiveStatus('cart')} className={`${isActive.cart ? 'bg-green-500 btn hover:bg-green-500' : 'btn'}`}>Cart</button>
            <button onClick={()=>handleIsActiveStatus('about')} className={`${isActive.cart ? 'btn' : 'bg-green-500 btn hover:bg-green-500'}`}>About</button>
            </div>


           
        
            {
                isActive.cart ?  <Cart selectedProducts={selectedProducts} handleDelete={handleDelete}/> :     <About/>
            }
        </div>
    );
};

CartContainer.propTypes = {
    handleIsActiveStatus:PropTypes.func,
    isActive:PropTypes.object,
    selectedProducts:PropTypes.array,
    handleDelete:PropTypes.func
    
};

export default CartContainer;