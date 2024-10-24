import PropTypes from 'prop-types';

const Header = ({ selectedProducts, price}) => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
  
    <a className="text-xl md:text-2xl font-bold">Tabaki Farm</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-sm font-bold text-gray-700 gap-2 ">
      <li className="bg-green-500 hover:bg-transparent rounded-lg"><a>Home</a></li>
      <li className="bg-green-500 hover:bg-transparent rounded-lg"><a>Product</a></li>
      <li className="bg-green-500 hover:bg-transparent rounded-lg"><a>Cart : {selectedProducts}</a></li>
     
    </ul>
  </div>
  <div className="navbar-end">
  <p className="text-xl md:text-2xl font-bold">$ {price}</p>
  </div>
</div>
        </div>
    );
};

Header.propTypes = {
  selectedProducts:PropTypes.number,
  price:PropTypes.number
 
};


export default Header;