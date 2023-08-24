import './style.css'

export default function CardDev(props: any) {

    // Função abaixo criada para corrigir a devolutiva que fica na base da da API que torna as skills em tipo string
    // typeof prop.tech seja igual(===) string fará o comando a seguir
    function parseListaTechs(){
        if ( typeof props.techs === "string" ) {
            return JSON.parse(props.techs)
        } else {
            return props.techs
        }
    }

    return (

        <div className="dev">
            <div className="grupo_contato">
                <img src={"http://localhost:3000/static/" + props.foto} alt="" />
                <div className="contato_dev">
                    <h3> { props.nome } </h3>
                    <p> { props.email }</p>
                </div>
            </div>
                <div className="techs">
                {
                    parseListaTechs().map((tech: string, index: number) => {
                        return <span key={index}>{tech}</span>
                    })
                }
            </div>
        </div>

    )

}
