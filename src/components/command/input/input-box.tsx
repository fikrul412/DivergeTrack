import "./input-box.css"
import { useCurCommands } from "../../../stores/message"
import { SendCommands } from "./input-btn"

export default function InputBox(){
    const {commands, setCommands} = useCurCommands()

    async function updateCommands(commands: string) {
        const commands_array:string[] = commands.split(" ")
        setCommands(commands_array)
    }

    return(
        <>
            <input type="text" className="input-box space-mono-regular" 
            onKeyDown={
                (e) => {if(e.key == "Enter") {
                    SendCommands(commands)
                    if (e.target instanceof HTMLInputElement) {
                        e.target.value = ""
                    }
                }}
            } 
            onChange={(e) => {
                updateCommands(e.target.value)
            }}/>
        </>
    )
}