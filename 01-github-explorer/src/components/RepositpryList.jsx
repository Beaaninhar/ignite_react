import { RepositpryItem } from "./RepositoryItem";

const repository = {
  name: "julia",
  description: "Forms in react",
  link: "https://github.com/"
}

export function RepositpryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
              <RepositpryItem repository={repository}/>
              <RepositpryItem repository={repository}/>
            </ul>
        </section>
    )
}