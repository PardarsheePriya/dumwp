// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export const ScreenContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export const useScreenVariants = createUseScreenVariants(true, {
  bp664: "(max-width:664px)",
  bp480: "(max-width:480px)",
  bp966: "(max-width:966px)",
  bp1360: "(max-width:1360px)",
});

export default ScreenContext;
/* prettier-ignore-end */
