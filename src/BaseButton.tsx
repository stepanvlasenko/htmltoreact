import './css/baseButton.css'

export default function BaseButton({text, color}) {
    const colorClass = 'button--' + color

    return (
        <>
            <button className={"button" + " " + colorClass}>{text}</button>
        </>
    )
}