import BackButton from "./BackButtons";

export default function Back(props) {
  return (
    <>
      <div>{props.answer}</div>
      <BackButton
        index={props.index}
        setCompleted={props.setCompleted}
        corrects={props.corrects}
        setCorrects={props.setCorrects}
        kCorrects={props.kCorrects}
        setKCorrects={props.setKCorrects}
        incorrects={props.incorrects}
        setIncorrects={props.setIncorrects}
        setQOpen={props.setQOpen}
        completed={props.completed}
      />
    </>
  );
}
