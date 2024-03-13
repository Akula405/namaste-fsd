import { Link } from "react-router-dom";
import Selection from "./Selection";

const Header = ({ lang, setLang }) => {
  //const [lang, setLang] = useState("en");
  const handleChange = (e) => {
    setLang(e.target.value);
  };
  return (
    <div className="bg-cyan-950 p-10 ">
      <header className="text-lg  flex justify-between ">
        <div>
          <h1 className="text-white">Header</h1>
        </div>
        <div>{<Selection handleChange={handleChange} />}</div>
        {/* <div>
          <select onChange={handleChange}>
            <option value="en">English</option>
            <option value="tel">Telugu</option>
            <option value="hin">Hindhi</option>
          </select>
        </div> */}
        <div className="flex ">
          <h1 className="p-2 text-white">{<Link to="/">Home</Link>}</h1>
          <h1 className="p-2 text-white">{<Link to="/about">About</Link>}</h1>
          <h1 className="p-2 text-white">
            <Link to="/contact">Contact</Link>
          </h1>
          <h1 className="p-2 text-white">
            {<Link to="/comment">Comments</Link>}
          </h1>
          <h1 className="p-2 text-white">
            {<Link to="/accordian">Accordian</Link>}
          </h1>
          <h1 className="p-2 text-white">
            {<Link to="/login-protect">Login</Link>}
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
