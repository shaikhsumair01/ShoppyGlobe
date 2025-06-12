export default function Header(){
    return(
    <>
    <div className="Header">
        <div className="Head-section">
            <img src="public/logo.jpeg" className="Head-logo" />
            <div className="Search">
                <input type="text" placeholder="What are you looking For..." className="SearchBar" />
                <i className="fa-solid fa-magnifying-glass submit-icon"></i>
            </div>
            <div className="Cart">
            <i className="fa-solid fa-arrow-right-to-bracket login-icon"></i>
            <i className="fa-solid fa-cart-shopping cart-icon"></i>
            </div>

        </div>
        <ul className="Navigation">
            <li className="Nav-link">Home</li>
            <li className="Nav-link">Shop</li>
         
        </ul>
     </div>
    </>)
}