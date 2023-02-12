import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage = () => {
  const { t } = useTranslation("common");
  return <h1 className='font-bold text-7xl'>{t("header")}</h1>;
};

export default HomePage;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
