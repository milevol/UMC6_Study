import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.div`
margin: 5px 0;         
padding: 10px;           
border-radius: 5px;    
display: flex;
justify-content: space-between;
`
const Button = styled.button`
background: rgb(214, 224, 239);
border: none;
border-radius: 5px;
padding: 2px 5px;
cursor: pointer;
`

const Horizon = styled.hr`
border: none;
height: 1px;
background: rgb(214, 224, 239);
width: 100%;
`

const Letter = styled.h3`
text-align: center;
`

function TodoItems({items, onItemDone}) {

const TodoList = items.map((item, index) => 
    <>
     <StyledItem>
        {item}
        <Button onClick={() => onItemDone(index)}>완료</Button>
    </StyledItem>
    <Horizon/>
    </>
)

return(
    <>
   <Letter>해야할 일</Letter>
    {TodoList}
    </>
)
}

export default TodoItems