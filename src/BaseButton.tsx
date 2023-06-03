import './css/baseButton.css'

interface BaseButtonProps{
    text:string 
    color:"green"|"yellow"
}

export default function BaseButton({text, color}: BaseButtonProps) {
    const colorClass = 'button--' + color

    return (
        <>
            <button className={"button" + " " + colorClass}>{text}</button>
        </>
    )
}