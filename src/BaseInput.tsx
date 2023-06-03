import './css/baseInput.css'

interface BaseInputProps {
    placeholder: string 
}

export default function BaseInput({placeholder}: BaseInputProps) {
    return (
        <>
            <input type="text" className="input" placeholder={placeholder} />
        </>
    )
}