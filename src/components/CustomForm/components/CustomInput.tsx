import { Controller, type Control, type FieldError } from "react-hook-form";
import './CustomInput.css'
import type { FormValues } from "../schema/form.schema";

interface Props {
    name: keyof FormValues;
    control: Control<FormValues>;
    label: string;
    type?: string;
    error?: FieldError
}

export const InputForm = ({ name, control, label, type, error }: Props) => {
    return (<div className="mb-4 flex flex-col">
        <label htmlFor="name" className="mb-2 font-bold text-center block text-sm text-gray-700">{label}</label>
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                return <input id={name} type={type} {...field} value={field.value ?? ""} className={`shadow-xl form-control w-[300px] ${error ? "border-red-500" : ""} `} />
            }
            }
        />
        {error && <p className='text-start text-red-500 mt-1'>{error.message}</p>}
    </div>)
}