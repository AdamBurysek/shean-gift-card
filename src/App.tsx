import { useEffect, useState } from "react";
import GiftCard from "./components/giftCard";
import Modal from "./components/modal";
import { generateRandomGiftCode } from "./functions/generateRandomGiftCode";

function App() {
  const [email, setEmail] = useState<string>("");
  const [randomGiftCode, setRandomGiftCode] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setRandomGiftCode(generateRandomGiftCode());
  }, []);

  return (
    <>
      <section id="gift-card">
        <div className={showModal ? "flex_box blur" : "flex_box"}>
          <GiftCard
            setShowModal={setShowModal}
            email={email}
            setEmail={setEmail}
            randomGiftCode={randomGiftCode}
          ></GiftCard>
        </div>
        <div className="flex_box">
          {showModal ? (
            <Modal
              setShowModal={setShowModal}
              showModal={showModal}
              email={email}
              setEmail={setEmail}
              randomGiftCode={randomGiftCode}
            ></Modal>
          ) : null}
        </div>
      </section>
    </>
  );
}

export default App;
