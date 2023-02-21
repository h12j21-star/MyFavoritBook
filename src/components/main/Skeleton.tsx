import styled from "styled-components";
const SkeletonSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
const ImageDiv = styled.div`
  width: 120px;
  height: 150px;
  background-color: #dbdbdb;
`;
const TitleP = styled.p`
  width: 100px;
  height: 20px;
  background-color: #dbdbdb;
`;

const AuthorP = styled.p`
  width: 100px;
  height: 20px;
  background-color: #dbdbdb;
`;
export default function Skeleton() {
  return (
    <SkeletonSection>
      <ImageDiv></ImageDiv>
      <TitleP></TitleP>
      <AuthorP></AuthorP>
    </SkeletonSection>
  );
}
