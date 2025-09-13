interface Props {
    id: string;
    name: string;
    type: "text" | "checkbox" | "color" | "date" | "datetime" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    className:string,
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ id, name, type, className, handleOnChange }: Props) => {
    return (
        <>
            <input className={`${className} bg-gray-100 rounded border-1 border-gray-400`} id={id} name={name} type={type} onChange={handleOnChange} />
        </>
    )
}