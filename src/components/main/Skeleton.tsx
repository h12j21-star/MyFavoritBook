import styled, { keyframes } from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const SleletonAnimation = keyframes`
   0% {
        background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }

`;
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
  background-color: #f5f5f5;
  border-radius: 10px;
  animation: ${SleletonAnimation} 1.8s infinite ease-in-out;
`;
const InfoP = styled.div`
  width: 120px;
  height: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  text-align: left;
  animation: ${SleletonAnimation} 1.8s infinite ease-in-out;
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
