import PropTypes from 'prop-types';

const Cart = ({ selectedProducts,handleDelete }) => {
    return (
      <div>
        {selectedProducts.map((product) => (
          <div className="py-2" key={product.id}>
            <div className="flex items-center">
              <img src={product.image} alt={product.category} className="w-16 h-16 mr-4" />
              <p>Name: {product.category}</p>
              <button onClick={()=>handleDelete(product.id)} className="btn bg-green-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
Cart.propTypes = {
    selectedProducts:PropTypes.array,
    handleDelete:PropTypes.func
};


export default Cart;