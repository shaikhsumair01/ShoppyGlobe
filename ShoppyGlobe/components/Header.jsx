import {NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


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
const [isOpen, setIsOpen] = useState(true);
// Toggling isOpen and when the navigation is open (in mobile view), the user should not be able to scroll
useEffect(() => {
  if (window.innerWidth <768 && isOpen) {
    document.body.style.overflow = "hidden";

     document.body.style.height = "100vh"; 

  } else {
    document.body.style.overflow = "";
    document.body.style.height = "";

  }
}, [isOpen]);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {

      setIsOpen(true); // Ensure nav is visible on desktop
    }
    else{
      setIsOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const navigate = useNavigate(); // Navigation hook used for navigating to the searched item (Search page)

const cartCount = useSelector((state) =>
  state.cart.cart_items.reduce((total, item) => total + item.qty, 0)
); // used for displaying the cartCount

    const handleSearch = (e) => {
        // if the searched item exists, sends the data to search page for rendering the item
        if (searchText.trim()) {
            navigate(`/search/${searchText}`);
            setSearchText("") // emptying the searchbar
        }
    };
    // Clearing inputs when the user clicks on cross option
    const clearInput= () =>{
        setSearchText("")
    }

    // Showing navigation section. (Contains logo, navbar, log-in icon and cart icon and nav-links)
    return(
    <>
    <div className="Header">
        <div className="Head-section">
            <div className="Head-img">
            <img src="logo.jpeg" className="Head-logo" />
            <i className={`fa-solid ${isOpen?"fa-xmark mobile-nav-open":"fa-bars mobile-nav"}`} onClick={()=> setIsOpen(!isOpen)}></i>
            </div>
            <div className="Search">
                <input type="text" placeholder="What are you looking For..." className="SearchBar"  value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                <div className = "icon-div">
                {searchText ? <i className="fa-solid fa-circle-xmark cross-icon" onClick={clearInput}></i> : ""}
                <i onClick ={handleSearch} className="fa-solid fa-magnifying-glass submit-icon"></i>
                </div>
            </div>
            <div className="nav-icon-div">
            <i className="fa-solid fa-arrow-right-to-bracket login-icon"></i>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>
  <i className="fa-solid fa-cart-shopping cart-icon"><sup className="cart-count-badge">{cartCount}</sup></i>
</NavLink>
            </div>
        </div>

       <ul className={`Navigation ${isOpen? "flex" : "hidden"}`}>
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