import {Fragment} from "react"
import "./css/interface.css"

function Interface() {
    return (
        <Fragment>
            <header className="flex">
                <div className="logo">DADOS COVID</div>
                <div className="hidden sm:block titulo-cabecalho">Dados atualizados sobre o covid-19</div>
            </header>
            <div className="container mx-auto">
                <div className="painel-geral
                                mx-auto 
                                w-9/12 md:8/12
                                flex flex-wrap justify-evenly">

                    <div className="a confirmados shrink-0	">a</div>
                    <div className="a shrink-0	">a</div>
                    <div className="a shrink-0	">a</div>
                </div>
            </div>
        </Fragment>
    )
}

export default Interface