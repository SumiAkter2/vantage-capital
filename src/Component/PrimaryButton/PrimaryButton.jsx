import "./Button.css";

const PrimaryButton = ({ title }) => {
  return (
    <div>
      <a href="https://one.exnesstrack.net/a/d2t409aa77">
        <button className="shadow__btn">{title}</button>
      </a>
    </div>
  );
};

export default PrimaryButton;
