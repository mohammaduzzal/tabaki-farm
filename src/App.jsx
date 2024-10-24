import { useState } from "react"
import CartContainer from "./Components/CartContainer/CartContainer"
import Header from "./Components/Header/Header"
import Products from "./Components/Products/Products"


function App() {
  const [isActive, setActive] = useState({cart:true,status:'cart'})
  const [selectedProducts, setSelectedProducts] = useState([])
  const [price, setPrice] = useState(500)

  const handleIncreasePrice = pr =>{
    setPrice(price + pr)
  }
  const handleDeletePrice = id =>{
    const dollar = selectedProducts.find(p => p.id == id)
    setPrice(price - dollar.price)

  }


  const handleIsActiveStatus = status =>{

    if(status === 'cart'){
      setActive({cart:true,status:'cart'})
    }
    else{
      setActive({cart:false,status:'about'})
    }
  }

  const handleSelectedProduct = product =>{
    const isExist = selectedProducts.find(p => p.id === product.id);
    if(isExist){
        alert('already exist product')

    }
    else{
      handleIncreasePrice(product.price)
        const newProduct = [...selectedProducts, product]
        setSelectedProducts(newProduct)
    }
}

const handleDelete = id =>{
  handleDeletePrice(id)
  const newProduct = selectedProducts.filter(product => product.id !== id)
  setSelectedProducts(newProduct)
}



  return (
    <div className="container mx-auto">
      <Header selectedProducts={selectedProducts.length} price={price}/>
      {/* products and cart container */}
      <div className="md:flex md:justify-between my-10">
        <Products handleSelectedProduct={handleSelectedProduct}/>
        <CartContainer
        isActive={isActive}
        selectedProducts={selectedProducts}
        handleDelete={handleDelete}
         handleIsActiveStatus={handleIsActiveStatus}/>
      </div>
   
     
    </div>
  )
}

export default App
