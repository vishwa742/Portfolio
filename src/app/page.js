import Sticky from "../../components/Sticky";
import Main from "../../components/Main";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div className="parent-container">
      <Header />
      <Sticky />
      <Main />
    </div>
  );
}
