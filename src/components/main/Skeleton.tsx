import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const SkeletonSection = styled.section`
  margin-top: 40px;
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
const InfoP = styled.div`
  width: 120px;
  height: 20px;
  background-color: #dbdbdb;
  text-align: left;
`;

interface SizeType {
  size: number;
}
export default function Skeleton({ size }: SizeType) {
  let skeletonArr = Array.from({ length: size });
  return (
    <Container>
      <Row xs="3">
        {skeletonArr.map(() => (
          <>
            <SkeletonSection>
              <ImageDiv></ImageDiv>
              <InfoP></InfoP>
              <InfoP></InfoP>
            </SkeletonSection>
          </>
        ))}
      </Row>
    </Container>
  );
}
