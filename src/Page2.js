import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Page2 = () => {
  const { t } = useTranslation();
  
  return (
    <div className="mt-4">
      <h1 className='display-4"'>
        {t("this-is")} <strong>{t("page2")}</strong>
      </h1>
      <p className="lead">
        {t("go-to-the")}<Link to="/">{t("home-page")}</Link>
      </p>
    </div>
  );
};

export default Page2;
