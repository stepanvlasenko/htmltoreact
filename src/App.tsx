import BaseButton from "./BaseButton"
import BaseInput from "./BaseInput"

import './css/font.css'

export default function App() {
    return (
        <>
            <BaseButton text="text" color="blue"></BaseButton>
            <BaseInput placeholder="abc"></BaseInput> 
        </>
    )
}