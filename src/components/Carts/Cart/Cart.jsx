import PropTypes from "prop-types";

const Cart = ({selectedProduct,handleDelete}) => {
    // console.log(selectedProduct);
    const {name,price} = selectedProduct;
    return (
        <div className="border p-5 flex gap-4 items-center rounded-3xl m-4">
            <h3>{name}</h3>
            <p><small>${price}</small></p>
            <button onClick={()=>handleDelete(selectedProduct.id,selectedProduct.price)} className="btn btn-sm btn-error">Delete</button>
        </div>
    );
};

Cart.propTypes = {
    selectedProduct : PropTypes.object,
    handleDelete : PropTypes.func,
}

export default Cart;