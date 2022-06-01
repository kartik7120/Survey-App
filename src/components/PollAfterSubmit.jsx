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
          >
            <div
              style={{
                backgroundColor: "#4b5256",
                margin: "1em",
                color: "whitesmoke",
              }}
            >
              {option} <span>{props.votes[index]}</span>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
export default PollAfterSubmit;
