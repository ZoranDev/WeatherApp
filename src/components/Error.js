import { ImWarning } from "react-icons/im";

const Error = ({ message }) => {
  return (
    <div className="w-full text-white mb-3 text-red-600 flex items-center justify-left">
      <ImWarning className="mr-2" /> {message}
    </div>
  );
};

export default Error;
