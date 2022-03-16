import { createGlobalStyle } from "styled-components";

import SpoqaThin from "../assets/fonts/Spoqa/SpoqaHanSansNeo-Thin.woff";
import SpoqaLight from "../assets/fonts/Spoqa/SpoqaHanSansNeo-Light.woff";
import SpoqaRegular from "../assets/fonts/Spoqa/SpoqaHanSansNeo-Regular.woff";
import SpoqaMedium from "../assets/fonts/Spoqa/SpoqaHanSansNeo-Medium.woff";
import SpoqaBold from "../assets/fonts/Spoqa/SpoqaHanSansNeo-Bold.woff";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Spoqa Han Sans Neo Thin";
    src: url(${SpoqaThin});
    font-size: normal;
    font-weight: 0;
  }
  
  @font-face {
    font-family: "Spoqa Han Sans Neo Light";
    src: url(${SpoqaLight});
    font-size: normal;
    font-weight: 0;
  }
  @font-face {
    font-family: "Spoqa Han Sans Neo Regular";
    src: url(${SpoqaRegular});
    font-size: normal;
    font-weight: 0;
  }
  @font-face {
    font-family: "Spoqa Han Sans Neo Medium";
    src: url(${SpoqaMedium});
    font-size: normal;
    font-weight: 0;
  }
  @font-face {
    font-family: "Spoqa Han Sans Neo Bold";
    src: url(${SpoqaBold});
    font-size: normal;
    font-weight: 0;
  }
`;
