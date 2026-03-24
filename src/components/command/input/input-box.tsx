import "./input-box.css"
import { useCurCommands } from "../../../stores/message"

export default function InputBox(){
    const {setCommands} = useCurCommands()
    async function updateCommands(commands: string) {
        const commands_array:string[] = commands.split(" ")
        setCommands(commands_array)
    }

    return(
        <>
            <input type="text" className="input-box space-mono-regular" onChange={(e) => {
                updateCommands(e.target.value)
            }}/>
        </>
    )
}