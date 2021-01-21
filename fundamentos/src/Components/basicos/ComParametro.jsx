
import React from 'react'

export default function ComParametro(props){
    const status = props.nota >=7 ? 'Aprovado' : 'Reprovado'
    return (
    <div align="center">
        <h2>{props.titulo}</h2>
        <h3>{props.subtitulo}</h3>
        <p>Sua nota é {props.nota} e você foi {status}</p>
    </div>

        )
}