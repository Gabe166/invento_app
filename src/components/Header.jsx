
import { ProductContext } from "../context/ProductContextValue"
import { useContext } from "react"


const Header = () =>{
        const {products} = useContext(ProductContext)
    
    return(
    <header className="topbar">
        <a className="brand" href="/" aria-label="Stockroom home">
            <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" />
                    <path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12v8.5M8 5.3l8 4.6" />
                </svg>
            </span>
            <span className="brand-name" bg-green>
                stockroom
            </span>
        </a>
        <div className="topbar-meta">
            <span className="topbar-label">Products in inventory</span>
            <span className="product-count">{products.length}</span>
        </div>
    </header>

    )
}
export default Header