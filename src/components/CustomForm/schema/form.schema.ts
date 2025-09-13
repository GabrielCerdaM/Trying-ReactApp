import { z } from 'zod'

export const schema = z.object({
    name: z.string("Este campo es requerido").min(2,"Este campo es requerido"),
    email: z.email("El email ingresado no es válido"),
    password: z.string("Este campo es requerido").min(6, "La contraseña debe de tener al menos 6 caracteres"),
    confirmPassword: z.string("Este campo es requerido").min(6, "La contraseña debe de tener al menos 6 caracteres"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas son inválidas",
    path: ["confirmPassword"]
})


export type FormValues = z.infer<typeof schema>