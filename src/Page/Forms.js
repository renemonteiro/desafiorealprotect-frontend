import { Button, FormHelperText, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
`
const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;

`


export default function Forms(){

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log( name, surname); 
    }

    return(
       <Container>
           <Form  onSubmit={handleSubmit} >
               
                <TextField required id="standard" label="Name" autoFocus  onChange={ e =>setName(e.target.value)} />
               
                <TextField  required id="standard-basic" label="Surname"  onChange={ e =>setSurname(e.target.value)}/>
                
                <Button type="submit" variant="contained" color="secondary">
                    Secondary
                </Button>

                <FormHelperText id="my-helper-text">We'll never share your name.</FormHelperText>
           </Form>
       </Container>
    )
}