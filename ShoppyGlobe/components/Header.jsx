import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react";
export default function Header(){
    const categoryMapping = {
  Men: "men's clothing",
  Women: "women's clothing",
  Electronics: "electronics",
  Accessory: "jewelery"
};
const [searchText, setSearchText] = useState("")

const navigate = useNavigate(); // Navigation hook

    const handleSearch = (e) => {
        if (searchText.trim()) {
            navigate(`/search/${searchText}`);
        }
    };
    const clearInput= (e) =>{
        const textbox = e.target.parentElement.previousSibling;
        setSearchText("")
    }

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
            <i className="fa-solid fa-cart-shopping cart-icon"></i>
            </div>

        </div>
        
       <ul className="Navigation">
    <NavLink to="/" className={({ isActive }) => isActive ? "Nav-link active" : "Nav-link"}>
        Home
    </NavLink>
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