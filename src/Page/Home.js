import React, { useState } from "react"
import GetByMonth from './GetByMonth'
import GetByQuery from './GetByQuery'
import styled from 'styled-components'




const ContainerHome = styled.div`
width:100vw;
height:100vh;

display:flex;
flex-direction:column;
align-items:center;
`

const Header = styled.header`
display:flex;
flex-direction:row;
align-items:center;
height:10vh;
`
export default function Home() {
    const [choosePage, setPage] = useState(true)
    const changePageMonth = ()=>{
        setPage(true)
    }
    const changePageQuery = ()=>{
        setPage(false)
    }

    
  return (
    <ContainerHome>
        <Header>
            <button onClick={changePageMonth}>Search for Month results</button>
            <button onClick={changePageQuery}>Get Lists</button>
        </Header>
        {choosePage ? <GetByMonth/> : <GetByQuery/>}
    
    </ContainerHome>
  );
}

