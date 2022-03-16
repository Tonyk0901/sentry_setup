import { css } from "styled-components";

import { flexAlignItemTypes, flexJustifyContentsTypes } from "./types";

const colors = {
  background: "#E5E5E5",
  border: "#DFDEDD",
  themeBlack: "#000",
  themeWhite: "#fff",
  themeGray: "#C9C8C7",
  themeBoldBlue: "#57ADF2",
  themeRed: "#E98C8C",
  themeLightRed: "#E9E1D5",
} as const;

const font = {
  thin: "Spoqa Han Sans Neo Thin",
  light: "Spoqa Han Sans Neo Light",
  regular: "Spoqa Han Sans Neo Regular",
  medium: "Spoqa Han Sans Neo Medium",
  bold: "Spoqa Han Sans Neo Bold",
} as const;

const flex = (
  justifyContents: flexJustifyContentsTypes = "center",
  alignItems: flexAlignItemTypes = "center"
) => css`
  display: flex;
  justify-content: ${justifyContents};
  align-items: ;
  align-items: ${alignItems};
`;

export const theme = {
  font,
  colors,
  flex,
};
