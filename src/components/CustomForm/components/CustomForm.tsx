import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { InputForm } from './CustomInput'
import { schema, type FormValues } from '../schema/form.schema'
import { Button } from '../../Button'


export const CustomForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schema)
    })


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    return (
        <section className='flex flex-col justify-center items-center h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col min-w-[400px] p-8 gap-4 justify-center items-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 shadow-xl rounded-xl border border-gray-200'>
                <InputForm name='name' control={control} label='Nombre' type='string' error={errors.name} />
                <InputForm name='email' control={control} label='Correo' type='email' error={errors.email} />
                <InputForm name='password' control={control} label='Contraseña' type='password' error={errors.password} />
                <InputForm name='confirmPassword' control={control} label='Confirmar Contraseña' type='password' error={errors.confirmPassword} />
                <Button type='submit' parentMethod={() => { }}>
                    Iniciar sesión
                </Button>
            </form>
        </section>

    )
}