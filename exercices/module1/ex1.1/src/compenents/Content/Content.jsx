
import Part from "../Part/Part";

// eslint-disable-next-line react/prop-types
const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
    return (
        <div>
        <Part name={part1} number={exercises1} />
        <Part name={part2} number={exercises2} />
        <Part name={part3} number={exercises3} />
       
      </div>
    );
  };
  
  export default Content;