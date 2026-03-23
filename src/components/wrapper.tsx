import UI from "./ui"
import Command from "./command"
import "./wrapper.css"

export default function Wrapper(){
    return(
        <>
        <section className="wrapper">
            <Command />
            <UI />
        </section>
        </>
    )
}