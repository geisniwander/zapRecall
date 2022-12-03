import BackButton from "./BackButtons";

export default function Back({
  answer,
  index,
  setCompleted,
  corrects,
  setCorrects,
  kCorrects,
  setKCorrects,
  incorrects,
  setIncorrects,
  setQOpen,
  completed,
}) {
  return (
    <>
      <div>{answer}</div>
      <BackButton
        index={index}
        setCompleted={setCompleted}
        corrects={corrects}
        setCorrects={setCorrects}
        kCorrects={kCorrects}
        setKCorrects={setKCorrects}
        incorrects={incorrects}
        setIncorrects={setIncorrects}
        setQOpen={setQOpen}
        completed={completed}
      />
    </>
  );
}
