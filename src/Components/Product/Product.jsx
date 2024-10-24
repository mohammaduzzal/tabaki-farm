
import PropTypes from 'prop-types';

const Product = ({products,handleSelectedProduct}) => {
    // console.log(products);
    const {id,image,description,price,category,isFeature} = products
    return (
        <div>
            <div className="card bg-base-100 border-2">
  <figure>
    <img
    className='object-cover w-full'
      src={image}
      alt={`picture of the products${id}`} />
  </figure>
  <div className="card-body text-gray-600">
    <h2 className="card-title">{category}</h2>
    <p>{description}</p>
    <p>$ {price}</p>
    <p>{isFeature ? 'category':'non category'}</p>
    <div className="card-actions">
      <button onClick={()=>handleSelectedProduct(products)} className="btn btn-primary bg-green-600 hover:bg-green-600">Add To Cart</button>
    </div>
  </div>
</div>
            
            
            
        </div>
    );
};

Product.propTypes = {
    products:PropTypes.object,
    handleSelectedProduct:PropTypes.func
};

export default Product;