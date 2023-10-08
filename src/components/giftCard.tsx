import BackGroundImage from "../images/background.png";
import SheepImage from "../images/sheep.png";
import WelcomeImage from "../images/title.png";
import { EnvelopeImage } from "../images/Icons";
import "./giftCard.css";

interface GiftCardProps {
  setShowModal: (showModal: boolean) => void;
  email: string;
  setEmail: (email: string) => void;
  randomGiftCode: string;
}

const GiftCard: React.FC<GiftCardProps> = (props) => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = e.target.value;
    props.setEmail(inputValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setShowModal(true);
  };

  return (
    <div className="gift-card">
      <img
        className="gift-background_img"
        src={BackGroundImage}
        alt="Šedé pozadí"
      />
      <img className="gift-sheep_img" src={SheepImage} alt="Shean ovečka" />
      <img
        className="gift-welcome_img"
        src={WelcomeImage}
        alt="Vítací banner"
      />
      <div className="gift-header_text_box">
        <p className="gift-header_text">
          <b>Slavíme 15. let!</b> Vyzvedněte si od nás dárek, který vám vykouzlí
          úsměv na tváři. Po zadání e-mailu se vám ozveme a domluvíme se
          společně, jak váš dárek budete chtít využít.
        </p>
        <div className="gift-form_box">
          <p className="gift-header_text gift-code_text">Váš dárkový kód je</p>
          <input
            className="gift-form_input gift-code_input"
            readOnly={true}
            value={props.randomGiftCode}
          ></input>
          <div className="gift-form_email_box">
            <form onSubmit={handleSubmit}>
              <p className="gift-header_text">
                Vyplňte e-mail{" "}
                {props.email.length === 0 ? (
                  <EnvelopeImage></EnvelopeImage>
                ) : null}
              </p>

              <input
                className="gift-form_input gift-email_input"
                type="email"
                required={true}
                placeholder="vas@email.com"
                value={props.email}
                onChange={handleEmailChange}
              ></input>
              <button type="submit" className="gift-submit_button">
                získat dárek
              </button>
            </form>
            <div className="gift-personal-data_box">
              <h6 className="gift-header_text gift-personal-data_text">
                Ochrana osobních údajů je pro nás prioritou.
                <br></br>
                {"Více informací, jak zacházíme s vašimi daty, najdete "}
                <a
                  href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                  target="_blank"
                >
                  v tomto dokumentu.
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
