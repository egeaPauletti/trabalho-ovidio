import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function BackButton() {
  return (
    <div className="absolute top-10 left-10 max-sm:top-5 max-sm:left-5">
      <Link to={"/"}>
        <Button text="Voltar" icon={<MdArrowBack />} isFilled />
      </Link>
    </div>
  )
}
