import React from 'react'
import styled from 'styled-components'

const RocketManContainer = styled.div`
    padding-top: 20px;
`

const RocketMan = () => (
    <RocketManContainer>
        <div className="RocketManContainer">
            <div class='body'>
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div class='base'>
                    <span></span>
                    <div class='face'></div>
                </div>
            </div>
            <div class='longfazers'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1>Loading...</h1>
        </div>
    </RocketManContainer>
)

export default RocketMan