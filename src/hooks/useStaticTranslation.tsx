import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale, file }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [file])),
  },
});
