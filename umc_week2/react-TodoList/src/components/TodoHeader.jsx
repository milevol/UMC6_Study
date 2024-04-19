import React from 'react'
import styled from 'styled-components'

const TodoHeaderStyle = styled.div`
display: flex;
justify-content: center;
`
const Horizon = styled.hr`
margin: 0 20%;
border: none;
height: 1px;
background: rgb(214, 224, 239);
`

function TodoHeader() {
    return(
        <>
        <TodoHeaderStyle>
            <h1>UMC Study Plan</h1>
        </TodoHeaderStyle>
        <Horizon/>
        </>
    )
}

export default TodoHeader