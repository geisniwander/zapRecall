import BackButton from "./BackButtons";

export default function Back(props){
    return(
        <>
        <div>{props.answer}</div>
        <BackButton/>
        </>
    );
}