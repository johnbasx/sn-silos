import "i18next";
import type common from "@public/locales/en/common.json";
import type home from "@public/locales/en/home.json";
import type services from "@public/locales/en/services.json";
import type about from "@public/locales/en/about.json";
import type career from "@public/locales/en/career.json";
import type error from "@public/locales/en/error.json";
import type press from "@public/locales/en/press.json";
import type contact from "@public/locales/en/contact.json";

interface I18nNamespaces {
  common: typeof common;
  home: typeof home;
  services: typeof services;
  about: typeof about;
  career: typeof career;
  error: typeof error;
  press: typeof press;
  contact: typeof contact;
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
