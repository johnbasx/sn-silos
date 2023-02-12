import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LoginPage = () => {
  const { t } = useTranslation("common");
  return <h1 className='text-7xl font-bold'>{t("header")}</h1>;
};

export default LoginPage;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
