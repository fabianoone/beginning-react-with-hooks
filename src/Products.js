import Product from "./Product";

function Products() {

    const getProducts = () => {
        return [
            {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releaseDate: "May 31, 2016",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus, perferendis corrupti doloribus optio voluptatibus. Praesentium quia exercitationem pariatur, enim nesciunt libero, cumque, repellat harum dolor eum tempore facilis eligendi?",
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releaseDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus, perferendis corrupti doloribus optio voluptatibus. Praesentium quia exercitationem pariatur, enim nesciunt libero, cumque, repellat harum dolor eum tempore facilis eligendi?",
                rating: 4,
                numOfReviews: 12
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releaseDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus, perferendis corrupti doloribus optio voluptatibus. Praesentium quia exercitationem pariatur, enim nesciunt libero, cumque, repellat harum dolor eum tempore facilis eligendi?",
                rating: 5,
                numOfReviews: 2
            },
        ];
    };

    const products = getProducts();

    const listProducts = products.map((product) => <Product key={product.productName} data={product}></Product>);

    return (
        <div>
            <h1>Products</h1>
            {listProducts.length > 0 &&
                <ul>{listProducts}</ul>
            }
            {listProducts.length === 0 &&
                <p>No Products to display.</p>
            }
            {listProducts.length > 0 ? (
                <p>{`Total of ${listProducts.length} products.`}</p>
            ) : (
                <p>Total of 0 products.</p>
            )}
        </div>
    );
}

export default Products;
