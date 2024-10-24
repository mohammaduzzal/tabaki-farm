import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import PropTypes from 'prop-types';


const Products = ({handleSelectedProduct}) => {
    const [products, setProducts] = useState([])
    

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data.products))
    },[])

   
    
    return (
        <div>
          <h1 className="text-3xl font-bold underline">
    Products
    </h1>

    <div className='grid grid-cols-1  gap-3 w-1/2 mx-auto'>
    {
        products.map(p => <Product
             key={p.id}
        handleSelectedProduct={handleSelectedProduct}
             products={p}></Product>)
    }
    </div>
    
        </div>
    );
};


Products.propTypes = {
    
    handleSelectedProduct:PropTypes.func
};

export default Products;