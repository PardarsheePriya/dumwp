// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 251 120"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        data-name={"Rectangle 219"}
        fill={"#fef5f4"}
        d={"M0 0h251v120H0z"}
      ></path>

      <path
        d={
          "M150.847 39.254a1.229 1.229 0 00-1.266-1.167c-5 .086-14.9-.75-23.277-7.792a1.228 1.228 0 00-1.6 0c-8.382 7.042-18.276 7.878-23.277 7.792a1.229 1.229 0 00-1.266 1.167c-.479 12.376-.209 28.07 5.174 35.444 5.629 7.743 17.416 14.318 20.168 15.3 2.753-1 14.539-7.571 20.168-15.3 5.383-7.374 5.653-23.068 5.174-35.444zm-14.5 14.588l-12.511 13.74a1.893 1.893 0 01-1.34.6h-.029a1.823 1.823 0 01-1.315-.566l-6.452-6.588a1.847 1.847 0 012.643-2.581l5.076 5.2 11.2-12.29a1.844 1.844 0 012.728 2.483z"
        }
        fill={"#fc573b"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
