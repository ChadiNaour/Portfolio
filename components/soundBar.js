import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import music from "../public/music.mp3"

const Box = styled.div`
display:flex;
cursor:pointer;
position:fixed;
// background-color: red;
// left:8rem;
// top:3rem;
// z-index:100;
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
background: white;
border: 1px solid white;
animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1.7rem;
width: 3.5px;
margin:0 0.11rem;
@media (max-width: 768px) {
    height: 1.4rem;
    width: 3px;
    margin: 0 0.1rem
}
`

const SoundBar = () => {
    const [click, setClick] = useState(false);
    const ref = useRef(null);

    const handleClick = () => {
        setClick(!click);

        if (!click) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }
    return (
        <Box onClick={() => handleClick()}>
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />


            <audio src={music} ref={ref} loop />
        </Box>
    )
}

export default SoundBar