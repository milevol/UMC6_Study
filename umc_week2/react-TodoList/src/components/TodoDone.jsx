import React from 'react'
import styled from 'styled-components'
import TodoItems from './TodoItems';
import DoneItems from './DoneItems';

const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 0 20%;
`

const FlexItem = styled.div`
flex: 1;
display: flex;
// align-items: center;
flex-direction: column;  // 요소들을 세로로 나열
margin: 0 10px;
`;

function TodoDone({items, onItemDone, doneItems, onDeleteItem}) {
  return (
    <>
    <FlexContainer>
        <FlexItem>
          <TodoItems items={items} onItemDone={onItemDone} doneItems={doneItems}/>
        </FlexItem>
        <FlexItem>
          <DoneItems items={doneItems} onDeleteItem={onDeleteItem}/>
        </FlexItem>
    </FlexContainer>
    </>
  )
    
}

export default TodoDone