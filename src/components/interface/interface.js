import {Fragment} from "react"
import "./css/interface.css"

function Interface() {
    return (
        <Fragment>
            <header className="flex">
                <div className="logo 
                                w-4/12 sm:w-3/12 lg:w-2/12">DADOS COVID</div>
                <div className="titulo-cabecalho hidden sm:block 
                                lg:text-md sm:pt-2 lg:pt-3">
                                    Dados atualizados sobre o covid-19
                </div>
            </header>
            <div className="container mx-auto">
                <div className="painel-geral
                                mx-auto 
                                w-9/12 sm:w-8/12
                                flex flex-wrap justify-evenly">

                    <div className="shrink-0
                                    h-32"></div>
                    <div className="shrink-0 
                                    h-32"></div>
                    <div className="shrink-0 
                                    h-32
                                    m-1"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Interface