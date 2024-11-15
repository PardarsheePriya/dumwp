// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eojHsTxh2CznYQUhCcvLfa
// Component: a4iA7-UlTR9y
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: eojHsTxh2CznYQUhCcvLfa/projectcss
import sty from "./PlasmicSliderGrid.module.css"; // plasmic-import: a4iA7-UlTR9y/css

createPlasmicElementProxy;

export const PlasmicSliderGrid__VariantProps = new Array("toggleMenuVarient");

export const PlasmicSliderGrid__ArgProps = new Array("children");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSliderGrid__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "toggleMenuVarient",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.toggleMenuVarient
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.roottoggleMenuVarient]: hasVariant(
            $state,
            "toggleMenuVarient",
            "toggleMenuVarient"
          )
        }
      )}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <div
            className={classNames(projectcss.all, sty.freeBox__idDwu, "slider")}
          />
        ),

        value: args.children
      })}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSliderGrid__ArgProps,
          internalVariantPropNames: PlasmicSliderGrid__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSliderGrid__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSliderGrid";
  } else {
    func.displayName = `PlasmicSliderGrid.${nodeName}`;
  }
  return func;
}

export const PlasmicSliderGrid = Object.assign(
  // Top-level PlasmicSliderGrid renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicSliderGrid
    internalVariantProps: PlasmicSliderGrid__VariantProps,
    internalArgProps: PlasmicSliderGrid__ArgProps
  }
);

export default PlasmicSliderGrid;
/* prettier-ignore-end */
