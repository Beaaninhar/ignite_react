export function RepositpryItem(props) {
    return (
        <li>
        <strong>{props.repository?.name ?? 'Outros'}</strong>
        <p>{props.repository.description}</p>

        <a href={props.repository.link}>
            Acessar repositório
        </a>
    </li>
    )
}