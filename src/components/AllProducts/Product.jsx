import PropTypes from "prop-types";

const Product = ({product,handleSelectedProduct}) => {
    // console.log(product);
    const {name,price,category,inStock} = product;
    return (
        <div className="border p-5 w-full m-5 rounded-3xl">
            <h2 className="text-xl text-gray-500">Name: {name}</h2>
            <p className="text-gray-400">Category: {category} </p>
            <p><small>Price: {price}$ </small></p>
           <p><small className={inStock ? 'text-green-500': 'text-red-500'}>{inStock ? "Available" : "Out of Stock"}</small></p>
           <button onClick={()=>handleSelectedProduct(product)} className={inStock ? 'bg-lime-300 btn' : 'btn btn-disabled'}>Add To Cart</button>
        </div>
    );
};

Product.propTypes = {
    product : PropTypes.object,
    handleSelectedProduct: PropTypes.func,
}
export default Product;