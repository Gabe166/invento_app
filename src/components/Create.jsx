import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContextValue";

const Create = () => {
    const { setProducts } = useContext(ProductContext);
    const [name, setName] = useState("");
    const [qty, setQty] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedName = name.trim();
        const quantity = Number(qty);

        if (!trimmedName || qty === "" || !Number.isFinite(quantity)) {
            window.alert("Please fill all the fields");
            return;
        }

        setProducts((currentProducts) => [
            ...currentProducts,
            { id: Date.now(), name: trimmedName, qty: quantity },
        ]);
        setName("");
        setQty("");
    };

    return (
        <section className="panel create-panel">
            <div className="panel-heading">
                <div>
                    <p className="panel-kicker">GET STARTED</p>
                    <h2>Add a product</h2>
                </div>
                <span className="add-icon" aria-hidden="true">+</span>
            </div>
            <p className="panel-description">Add a new item to your inventory.</p>
            <form className="product-form" onSubmit={handleSubmit}>
                <label className="field-label" htmlFor="product-name">Product name</label>
                <input
                    className="form-input"
                    id="product-name"
                    type="text"
                    placeholder="e.g. Wireless keyboard"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
                <label className="field-label" htmlFor="product-quantity">Quantity</label>
                <input
                    className="form-input"
                    id="product-quantity"
                    type="number"
                    placeholder="Enter a quantity"
                    value={qty}
                    onChange={(event) => setQty(event.target.value)}
                    min="0"
                    required
                />
                <button className="submit-button" type="submit" name="add_product_name">
                    <span aria-hidden="true">+</span>
                    Add product
                </button>
            </form>
        </section>
    );
};

export default Create;
