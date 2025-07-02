import { NavLink } from "react-router-dom"
export default function Footer(){
     const categoryMapping = {
  Men: "men's clothing",
  Women: "women's clothing",
  Electronics: "electronics",
  Accessory: "jewelery"
};
    return(
    <footer className="Footer-Section">
      <div className="Footer-details">
        
        {/* Company Info */}
        <div>
          <h3 className="Footer-title">ShoppyGlobe</h3>
          <p className="Project-text">
            Your ultimate destination for fashion, style, and comfort.
            Elevate your look with our curated collections.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="Footer-title">Quick Links</h4>
          <ul className="OuickLinks-list">
        <NavLink to="/" className="hover:underline">
        Home
    </NavLink>
    {/* Mapping through the categoryMapping objects and based on their key navigating to different pages */}
    {Object.keys(categoryMapping).map((key) => (
        <NavLink 
            key={key} 
            to={`/${key}`} 
            state={{ category: categoryMapping[key] }} 
            className= "hover:underline"
            
        >
            {key}
        </NavLink>
    ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="Footer-title">Contact</h4>
          <ul className="Contact-list">
            <li>Email: support@shoppyglobe.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Mumbai, India</li>
          </ul>
        </div>

        {/* Newsletter or Socials */}
        <div>
          <h4 className="Footer-title">Stay Connected</h4>
          <p className="Update-text">Get the latest updates and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="email-box"
            />
            <button
              type="submit"
              className="footer-btn"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="Bottom-txt">
        © {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
      </div>
    </footer>
)
}