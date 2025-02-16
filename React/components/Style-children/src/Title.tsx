export default function Title({collegeType} :{collegeType: string}) {
    return (
        <h1 className="text-red" onClick={() => alert("welcome to my page!")}>
            {collegeType === "react" ? "React" : "Front-end"} College
        </h1>
    );
}