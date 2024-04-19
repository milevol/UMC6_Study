import React from "react";
import styled from 'styled-components'
import { movies } from "../data";

const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // 다음 줄 넘기기
  justify-content: center; // 가로 방향 중앙 정렬
  position: absolute;
  z-index: 1;
`;

const DetailCard = styled.div` 
  width: 200px;
  height: 390px;
  display: flex;
  flex-direction: column; // 요소들 수직 정렬
  align-items: center; // 수평 정렬
  margin: 10px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  opacity: 0; // 초기 상태에서 투명

  &:hover {
    cursor: pointer;
    opacity: 1; // 올라가면 불투명 
  }
`;

const Text = styled.div`
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    margin: 5px 0;
`

function MovieDetail() {
    const detailList = movies.results.map(movie =>(
        <DetailCard>
            <div>{movie.title}</div>
            <Text>
            <div>{movie.overview}</div>
            </Text>
        </DetailCard>
    ));

    return (
        <DetailContainer>
            {detailList}
        </DetailContainer>
    )
}

export default MovieDetail;