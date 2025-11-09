
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Style.css"
const Navbar = ({ scrollToSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (section) => {
        scrollToSection(section);
        setMenuOpen(false); // close menu after click
    };



    return (
         <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">SAM</div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => handleNavClick("home")}>Home</button>
          <button onClick={() => handleNavClick("about")}>About</button>
          <button onClick={() => handleNavClick("contact")}>Contact</button>
          <button onClick={()=>handleNavClick("skill")}>Skill</button>
        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
 
    );
};

export default Navbar;
