import harry from "../assets/harrypotter.jpg";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${harry})` }}></div>
  );
}
