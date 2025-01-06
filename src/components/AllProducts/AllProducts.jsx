import PropTypes from "prop-types";
import Product from "./Product";

const AllProducts = ({products,handleSelectedProduct}) => {
   
    return (
        <div className="md:w-3/5 w-full">
            <h3 className="text-3xl font-bold">Products: {products.length}</h3>
            <div>
                {
                    products.map((p,idx)=><Product key={idx} product = {p}
                                                       handleSelectedProduct = {handleSelectedProduct}
                    
                    ></Product>)
                }
            </div>
        </div>
    );
};
AllProducts.propTypes = {
    products : PropTypes.array,
    handleSelectedProduct : PropTypes.func,
}
export default AllProducts;