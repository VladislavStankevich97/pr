import React from 'react'
import { mok } from './mok'
import "@fortawesome/fontawesome-free/css/all.min.css";
interface Props { }

function Templates(props: Props) {
    return (
        <>
             Шаблоны
        <div style={{width:'100%', height:' calc(100vh - 406px)', overflow:'auto'}}>
            {mok.map(item=><div style={
                {   
                    display:'flex', flexDirection:'row', justifyContent:'space-between',
                    backgroundColor: 'white',
                    borderRadius: 30,
                    padding: 15,
                    margin: 10,
                    boxShadow: '3px 3px 12px 0px rgb(0 0 0 / 60%)'
                }
            }><div style={{}}>{item.name}</div><div><i className="fas fa-edit" style={{color:'rgb(71, 86, 105)'}}></i> <i className="far fa-eye" style={{    marginRight: 6,color:'rgb(71, 86, 105)'}}></i><i className="fas fa-trash-alt" style={{color:'rgb(71, 86, 105)'}}></i></div></div>)}
        </div>
        </>
    )
}

export default Templates
