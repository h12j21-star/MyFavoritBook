import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import LikeButton from "../common/LikeButton";

export default function Card() {
  let locate = useLocation();
  let authors = locate.state.authors.join(" ");

  return (
    <>
      <section>
        <h2 className="ir">책 상세</h2>
        <img src={locate.state.thumbnail} alt={locate.state.title} />
        <p>{locate.state.title}</p>
        <p>{locate.state.contents}...</p>
        <p>{authors}</p>
        <Link to={locate.state.url}>더 자세히 보기</Link>
      </section>
      <section>
        <h2 className="ir">좋아요 버튼</h2>
        <LikeButton {...locate.state} />
      </section>
    </>
  );
}
