import { useEffect, useState } from "react"
import AllProducts from "./components/AllProducts/AllProducts"
import Header from "./components/Header/Header"
import Carts from "./components/Carts/Carts";


function App() {
  const [products,setProducts] = useState([]);
  const [selectedProducts,setSelectedProducts] = useState([]);
  
  const handleSelectedProduct = product =>{
    // console.log(product);
    const isExist = selectedProducts.find(p => p.id == product.id)
    if(!isExist){
      setSelectedProducts([...selectedProducts,product]);
    }else{
      alert('Already Added')
    }
    
  }
 
  const handleDelete = id =>{
    // console.log(id);
    const remainingCart = selectedProducts.filter(p=>p.id!==id);
    setSelectedProducts(remainingCart);
  }

  useEffect(()=>{
   fetch('./fakeData.json')
   .then(res=>res.json())
   .then(data => setProducts(data));
  },[])

  return (
    <main className="container mx-auto">
     <Header></Header>

     <section className="flex flex-col md:flex-row gap-6">
     <AllProducts products = {products}
                  handleSelectedProduct = {handleSelectedProduct}
     
     ></AllProducts>
     <Carts selectedProducts = {selectedProducts}
             handleDelete = {handleDelete}
     
     ></Carts>
     </section>
      
    </main>
  )
}

export default App
