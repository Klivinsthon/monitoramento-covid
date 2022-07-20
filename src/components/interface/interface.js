import { Fragment } from "react"
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
                                w-11/12 sm:w-7/12 lg:w-10/12
                                flex flex-wrap justify-evenly gap-y-3 gap-x-3">

                    <div className="bloco-infos
                                    shrink-0
                                    w-60 sm:w-72 md:w-80">
                        <h1 className="titulo titulo-confirmados
                                       text-lg md:text-xl">CASOS CONFIRMADOS</h1>
                        <div className="infos-detalhadas
                                        sm:pl-4">
                            <div className="text-sm"><span>Confirmados</span></div>
                            <div className="font-black pl-1"><span>635.336.278</span></div>
                            <div className="w-6/12 text-sm">Novos casos</div>
                            <div className="font-black pl-1"><span>43.000</span></div>
                        </div>
                    </div>

                    <div className="bloco-infos
                                    shrink-0
                                    w-60 sm:w-72 md:w-80">
                        <h1 className="titulo titulo-obitos
                                       text-lg md:text-xl">CASOS CONFIRMADOS</h1>
                        <div className="infos-detalhadas
                                        sm:pl-4">
                            <div className="text-sm"><span>Confirmados</span></div>
                            <div className="font-black pl-1"><span>635.336.278</span></div>
                            <div className="flex pt-2">
                                <div className="text-sm w-6/12">Novos óbitos</div>
                                <div className="text-sm w-6/12"><span>Letalidade</span></div>
                            </div>
                            <div className="flex">
                                <div className="font-black pl-1 w-6/12"> 215</div>
                                <div className="font-black pl-1 w-6/12"><span>2,0%</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="bloco-infos
                                    shrink-0 
                                    w-60 sm:w-72 md:w-80">a</div>
                </div>
            </div>
        </Fragment>
    )
}

export default Interface