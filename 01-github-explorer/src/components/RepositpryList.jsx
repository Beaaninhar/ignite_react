import { RepositpryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useEffect, useState } from "react";

// https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: "julia",
  description: "Forms in react",
  link: "https://github.com/"
}

export function RepositpryList() {
  const [repositories, setRepositories] = useState(0)

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

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