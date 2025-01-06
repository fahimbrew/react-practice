import PropTypes from "prop-types";
import Cart from "./Cart/Cart";

const Carts = ({selectedProducts,handleDelete}) => {
    // console.log(selectedProducts);
    return (
        <div className="md:w-2/5 w-full p-6">
            <h3 className="text-3xl font-semibold">Cart: {selectedProducts.length}</h3>
            
                <div>
                {
                    selectedProducts.map((selectedProduct,index)=><Cart key={index} selectedProduct = {selectedProduct}
                    handleDelete = {handleDelete}
                    ></Cart>)
                }
                </div>
            
        </div>
    );
};

Carts.propTypes = {
    selectedProducts : PropTypes.array,
    handleDelete : PropTypes.func,
}

export default Carts;