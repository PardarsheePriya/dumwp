// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eojHsTxh2CznYQUhCcvLfa
// Component: qJYR5wLO6ptv
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: eojHsTxh2CznYQUhCcvLfa/projectcss
import sty from "./PlasmicAdditionalSeoData.module.css"; // plasmic-import: qJYR5wLO6ptv/css

createPlasmicElementProxy;

export const PlasmicAdditionalSeoData__VariantProps = new Array();

export const PlasmicAdditionalSeoData__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAdditionalSeoData__RenderFunc(props) {
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
    <Embed
      data-plasmic-name={"overrideHead"}
      data-plasmic-override={overrides.overrideHead}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.overrideHead
      )}
      code={
        '<script>\r\n    var head = document.head;\r\n\r\n    // Links\r\n    var links = [\r\n        { rel: "preconnect", href: "https://fonts.googleapis.com" },\r\n        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },\r\n        { href: "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap", rel: "stylesheet" },\r\n        { rel: "apple-touch-icon", sizes: "180x180", href: "https://dummywp.com/assets/images/apple-touch-icon.png" },\r\n        { rel: "icon", type: "image/png", sizes: "32x32", href: "https://dummywp.com/assets/images/favicon-32x32.png" },\r\n        { rel: "icon", type: "image/png", sizes: "16x16", href: "https://dummywp.com/assets/images/favicon-16x16.png" },\r\n        // { rel: "mask-icon", href: "/assets/images/safari-pinned-tab.svg", color: "#5bbad5" },\r\n        // { rel: "manifest", href: "/assets/site.webmanifest" },\r\n        // { rel: "stylesheet", href: "/assets/css/style.css" },\r\n        // { rel: "stylesheet", href: "make-it-pretty.min.css" }\r\n    ];\r\n\r\n    links.forEach(linkData => {\r\n        var link = document.createElement("link");\r\n        Object.assign(link, linkData);\r\n        head.appendChild(link);\r\n    });\r\n\r\n    // Meta tags\r\n    var metas = [\r\n        { name: "msapplication-TileColor", content: "#da532c" },\r\n        { name: "theme-color", content: "#ffffff" }\r\n    ];\r\n\r\n    metas.forEach(metaData => {\r\n        var meta = document.createElement("meta");\r\n        Object.assign(meta, metaData);\r\n        head.appendChild(meta);\r\n    });\r\n\r\n    // Script tags\r\n    var scripts = [\r\n        { src: "https://www.googletagmanager.com/gtag/js?id=G-8CBSSNK6FZ&l=dataLayer&cx=c", async: true, type: "text/javascript" },\r\n        // { src: "https://www.gstatic.com/recaptcha/releases/-ZG7BC9TxCVEbzIO2m429usb/recaptcha__en.js", async: true, crossorigin: "anonymous", integrity: "sha384-gaZtYaI7oJHEOo1YO6VuoCE4iZ5fMV9mYHP0BHf+r2ttABnpWWCIkgI6ItNW4ZdO", type: "text/javascript" },\r\n        { src: "https://www.googletagmanager.com/gtm.js?id=GTM-5RLVXBF", async: true },\r\n        // { src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" },\r\n        { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" },\r\n        { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js" },\r\n        // { src: "nav.js" }\r\n    ];\r\n\r\n    scripts.forEach(scriptData => {\r\n        var script = document.createElement("script");\r\n        Object.assign(script, scriptData);\r\n        head.appendChild(script);\r\n    });\r\n\r\n    // Google Tag Manager Inline Script\r\n    var gtmScript = document.createElement("script");\r\n    gtmScript.textContent = `\r\n        (function(w, d, s, l, i) {\r\n            w[l] = w[l] || [];\r\n            w[l].push({\'gtm.start\': new Date().getTime(), event: \'gtm.js\'});\r\n            var f = d.getElementsByTagName(s)[0],\r\n                j = d.createElement(s),\r\n                dl = l != \'dataLayer\' ? \'&l=\' + l : \'\';\r\n            j.async = true;\r\n            j.src = \'https://www.googletagmanager.com/gtm.js?id=\' + i + dl;\r\n            f.parentNode.insertBefore(j, f);\r\n        })(window, document, \'script\', \'dataLayer\', \'GTM-5RLVXBF\');\r\n    `;\r\n    head.appendChild(gtmScript);\r\n\r\n    // Custom Favicon Script\r\n    var faviconLink = document.querySelector("link[rel~=\'icon\']");\r\n    if (!faviconLink) {\r\n        faviconLink = document.createElement(\'link\');\r\n        faviconLink.rel = \'icon\';\r\n        head.appendChild(faviconLink);\r\n    }\r\n    faviconLink.href = \'https://dummywp.com/assets/images/favicon-16x16.png\';\r\n</script>\r\n\r\n<style>\r\n  body{\r\n    margin:0;\r\n    padding:0;\r\n  }\r\n</style>\r\n'
      }
    />
  );
}

const PlasmicDescendants = {
  overrideHead: ["overrideHead"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAdditionalSeoData__ArgProps,
          internalVariantPropNames: PlasmicAdditionalSeoData__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAdditionalSeoData__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "overrideHead") {
    func.displayName = "PlasmicAdditionalSeoData";
  } else {
    func.displayName = `PlasmicAdditionalSeoData.${nodeName}`;
  }
  return func;
}

export const PlasmicAdditionalSeoData = Object.assign(
  // Top-level PlasmicAdditionalSeoData renders the root element
  makeNodeComponent("overrideHead"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicAdditionalSeoData
    internalVariantProps: PlasmicAdditionalSeoData__VariantProps,
    internalArgProps: PlasmicAdditionalSeoData__ArgProps
  }
);

export default PlasmicAdditionalSeoData;
/* prettier-ignore-end */