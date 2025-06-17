import {NavLink, useNavigate } from "react-router-dom"
import { useState } from "react";
export default function Header(){
/* creating a categoryMapping object for linking files (navigating files) through
 different category page */
    const categoryMapping = {
  Men: "men's clothing",
  Women: "women's clothing",
  Electronics: "electronics",
  Accessory: "jewelery"
};
// Using useState to get user inputs when the user types anything inside the search bar
const [searchText, setSearchText] = useState("")

const navigate = useNavigate(); // Navigation hook used for navigating to the searched item (Search page)


    const handleSearch = (e) => {
        // if the searched item exists, sends the data to search page for rendering the item
        if (searchText.trim()) {
            navigate(`/search/${searchText}`);
            setSearchText("") // emptying the searchbar
        }
    };
    // Clearing inputs when the user clicks on cross option
    const clearInput= (e) =>{
        const textbox = e.target.parentElement.previousSibling;
        setSearchText("")
    }

    // Showing navigation section. (Contains logo, navbar, log-in icon and cart icon and nav-links)
    return(
    <>
    <div className="Header">
        <div className="Head-section">
            <img src="/logo.jpeg" className="Head-logo" />
            <div className="Search">
                <input type="text" placeholder="What are you looking For..." className="SearchBar"  value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                <div className = "icon-div">
                {searchText ? <i className="fa-solid fa-circle-xmark cross-icon" onClick={clearInput}></i> : ""}
                <i onClick ={handleSearch} className="fa-solid fa-magnifying-glass submit-icon"></i>
                </div>
            </div>
            <div className="Cart">
            <i className="fa-solid fa-arrow-right-to-bracket login-icon"></i>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>
  <i className="fa-solid fa-cart-shopping cart-icon"></i>
</NavLink>
            </div>
        </div>

       <ul className="Navigation">
    <NavLink to="/" className={({ isActive }) => isActive ? "Nav-link active" : "Nav-link"}>
        Home
    </NavLink>
    {/* Mapping through the categoryMapping objects and based on their key navigating to different pages */}
    {Object.keys(categoryMapping).map((key) => (
        <NavLink 
            key={key} 
            to={`/${key}`} 
            state={{ category: categoryMapping[key] }} 
            className={({ isActive }) => isActive ? "Nav-link active" : "Nav-link"}
        >
            {key}
        </NavLink>
    ))}
</ul>
     </div>
    </>)
}