import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Box = styled.div`
display:flex;
cursor:pointer;
z-index:100;
&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}
`

const play = keyframes`
0%{
    transform:scaleY(0.8);
}
50%{
    transform:scaleY(1.3);
}
100%{
    transform:scaleY(0.8);
}
`
const Line = styled.span`
// position : fixed;
bottom:0;
background: white;
border: 1px solid white;
animation: ${play} 1s ease infinite;
animation-play-state:  "running";
height: 1.5rem;
width: 4px;
margin:0 0.1rem
`

const SoundBar = () => {
    return (
        <Box>
            <Line/>
            <Line/>
            <Line/>
            <Line/>
        </Box>
    )
}

export default SoundBar