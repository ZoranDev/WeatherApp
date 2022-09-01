// Icons
import { FaSearch } from "react-icons/fa";

const Form = () => {
  return (
    <form className="h-full w-[300px] bg-[rgba(0,0,0,0.7)]">
      <div className="w-full flex items-center justify-between p-2 ">
        <input
          type="text"
          className="h-10 w-[230px] bg-transparent p-2 border-b-2 border-white focus:outline-none text-white text-xl capitalize"
        />
        <FaSearch className="bg-orange-400 text-neutral-100 h-10 w-10 p-3 cursor-pointer hover:bg-orange-500 hover:p-2" />
      </div>
    </form>
  );
};

export default Form;
