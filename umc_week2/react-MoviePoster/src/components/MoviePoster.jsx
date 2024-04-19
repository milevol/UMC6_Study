import React from 'react';
import styled from 'styled-components';
import { movies } from '../data';

// 스타일드 컴포넌트 정의
const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // 다음 줄 넘기기
  justify-content: center; // 가로 방향 중앙 정렬
  position: absolute;
  z-index: 0;
`;

const MovieCard = styled.div`
  display: flex;
  flex-direction: column; // 요소들 수직 정렬
  align-items: center; // 수평 정렬
  margin: 10px;
`;

const MovieImage = styled.img`
width: 200px;
height: 300px;
`;

const MovieTitle = styled.div`
color: white;
background-color: rgb(55, 59, 106);
width: 200px;
height: 30px;
border: 1px;
padding: 30px 0;
display: flex;
justify-content: space-between;
align-items: center; // 수직 중앙
`;

function MoviePoster() {
  const movieList = movies.results.map(movie => (
    <MovieCard key={movie.id}>
      <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <MovieTitle>
        <div>{movie.title}</div>
        <div>{movie.vote_average}</div>
      </MovieTitle>
    </MovieCard>
  ));

  return (
  <MovieContainer>{movieList}</MovieContainer>
  );
}

export default MoviePoster;
