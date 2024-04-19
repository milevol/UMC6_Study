import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
`

const ModalContainer = styled.div`
background: white;
border-radius: 8px;
padding: 20px;
`

function Modal({isOpen, onClose}) {

    if (!isOpen) return null;

    return (
        <>
        <ModalBackground>
            <ModalContainer>
                <h1>안녕하세요</h1>
                <h3>모달 내용은 어쩌고 저쩌고..</h3>
                <button onClick = {onClose}>닫기</button>
            </ModalContainer>
        </ModalBackground>
        </>
    )
}

export default Modal