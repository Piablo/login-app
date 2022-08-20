import React, { useRef, useState } from 'react'
import styled from 'styled-components'
//components

import DynamicForm from '../components/DynamicForm'

const registerFormData = {
    text: "Register",
    controls: [
        {type: 'TEXT_INPUT'},
        {type: 'TEXT_INPUT'},
    ],
    submitButtonText: 'Submit register form'
}

const loginFormData = {
    text: "Login",
    controls: [
        {type: 'TEXT_INPUT'},
        {type: 'TEXT_INPUT'},
    ],
    submitButtonText: 'Subit login form'
}

const Welcome: React.FC = () => {

    //UseState
    const [showForm, setShowForm] = useState<boolean>(false)

    //useRef
    const currentFormDataRef = useRef({})

    //Functions
    const onShowForm = (selectedForm) => {

        switch(selectedForm){
            case 'REGISTER':
                currentFormDataRef.current = registerFormData
                setShowForm(true)
                return
            case 'LOGIN':
                currentFormDataRef.current = loginFormData
                setShowForm(true)
                return
            default:
                return
        }  
    }


    return(
        <Container>
            {
                showForm?
                <DynamicForm formData={currentFormDataRef.current}></DynamicForm>
                :
                <BottomButtons>
                    <Button onClick={() => onShowForm('REGISTER')}>Register</Button>
                    <Button onClick={() => onShowForm('LOGIN')}>Login</Button>
                </BottomButtons>
                
                
                
                
            }
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: yellow;
    position: relative;
`

const Button = styled.button`

`
const BottomButtons = styled.div`
    width: 100%;
    height: 50px;
    background-color: teal;
    position: absolute;
    bottom: 0;
    left: 0;
`

export default Welcome