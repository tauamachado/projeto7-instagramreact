import Posts from "./Posts";
import SideBar from "./SideBar";
import Stories from "./Stories";

export default function Body() {
    return (
        <div className="body">
        <div className="esquerda">
            <Stories />
            <Posts />
        </div>
        <SideBar />
      </div>
    );
}