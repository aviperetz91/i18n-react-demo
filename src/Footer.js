import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <button
        onClick={changeLanguage}
        value="en"
        className="btn btn-primary mx-2"
      >
        English
      </button>
      <button
        onClick={changeLanguage}
        value="he"
        className="btn btn-secondary mx-2"
      >
        עברית
      </button>
    </div>
  );
};

export default Footer;
