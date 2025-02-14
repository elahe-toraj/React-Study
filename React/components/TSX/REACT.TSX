interface propsType {
    name: string;
}

function TitleElement(props; propsType) {
    return <h1>hello {props.name}</h1>
}