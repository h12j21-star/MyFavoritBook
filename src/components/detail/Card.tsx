import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
  DetailLayout,
  DetailSection,
  DetailImg,
  DetailTitle,
  DetailAuthor,
  DetailContents,
  DetailLink,
  DetailImgWrap,
} from "./style";

export default function Card() {
  let locate = useLocation();
  let authors =
    locate.state.authors.length > 0
      ? locate.state.authors.join(" ")
      : "저자 미상";

  return (
    <DetailLayout>
      <h2 className="ir">책 상세 보기</h2>
      <DetailSection>
        <h3 className="ir">책 정보</h3>
        <DetailImgWrap>
          <DetailImg src={locate.state.thumbnail} alt={locate.state.title} />
        </DetailImgWrap>
        <DetailTitle>{locate.state.title} </DetailTitle>
        <DetailAuthor>{authors}</DetailAuthor>
        <DetailContents>{locate.state.contents}...</DetailContents>
        <DetailLink to={locate.state.url}>더 자세히 보기</DetailLink>
      </DetailSection>
      <section>
        <h3 className="ir">좋아요 버튼</h3>
      </section>
    </DetailLayout>
  );
}
