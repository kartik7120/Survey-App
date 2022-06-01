function PollAfterSubmit(props) {
  return (
    <>
      {props.options.map((option, index) => {
        return (
          <div>
            {option} <span>{props.votes[index]}</span>
          </div>
        );
      })}
    </>
  );
}
export default PollAfterSubmit;
