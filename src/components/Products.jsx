import { useContext } from "react";
import { ProductContext } from "../context/ProductContextValue";

const Products = () => {
    const { products, setProducts } = useContext(ProductContext);

    const handleDelete = (productId) => {
        setProducts((currentProducts) =>
            currentProducts.filter((product) => product.id !== productId),
        );
    };

    return (
        <section className="panel products-panel">
            <div className="panel-heading products-heading">
                <div>
                    <p className="panel-kicker">YOUR CATALOG</p>
                    <h2>Products</h2>
                </div>
                <span className="table-count">
                    {products.length} {products.length === 1 ? "item" : "items"}
                </span>
            </div>
            {products.length === 0 ? (
                <div className="empty-state">
                    <span className="empty-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="m3.75 7.5 8.25-4.75 8.25 4.75v9L12 21.25 3.75 16.5v-9Z" />
                            <path d="m4 7.75 8 4.5 8-4.5M12 12.25v8.5" />
                        </svg>
                    </span>
                    <h3>Your inventory is empty</h3>
                    <p>Add your first product to start tracking your stock.</p>
                </div>
            ) : (
                <div className="table-scroll">
                    <table className="inventory-table">
                        <thead>
                            <tr>
                                <th scope="col">Product name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col"><span className="visually-hidden">Actions</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="product-name">{product.name}</td>
                                    <td><span className="quantity-badge">{product.qty}</span></td>
                                    <td className="action-cell">
                                        <button
                                            className="delete-button"
                                            type="button"
                                            onClick={() => handleDelete(product.id)}
                                            aria-label={`Delete ${product.name}`}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
};

export default Products;
