export function Post(props) {
    return (
        <div>
            <p><strong>{props.author}</strong></p>
            <p>{props.content}</p>
        </div>
    )
}
