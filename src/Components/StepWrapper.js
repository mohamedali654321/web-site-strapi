import React from 'react'
import Steps from './Steps'
import styled from 'styled-components'

import './StepWrapper'

const TextWrapper=styled.div`

    width: 40%;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    z-index: 1;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top:-600px;
    right:-570px ;
   
  
   

`

const Content=styled.div`
    z-index: 1;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 45px;
    opacity: 1;
    transform: translate(0px, 0px);

`
const StepContent=styled.div`
 perspective: 1000px;
    opacity: 1;
    width: 40%;


`

const Text=styled.p`
   font-size: 17px;
    line-height: 22px;
    font-weight: 500;
    opacity: 1;
    transform: translate(0px, 0px);
    color: #f6b73e;
   

`
const Title=styled.h2`
font-size: 21px;
font-weight: 600;
line-height: 30px;
margin-top: 48px;
 display: block;
    text-align: start;
    position: relative;
    opacity: 1;
    transform: translate(0px, 0px);
    color:#1d1b84;
`
const Description=styled.p`

margin-top: 40px;
font-size: 17px;
font-weight: 400;
line-height: 28px;
color: #4e6294;
display: block;
opacity: 0;
    text-align: start;
    position: relative;
    opacity: 1;
    transform: translate(0px, 0px);

`

const Assets =styled.div`
    z-index: 10;
    position: relative;
    width: 100%;
    margin: 40px auto 0;
    right:900px ;
    top:-400px;
    
        
`

const Img=styled.img`

position: relative;
    top: 0;
    left: 0;
    width: 70%;
    height: 70%;
    object-position: center;
    object-fit: cover;
    opacity:1;
        visibility: inherit;
        transform:skewY(-3deg);
    


`
function StepWrapper() {
    return (

        <div className="slice">
            <Steps />

            <div className="stepsWrapper" >
                <div className="contentRight">
                    <div className="background">
                        <div className="imgGroup">
                            <div className="triangle" style={{ paddingBottom: "20px" }}>
                                <img src="/images/triangle.svg" style={{ width: "555px", height: "559px" }} />
                            </div>
                            <div className="dots" style={{ paddingTop: "20px", paddingLeft: "30px" }}>
                                <img src="/images/dots.svg" style={{ width: "97px", height: "30px" }} />

                            </div>





                        </div>


                    </div>


                    <TextWrapper>
                        <Content>
                        
                            <StepContent>
                               <Text>
                                   step. 1
                               </Text>
                                <Title>
                                Effortlessly create content 
                                structures that flex to your 
                                needs.
                                </Title>
                                <Description>
                                No matter which data structure is the 
                                best for your business, you can easily 
                                define models and add relations to 
                                create rich layout experiences.
                                </Description>

                            </StepContent>
                            

                        </Content>
                        <Assets>

                           <Img className="asset" src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step1-2D_aeea862f0b.svg"/>

                           </Assets>

                           



                    </TextWrapper>
                    

                </div>


            </div>

        </div>
    )
}



export default StepWrapper

