import useCotizador from "../hooks/useCotizador"
import Formulario from "./Formulario"
import Spinner from '../components/Spinner'
import Resultado from "./Resultado"




const AppSeguro = () => {

    const { resultado, cargando } = useCotizador()
    return (
        <>

            <header className="my-10">
                <h1 className="text-white text-center text-4xl text-focus-in">Cotizador de Seguro de Autos</h1>

                <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10 mt-5">
                    <Formulario />
                    {cargando ? <Spinner/> : <Resultado/>}
                </main>
            </header>
        </>
    )
}

export default AppSeguro