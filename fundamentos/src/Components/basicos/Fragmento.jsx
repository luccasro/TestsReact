
import React from 'react'
import Button from '@material-ui/core/Button'



export default function Fragmento(props){
    return (
    <React.Fragment>
        <h2>Fragmento</h2>
        <p className="lbl">Descrição do Fragmento</p>
        <div align="center">
        <Button variant="contained" color="primary">
      Hello World
    </Button>
    </div>
    </React.Fragment>

        )
}