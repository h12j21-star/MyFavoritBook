import { useLocation } from "react-router";
import imageClean from "../../apis/services/imageClean";
import {
  DetailLayout,
  DetailSection,
  DetailImg,
  DetailTitle,
  DetailAuthor,
  DetailContents,
  DetailLink,
  DetailImgWrap,
  DetailBookInfo,
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
          <DetailImg
            src={
              locate.state.thumbnail
                ? locate.state.thumbnail
                : imageClean(locate.state.thumbnail)
            }
            alt={locate.state.title}
          />
        </DetailImgWrap>
        <DetailBookInfo>
          <DetailTitle>{locate.state.title} </DetailTitle>
          <DetailAuthor>{authors}</DetailAuthor>
        </DetailBookInfo>
        <DetailContents>{locate.state.contents}...</DetailContents>
        <DetailLink to={locate.state.url}>더 자세히 보기</DetailLink>
      </DetailSection>
      <section>
        <h3 className="ir">좋아요 버튼</h3>
      </section>
    </DetailLayout>
  );
}
