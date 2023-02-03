import React from "react";

interface iProps{
    name: string,
    age:number,
    hobbies?:string[],
    aa:'1'|'2'
}
const Test:React.FC<iProps>=(props)=>{
    return <div>{`${props.name}, ${props.age}, ${props.hobbies?.length}`}</div>
}
export default Test