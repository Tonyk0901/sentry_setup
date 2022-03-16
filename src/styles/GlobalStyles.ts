import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    ${reset}

    body {
        letter-spacing: -0.5px;
        font-family: ${theme.font.regular}
    }

    * {
        box-sizing: border-box;
    }
`;
