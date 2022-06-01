import { motion } from "framer-motion";
function PollAfterSubmit(props) {
  const variants = {
    hover: {
      scale: 1.1,
    },
  };
  return (
    <>
      {props.options.map((option, index) => {
        return (
          <motion.div
            animate={{ scale: 1 }}
            variants={variants}
            transition={{ duration: 0.5 }}
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
                  width: `${40}%`,
                }}
                layout
                transition={{ delay: 1, type: "tween" }}
              ></motion.div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
export default PollAfterSubmit;
