import {Fragment} from "react"
import "./css/interface.css"

function Interface() {
    return (
        <Fragment>
            <header className="flex">
                <div className="logo 
                                w-4/12 sm:w-4/12 lg:w-2/12">DADOS COVID</div>
                <div className="titulo-cabecalho hidden sm:block 
                                lg:text-md sm:pt-2 lg:pt-3">
                                    Dados atualizados sobre o covid-19
                </div>
            </header>
            <div className="container mx-auto">
                <div className="painel-geral
                                mx-auto 
                                w-11/12 sm:w-7/12 md:w-6/12 lg:w-10/12
                                flex flex-wrap 
                                justify-evenly gap-y-3 gap-x-3">

                    <div className="shrink-0
                                    h-32 
                                    w-60 sm:w-72 md:w-80
                                    border rounded">a</div>
                    <div className="shrink-0
                                    h-32 
                                    w-60 sm:w-72 md:w-80
                                    border">a</div>
                    <div className="shrink-0 
                                    h-32 
                                    w-60 sm:w-72 md:w-80
                                    border">a</div>
                </div>
            </div>
        </Fragment>
    )
}

export default Interface