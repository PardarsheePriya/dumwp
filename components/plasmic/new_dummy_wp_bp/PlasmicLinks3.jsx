// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: v71riRuApXUtRMoadrNkLo
// Component: 6nd_nSAFxLwI
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: v71riRuApXUtRMoadrNkLo/projectcss
import sty from "./PlasmicLinks3.module.css"; // plasmic-import: 6nd_nSAFxLwI/css

createPlasmicElementProxy;

export const PlasmicLinks3__VariantProps = new Array();

export const PlasmicLinks3__ArgProps = new Array("linkValue", "linkWrapper2");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLinks3__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"linkWrapper"}
      data-plasmic-override={overrides.linkWrapper}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.linkWrapper
      )}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__heDrM
              )}
            >
              {"\u2014"}
            </div>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__b0O7W
              )}
              component={Link}
              href={""}
              platform={"nextjs"}
            />
          </React.Fragment>
        ),

        value: args.linkWrapper2
      })}
    </Stack__>
  );
}

const PlasmicDescendants = {
  linkWrapper: ["linkWrapper"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLinks3__ArgProps,
          internalVariantPropNames: PlasmicLinks3__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLinks3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "linkWrapper") {
    func.displayName = "PlasmicLinks3";
  } else {
    func.displayName = `PlasmicLinks3.${nodeName}`;
  }
  return func;
}

export const PlasmicLinks3 = Object.assign(
  // Top-level PlasmicLinks3 renders the root element
  makeNodeComponent("linkWrapper"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicLinks3
    internalVariantProps: PlasmicLinks3__VariantProps,
    internalArgProps: PlasmicLinks3__ArgProps
  }
);

export default PlasmicLinks3;
/* prettier-ignore-end */
