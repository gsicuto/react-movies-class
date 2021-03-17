import React from 'react'
import { Button } from '@material-ui/core'
import  DeleteIcon  from '@material-ui/icons/Delete'


const MovieCard = (props) =>{

  return(
        <div style={MovieCardStyle}>
          <div>
            <h2>Nome: {props.title} </h2>
            <div>
            {props.hasOscars && <p>🏆</p>}
            </div>
            <p>Diretor: {props.director}</p>
          </div>
          
          <Button  variant="contained" color="secondary" onClick={props.click}>
            <DeleteIcon fontSize="large"/>
          </Button>
        </div>
      )

  
}

const MovieCardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alingItens:"center",
  border: "1px solid black",
  margin: "10px 2px",
  padding: "5px",
  borderRadius: "15px"
}

export default MovieCard