const nomeRepositorio = "ana"

export function RepositpryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <strong>{nomeRepositorio}</strong>
                    <p>Forms in react</p>

                    <a href="">
                      Acessar repositório
                    </a>
                </li>

                <li>
                    <strong>unform</strong>
                    <p>Forms in react</p>

                    <a href="">
                      Acessar repositório
                    </a>
                </li>
            </ul>
        </section>
    )
}