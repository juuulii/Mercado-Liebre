const ProductContainer = ({product}) => {

    return(
        <div>

            <img src={product.image} alt={product.title} />

            <div>
                <h3>{product.title}</h3>
                <span>{product.price}</span>
            </div>

        </div>
    )

};


export default ProductContainer;