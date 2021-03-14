import React,{useState} from "react"
import styled from 'styled-components'
import axios from 'axios'
import {upper} from "../utils"


const MainContainer = styled.div`
width:100vw;
height:100vh;

display:flex;
flex-direction:column;
align-items:center;
`
const ContainerHeader = styled.div`
width:100vw;
height:10vh;

display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
`
const ContainerFilter = styled.div`
`

const InputText = styled.input`
width:150px;
height:30px;
border-radius:10px;
`
const InputOrder = styled.input`
width:150px;
height:30px;
border-radius:10px;
`
const InputButton = styled.button`
width:60px;
height:35px;
border-radius:10px;
`
const ContainerResult = styled.div`
width:95vw;
height:80vh;

display:flex;
flex-direction:column;

overflow: scroll;
`
const ContainerButton = styled.div`
display:flex;
flex-direction:row;
`
export default function GetByMonth() {
    const [inputText,setText] = useState("")
    const [inputPage, setPage] = useState(1)
    const [inputNameColumn, setNameColumn] = useState('')
    const [inputOrder,setOrder] = useState("asc")
    const [inputLimit, setLimit] = useState(50)
    const [result, setResult] = useState([])


    const getListsByMonth = ()=>{
        const formatText = upper(inputText)
       
        const text = formatText
        const page = inputPage
        const nameColumn = inputNameColumn
        const order = inputOrder
        const limit = inputLimit
        
        axios.get(`http://localhost:3003/getListsByMonth?text=${text}&page=${page}&nameColumn=${nameColumn}&order=${order}&limit=${limit}`)
        .then((response)=>{
            console.log(response.data.result)
            setResult(response.data.result)
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    const nextPagination = ()=>{
        let newPage = (inputPage + 1)
        setPage(newPage)
        console.log(newPage)
        getListsByMonth()
    }    
    const lastPagination = ()=>{
        let newPage = (inputPage - 1)
        setPage(newPage)
        console.log(newPage)
        getListsByMonth()
      
    }
    
    const clear = ()=>{
        setResult([])
    }
  
  return (
    <MainContainer>
        <ContainerHeader>

            <ContainerFilter>
                    
                <InputText onChange ={(e)=>{setText(e.target.value)}} placeholder="Month"/>
                <InputOrder onChange ={(e)=>{setNameColumn(e.target.value)}} placeholder=" 'hour' or 'day' "/>
                <InputOrder onChange ={(e)=>{setOrder(e.target.value)}} placeholder="asc or desc  "/>
                <InputOrder onChange ={(e)=>{setLimit(e.target.value)}} placeholder=" limit of results "/>
                <InputButton  onClick={()=> getListsByMonth()}>Search</InputButton> 
                <InputButton  onClick={()=> clear()}>Clear</InputButton> 
                    
            </ContainerFilter>            
            
        </ContainerHeader>
       
        <ContainerResult>
            {result.map(({id, cronHD,day,hour,ip,message,month})=>{
                return(
                    <div key={id}>
                        <div>{month} {day} {ip} {cronHD} {hour} {message}</div>
                    </div>
                )
            })}

        </ContainerResult>
       
        <ContainerButton>
            {inputPage !== 1 
            && 
            <button onClick={()=> lastPagination()}>last</button>
            }
            {(result.length < inputLimit)
            ||
            <button onClick={()=> nextPagination()}>next</button>
            }
        
        </ContainerButton>
       
    </MainContainer>
  );
}

