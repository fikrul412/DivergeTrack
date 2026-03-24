import "./input-btn.css"
import { useCurCommands } from "../../../stores/message"
import { type Commands } from "../../../types/generic"
import axios from "axios"

const baseURL = "http://localhost:8000"
export async function SendCommands(commands:Commands) {
    if (commands && Array.isArray(commands) && commands.length > 0) {
        try {
            await axios.post(`${baseURL}/commands`, { commands })
        } catch (error) {
            console.error('Error sending commands:', error)
        }
    }
}

export default function InputButton(){
    const { commands } = useCurCommands()
    return(
        <>
            <div className="input-btn space-mono-regular" onClick={() => SendCommands(commands)}>
                &gt;_
            </div>
        </>
    )
}