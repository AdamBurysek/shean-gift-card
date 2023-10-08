import { useEffect, useState } from "react";
import { XmarkImage } from "../images/Icons";
import SheepImage from "../images/sheep.png";
import "./modal.css";

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
  showModal: boolean;
  email: string;
  setEmail: (email: string) => void;
  randomGiftCode: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  const [showCloseButton, setShowCloseButton] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCloseButton(true);
    }, 1000);
  }, []);

  const handleCloseModalButtonClick = () => {
    props.setShowModal(false);
    props.setEmail("");
  };

  return (
    <>
      <div className="modal-window">
        <p className="modal_text">
          <b>Gratulujeme!</b> Kód <b>{props.randomGiftCode}</b> je platný!
        </p>
        <p className="modal_text">
          Na e-mail <b>{props.email}</b> jsme vám poslali dárkovy poukaz v
          hodnotě <b>1000 Kč.</b>
        </p>
        <button
          className={
            showCloseButton
              ? "modal-close_button"
              : "modal-close_button modal-close_button_hide"
          }
          onClick={handleCloseModalButtonClick}
        >
          <XmarkImage></XmarkImage>
        </button>
        <img className="modal-sheep_img" src={SheepImage} alt="Shean ovečka" />
      </div>
      <div className="modal-background"></div>
    </>
  );
};

export default Modal;
