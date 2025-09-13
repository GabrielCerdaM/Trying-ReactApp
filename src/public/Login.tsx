import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Input } from "../components/Input"

export const Login = () => {
    const onClick = () => {
        alert('Clicked')
    }

    return (<>
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
            <section className="flex flex-col items-center justify-center gap-4 bg-white bg-opacity-90 shadow-xl rounded-xl border border-gray-200 w-full max-w-md p-8">
                <Heading level={1} className="text-center text-3xl font-bold text-blue-700 mb-4">
                    Iniciar sesión
                </Heading>
                <div className="w-full">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre de usuario
                    </label>
                    <Input
                        id="username"
                        name="username"
                        type="text"
                        handleOnChange={(e) => console.log(e.target.value)}
                        className="w-full"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Contraseña
                    </label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        handleOnChange={(e) => console.log(e.target.value)}
                        className="w-full"
                    />
                </div>
                <Button parentMethod={onClick} className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg py-2">
                    Ingresar
                </Button>
            </section>
        </main>

    </>)
}