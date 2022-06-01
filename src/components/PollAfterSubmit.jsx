import { Container } from "@mui/material";
import { motion } from "framer-motion";
function PollAfterSubmit(props) {
  const variants = {
    hover: {
      scale: 1.05,
    },
  };

  const totalVotes = props.votes.reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );
  return (
    <>
      <Container maxWidth="xl">
        {props.options.map((option, index) => {
          return (
            <motion.div
              animate={{ scale: 1 }}
              variants={variants}
              transition={{ duration: 0.4 }}
              whileHover="hover"
              layout
            >
              <div className="poll-after-submit-option">
                <div className="indivisual-poll">
                  <div>{option}</div> <div>{props.votes[index]}</div>
                </div>
                <motion.div
                  className="poll-fill-in"
                  animate={{
                    width: `${props.votes[index]}%`,
                  }}
                  layout
                  transition={{ delay: 0.5, type: "tween" }}
                ></motion.div>
              </div>
            </motion.div>
          );
        })}
        <span className="totalVotes">
          <span className="voteNumber">{totalVotes}</span> Votes
        </span>
      </Container>
    </>
  );
}
export default PollAfterSubmit;
