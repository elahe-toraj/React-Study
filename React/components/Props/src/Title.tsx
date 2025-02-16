export default function Title(props: { collegeType: string}) {
    return (
        <h1 className="text-red" onClick={() => alert("welcome to my page!")}>
            {props.collegeType === "react" ? "React" : "Front-end"} College
        </h1>
    );
}