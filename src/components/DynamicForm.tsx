import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
//Components
import Input from './Input'
import Button from './Button'
import RoundButton from './RoundButton'

interface Props {
    formData: object
    onGoBack: () => void
}

const DynamicForm: React.FC<Props> = (props) => {
    const {
        formData,
        onGoBack
    } = props

    const [showForm, setShowForm] = useState<boolean>(false)

    useEffect(() => {
        if(formData){
            initializeFormData(formData)
        } 
    }, [])

    const textRef = useRef()
    const controlsRef = useRef([])
    const showSubmitButtonRef = useRef(false)
    const submitButtonTextRef = useRef()

    const initializeFormData = (formData) => {
        textRef.current = (formData && formData.text) || null
        controlsRef.current = (formData && formData.controls) || []
        const submitButtonText = (formData && formData.submitButtonText) || null
        if(submitButtonText){
            submitButtonTextRef.current = submitButtonText
            showSubmitButtonRef.current = true
        }
        
        setShowForm(true)
    }

    const TypeSelector = (props) => {
        const type = (props && props.type) || null
        switch(type){
            case 'TEXT_INPUT': 
                return(
                    <Input />
                )
            case 'BUTTON': 
                return(
                    <div>Button</div>
                )
            default: 
                return null
        }
    }
    const onGoBackClick = () => {
        onGoBack()
    }

    return(
        <Container>
            <FormContainer>
                {
                    showForm?
                    <FloatingPadding>
                        <HeaderContainer>
                            <Header>{textRef.current}</Header>
                            <BackButtonPositioner>
                                <RoundButton onClick={() => onGoBackClick()}></RoundButton>
                            </BackButtonPositioner>
                        </HeaderContainer>
                        {
                            controlsRef.current.map((control, index) => {
                                const type = (control && control.type) || null
                                return(
                                    <div key={index}>
                                       <TypeSelector type={type}></TypeSelector> 
                                    </div>
                                )
                            })
                        }
                        {
                            showSubmitButtonRef.current?
                            <SubmitButtonContainer>
                                <Button>{submitButtonTextRef.current}</Button>
                            </SubmitButtonContainer>
                            :null
                        }
                        
                    </FloatingPadding>
                    : null
                }
            </FormContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0, .8);
    position: fixed;
    top: 0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FormContainer = styled.div`
    width: calc(100% - 50px);
    max-width: 600px;
    height: 500px; //temp
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FloatingPadding = styled.div`
    width: calc(100% - 50px);
    height: calc(100% - 50px);
    background-color: pink;
    position: relative;
`
const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Header = styled.h1`
    margin: 0;
    background-color: green;
`
const SubmitButtonContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: blue;
    position: absolute;
    bottom: 0;
    left: 0;
`
const BackButtonPositioner = styled.div`
    position: absolute;
    left: 0;
    top:0;
`
export default DynamicForm