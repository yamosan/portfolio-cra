import React, { FC } from "react";
import styled from "styled-components";
import { sp } from "media";
import UnderlinedText from "./UnderlinedText";
import ZoomImage from "./ZoomImage";

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 7.2rem;
  ${sp`
    margin-top: 4.0rem;
  `}
`;

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 9.4rem;
  ${sp`
    margin-bottom: 6.0rem;
  `}
  & > * {
    margin-bottom: 2.4rem;
    ${sp`
      margin-bottom: 2.0rem;
    `}
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledImgContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  ${sp`
    grid-template-columns: repeat(1, 1fr);
  `}
`;

const StyledDescription = styled.div`
  width: 100%;
  background-color: var(--text-background);
  margin-top: 0;
  padding: 30px 35px;
  ${sp`
    padding: 20px 15px;
 `}
  border-radius: 8px;
  p {
    margin: 0;
    word-break: break-all;
    overflow-wrap: break-word;
    word-wrap: break-word;
    color: #fff;
    font-size: 1.6rem;
    line-height: 2;
    ${sp`
      font-size: 1.4rem;
    `}
  }
`;

type Props = Pick<schema.Work, "content">;

const WorkContent: FC<Props> = ({ content }) => {
  return content ? (
    <StyledContainer>
      {content.map((v, i) => (
        <StyledSection key={i.toString()}>
          <UnderlinedText as="h2">{v.head}</UnderlinedText>
          <Images images={v.images} />
          <StyledDescription>
            {v.description.map((v, i) => (
              <p key={i.toString()}>{v}</p>
            ))}
          </StyledDescription>
        </StyledSection>
      ))}
    </StyledContainer>
  ) : (
    <></>
  );
};

const Images: FC<{ images?: string[] }> = ({ images }) => {
  if (!images) return <></>;
  if (!images.length) return <></>;
  return (
    <StyledImgContainer>
      {images.map((v, i) => (
        <ZoomImage src={v} key={i.toString()} />
      ))}
    </StyledImgContainer>
  );
};

export default WorkContent;
