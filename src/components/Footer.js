import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="footer">
      <h3 className="m-2 p-3 bg-black text-white rounded text-center">
        This website is designed by{" "}
        <span className="font-bold">{user.name}</span>
      </h3>
    </div>
  );
};

export default Footer;
