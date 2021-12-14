import { useState } from "react"
import TextView from "./TextView"

export default function GoodMorning()
{
    const [enable,setEnable]=useState(true)

    return <>
            <h1>good Morning</h1>
            {enable  && <p>Enable true</p>}
            <button onClick={_=>setEnable(!enable)}></button>
            <TextView text="Hello World"></TextView>
    </>
}
