import "i18next";
import type common from "../../public/locales/en/common.json";
import type home from "../../public/locales/en/home.json";
import type gallery from "../../public/locales/en/gallery.json";
// import type gallery from '../../public/locales/en/gallery.json'

interface I18nNamespaces {
  common: typeof common;
  home: typeof home;
  galery: typeof gallery;
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
