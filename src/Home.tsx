import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>メニュー</h1>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/display"}>QRを表示する</Link>
          </li>
          <li>
            <Link to={"/reader"}>QRを読み取る</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
