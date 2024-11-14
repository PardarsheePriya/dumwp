// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eojHsTxh2CznYQUhCcvLfa
// Component: 09-i9Aex3saK
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicIcon as PlasmicIcon__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as pp from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: eojHsTxh2CznYQUhCcvLfa/projectcss
import sty from "./PlasmicCheckbox.module.css"; // plasmic-import: 09-i9Aex3saK/css
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: NnotYKn-ehMk/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: QHGIlMCwCVdd/icon
import SquareMinusSvgIcon from "./icons/PlasmicIcon__SquareMinusSvg"; // plasmic-import: AAMnRadjlp1F/icon

createPlasmicElementProxy;

export const PlasmicCheckbox__VariantProps = new Array(
  "noLabel",
  "isDisabled",
  "isChecked",
  "isIndeterminate"
);

export const PlasmicCheckbox__ArgProps = new Array(
  "name",
  "value",
  "aria-label",
  "aria-labelledby",
  "onChange",
  "checkLabel"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCheckbox__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          checkLabel: "Enter some text"
        },
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
        path: "noLabel",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noLabel
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "isChecked",
        type: "writable",
        variableType: "boolean",
        valueProp: "isChecked",
        onChangeProp: "onChange"
      },
      {
        path: "isIndeterminate",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isIndeterminate
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisIndeterminate]: hasVariant(
            $state,
            "isIndeterminate",
            "isIndeterminate"
          ),
          [sty.rootnoLabel]: hasVariant($state, "noLabel", "noLabel")
        }
      )}
    >
      <PlasmicIcon__
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        PlasmicIconType={
          hasVariant($state, "isIndeterminate", "isIndeterminate")
            ? SquareMinusSvgIcon
            : hasVariant($state, "isChecked", "isChecked")
            ? Icon7Icon
            : Icon6Icon
        }
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.svgisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.svgisIndeterminate]: hasVariant(
            $state,
            "isIndeterminate",
            "isIndeterminate"
          ),
          [sty.svgnoLabel]: hasVariant($state, "noLabel", "noLabel")
        })}
        role={"img"}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.checkLabel;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
    </Stack__>
  );
}

function useBehavior(props, ref) {
  return pp.useCheckbox(
    PlasmicCheckbox,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isIndeterminateVariant: {
        group: "isIndeterminate",
        variant: "isIndeterminate"
      },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "svg", "text"],
  svg: ["svg"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCheckbox__ArgProps,
          internalVariantPropNames: PlasmicCheckbox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCheckbox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCheckbox";
  } else {
    func.displayName = `PlasmicCheckbox.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckbox = Object.assign(
  // Top-level PlasmicCheckbox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicCheckbox
    internalVariantProps: PlasmicCheckbox__VariantProps,
    internalArgProps: PlasmicCheckbox__ArgProps,
    useBehavior
  }
);

export default PlasmicCheckbox;
/* prettier-ignore-end */
