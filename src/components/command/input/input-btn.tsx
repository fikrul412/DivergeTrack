import "./input-btn.css"
import { useCurCommands } from "../../../stores/message"
import { baseURL } from "../../../../server/src/index"
import axios from "axios"

export default function InputButton(){
    const {commands} = useCurCommands()
    async function SendCommands() {
        axios.post(baseURL, commands)
    }
    return(
        <>
            <div className="input-btn space-mono-regular" onClick={SendCommands}>
                &gt;_
            </div>
        </>
    )
}