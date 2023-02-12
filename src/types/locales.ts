export type Country = "US" | "IN";

export type Language = "en" | "hn";

// export type Locale<CL> = {
//   [U in keyof CL]: CL[U] extends { langs: { [x: string]: string } }
//     ? `${keyof CL[U]["langs"] & string}-${U & string}`
//     : never;
// }[keyof CL & string];

// export type invalid = Locale<{ UU: { langs: "EEE" } }>; //never;

// export type custom = Locale<{ EU: { langs: { fr: "fr" } } }>; //"fr-EU";

// export type valid = Locale<Country>; //"en-EN" | "hn-HN"

// export type Locale = `${Language}-${Country}`;
export type Locale = Language;
