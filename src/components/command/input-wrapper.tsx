import InputBox from "./input/input-box"
import InputButton from "./input/input-btn"
import "./input-wrapper.css"

export default function InputWrapper(){
    return(
        <>
            <div className="input-wrapper">
                <InputBox />
                <InputButton />
            </div>
        </>
    )
}