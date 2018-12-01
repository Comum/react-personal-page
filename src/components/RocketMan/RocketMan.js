import React from 'react'
import styled from 'styled-components'

const RocketManContainer = styled.div`
    padding-top: 20px;
`

const RocketMan = () => (
    <RocketManContainer>
        <div className="RocketManContainer">
            <div className='body'>
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div className='base'>
                    <span></span>
                    <div className='face'></div>
                </div>
            </div>
            <div className='longfazers'>
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