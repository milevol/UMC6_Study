import React, { useState } from 'react';
import styled from 'styled-components';

const TodoInputStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20%;
  margin: 50px 0;
`;

const StyledInput = styled.input`
  width: 80%;     
  font-size: 20px;    
  border-radius: 5px;
  padding: 20px 10px;
`;

function TodoInput({ onAdd }) {
  const [input, setInput] = useState(''); // 함수명 수정

  // 입력 필드 값 변경 처리
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  // 엔터키를 눌렀을 때 항목 추가
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      onAdd(input);
      setInput('');  // 입력 필드 초기화
    }
  };

  return (
    <TodoInputStyle>
      <StyledInput
        type="text"
        placeholder="UMC 스터디 계획을 작성해보세요!"
        value={input}
        onChange={handleChange}  // 이벤트 핸들러 수정
        onKeyDown={handleKeyPress}  // onKeyPress 이벤트 추가
      />
    </TodoInputStyle>
  );
}

export default TodoInput;
