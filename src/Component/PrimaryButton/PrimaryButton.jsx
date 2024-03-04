import "./Button.css";

const PrimaryButton = ({ title }) => {
  return (
    <div>
      <a href="https://www.exness.com/?utm_source=partners&ex_ol=1">
        <button className="shadow__btn">{title}</button>
      </a>
    </div>
  );
};

export default PrimaryButton;
