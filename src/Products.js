function Products() {
    const products = ["Learning React", "Pro React", "Beginning React", "Up & Running React", "Learning JS"];

    const listProducts = products.map((product) => <li key={product.toString()}>{product}</li>);

    return (
        <div>
            <h1>Products</h1>
            {(products && products.length > 0) && (
                <ul>{listProducts}</ul>
            )}
        </div>
    );
}

export default Products;
