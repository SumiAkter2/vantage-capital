import "./Button.css";

const PrimaryButton = ({title}) => {
  return (
    <div>
      <a href="https://signup.topfx.com.sc/Registration/Main/Account?dest=live&camp=8138">
        <button className="shadow__btn">{title}</button>
      </a>
    </div>
  );
};

export default PrimaryButton;
