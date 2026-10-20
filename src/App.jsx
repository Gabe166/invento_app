import Create from "./components/Create";
import Header from "./components/Header";
import Products from "./components/Products";
import "./App.css";

const App = () => (
    <main className="app-shell">
        <div className="app-container">
            <Header />
            <section className="page-intro">
                <div>
                    <p className="eyebrow">INVENTORY MANAGEMENT</p>
                    <h2>Inventory overview</h2>
                    <p className="page-description">
                        Keep an eye on your products and stock levels.
                    </p>
                </div>
                <span className="availability">
                    <span className="availability-dot" />
                    Inventory is up to date
                </span>
            </section>
            <div className="inventory-layout">
                <Create />
                <Products />
            </div>
        </div>
    </main>
);

export default App;
