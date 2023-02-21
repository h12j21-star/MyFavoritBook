import styled from "styled-components";
import { Link } from "react-router-dom";

const DetailLayout = styled.section`
  width: 80%;
  height: 80%;
  margin: 0 auto;
`;
const DetailSection = styled.section`
  margin: 100px auto;
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-areas: "img info info info" "img contents contents contents " "img .  . link";
  grid-gap: 10px;
`;
const DetailBookInfo = styled.div`
  grid-area: info;
  display: flex;
`;
const DetailImgWrap = styled.div`
  grid-area: img;
  width: 250px;
  height: 300px;
  background-color: #e9ecef;
  border-radius: 10px;
  margin-right: 20px;
`;
const DetailImg = styled.img`
  width: 140px;
  height: 180px;
  margin: 60px;
`;
const DetailTitle = styled.p`
  font-size: 20px;
  font-weight: 900;
  text-align: left;
  &::after {
    content: "";
    margin-left: 10px;
    border-right: 3px solid #000;
  }
`;
const DetailAuthor = styled.p`
  text-align: left;
  font-size: 10px;
  margin-left: 10px;
  padding-top: 7px;
  font-weight: 800;
`;
const DetailContents = styled.p`
  grid-area: contents;
  text-align: left;
  font-size: 12px;
  margin-left: 0;
  line-height: 2;
`;
const DetailLink = styled(Link)`
  text-align: center;
  grid-area: link;
  font-size: 10px;
  color: #000;
`;
export {
  DetailLayout,
  DetailSection,
  DetailImg,
  DetailTitle,
  DetailAuthor,
  DetailContents,
  DetailLink,
  DetailImgWrap,
  DetailBookInfo,
};
