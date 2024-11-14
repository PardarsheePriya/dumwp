// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eojHsTxh2CznYQUhCcvLfa
// Component: yEKu53hacq0l
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import AdditionalSeoData from "../../AdditionalSeoData"; // plasmic-import: qJYR5wLO6ptv/component
import DummyWpContainer from "../../DummyWpContainer"; // plasmic-import: LgX6if24X2q3/component
import ChallengesBar from "../../ChallengesBar"; // plasmic-import: Dz5_oQOY5Jgt/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import FeaturesComponent3 from "../../FeaturesComponent3"; // plasmic-import: g83b7jikKEoj/component
import Card from "../../Card"; // plasmic-import: udIG5vtaNYEp/component
import DummyWpFooter from "../../DummyWpFooter"; // plasmic-import: Ou4WpcxmNsUe/component
import { useScreenVariants as useScreenVariantsngPcOWd604O } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: NGPcOWd-604O/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: eojHsTxh2CznYQUhCcvLfa/projectcss
import sty from "./PlasmicForAuthors.module.css"; // plasmic-import: yEKu53hacq0l/css
import ButtonArrowSvgIcon from "./icons/PlasmicIcon__ButtonArrowSvg"; // plasmic-import: i4bSa-U_DSIK/icon

createPlasmicElementProxy;

export const PlasmicForAuthors__VariantProps = new Array();

export const PlasmicForAuthors__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicForAuthors__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsngPcOWd604O()
  });
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicForAuthors.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicForAuthors.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicForAuthors.pageMetadata.title}
        />

        <meta
          key="description"
          name="description"
          content={PlasmicForAuthors.pageMetadata.description}
        />

        <meta
          key="og:description"
          property="og:description"
          content={PlasmicForAuthors.pageMetadata.description}
        />

        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicForAuthors.pageMetadata.description}
        />

        <meta
          key="og:image"
          property="og:image"
          content={PlasmicForAuthors.pageMetadata.ogImageSrc}
        />

        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicForAuthors.pageMetadata.ogImageSrc}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
        >
          <AdditionalSeoData
            data-plasmic-name={"additionalSeoData"}
            data-plasmic-override={overrides.additionalSeoData}
            className={classNames("__wab_instance", sty.additionalSeoData)}
          />

          <DummyWpContainer
            data-plasmic-name={"dummyWpContainer"}
            data-plasmic-override={overrides.dummyWpContainer}
            className={classNames("__wab_instance", sty.dummyWpContainer)}
            querydata={(() => {
              try {
                return $ctx.query.item;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
          />

          <div
            data-plasmic-name={"authorsContents"}
            data-plasmic-override={overrides.authorsContents}
            className={classNames(projectcss.all, sty.authorsContents)}
          >
            <section
              data-plasmic-name={"authorHeadingSection"}
              data-plasmic-override={overrides.authorHeadingSection}
              className={classNames(projectcss.all, sty.authorHeadingSection)}
            >
              <div
                data-plasmic-name={"headingContent"}
                data-plasmic-override={overrides.headingContent}
                className={classNames(projectcss.all, sty.headingContent)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__anTa1)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox___6N1Ht)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pclOf,
                        hasVariant(globalVariants, "screen", "bp862")
                          ? "clamp-subHeading"
                          : undefined
                      )}
                    >
                      {"Boost Your Sales by 20%"}
                    </div>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xx0Nl,
                      hasVariant(globalVariants, "screen", "bp862")
                        ? "clamp-heading"
                        : undefined
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return (() => {
                            return $ctx.query.item === "Digits Plugin"
                              ? "Secure Demos for your \nDigits Plugin!"
                              : "Secure Demos for Your \nThemes and Plugins!";
                          })();
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Boost Your Sales by 20%";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___63Xx)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ynuZ3,
                        hasVariant(globalVariants, "screen", "bp862")
                          ? "clamp-subHeading"
                          : undefined
                      )}
                    >
                      {"Schedule Your Demo"}
                    </div>
                    <ButtonArrowSvgIcon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(projectcss.all, sty.svg)}
                      role={"img"}
                    />
                  </Stack__>
                </Stack__>
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"80%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/new_dummy_wp_version/images/wordpressSvg.svg",
                    fullWidth: 683.468,
                    fullHeight: 475.329,
                    aspectRatio: 1.437884
                  }}
                />
              </div>
            </section>
            <section
              data-plasmic-name={"challengesSection"}
              data-plasmic-override={overrides.challengesSection}
              className={classNames(projectcss.all, sty.challengesSection)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"challengesContents"}
                data-plasmic-override={overrides.challengesContents}
                hasGap={true}
                className={classNames(projectcss.all, sty.challengesContents)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nxTaf,
                    hasVariant(globalVariants, "screen", "bp862")
                      ? "challenge-heading"
                      : undefined
                  )}
                >
                  {"Common Challenges Plugin Developers Face"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__olbyB
                  )}
                >
                  {
                    "As WordPress plugin developers ourselves, we've faced every challenge you're experiencing today. From battling code theft to managing demo environments, these issues directly impact your bottom line. After helping thousands of developers overcome these same hurdles, we built DummyWP to transform these common struggles into your competitive advantage."
                  }
                </div>
                <div
                  data-plasmic-name={"challengesContainer"}
                  data-plasmic-override={overrides.challengesContainer}
                  className={classNames(
                    projectcss.all,
                    sty.challengesContainer
                  )}
                >
                  <ChallengesBar
                    challengeHeading={"Code Security"}
                    challengeIcon={{
                      src: "/plasmic/new_dummy_wp_version/images/group3651Svg.svg",
                      fullWidth: 49.403,
                      fullHeight: 50.65,
                      aspectRatio: 0.97538
                    }}
                    challengeText={
                      "Our NullShield\u2122 Technology ensures complete code protection."
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.challengesBar__gfaUs
                    )}
                  />

                  <ChallengesBar
                    challengeHeading={"Resource Drain"}
                    challengeIcon={{
                      src: "/plasmic/new_dummy_wp_version/images/group3652Svg.svg",
                      fullWidth: 49.403,
                      fullHeight: 48,
                      aspectRatio: 1.029229
                    }}
                    challengeText={
                      "Zero maintenance with our fully automated demo environment management."
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.challengesBar__gg8Vc
                    )}
                  />

                  <ChallengesBar
                    challengeHeading={"Limited Testing"}
                    challengeIcon={{
                      src: "/plasmic/new_dummy_wp_version/images/group3653Svg.svg",
                      fullWidth: 48.207,
                      fullHeight: 50.65,
                      aspectRatio: 0.951767
                    }}
                    challengeText={
                      "Test with any plugin combination in our secure, containerized environment."
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.challengesBar__bQzRf
                    )}
                  />

                  <ChallengesBar
                    challengeHeading={"Lost Sales"}
                    challengeIcon={{
                      src: "/plasmic/new_dummy_wp_version/images/group3654Svg.svg",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: 1
                    }}
                    challengeText={
                      "Boost confidence and sales with risk-free, full-featured testing environments."
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.challengesBar__sNpSo
                    )}
                  />
                </div>
              </Stack__>
            </section>
            <section
              data-plasmic-name={"featuresSection"}
              data-plasmic-override={overrides.featuresSection}
              className={classNames(
                projectcss.all,
                sty.featuresSection,
                "scroll_container"
              )}
            >
              <Embed
                data-plasmic-name={"featureEmbed"}
                data-plasmic-override={overrides.featureEmbed}
                className={classNames("__wab_instance", sty.featureEmbed)}
                code={
                  hasVariant(globalVariants, "screen", "bp1024")
                    ? "    <script>\r\n\r\n        var stickySections = [...document.querySelectorAll('.sticky_wrap')]\r\n\r\n        window.addEventListener('scroll', (e) => {\r\n            for (let i = 0; i < stickySections.length; i++) {\r\n                transform(stickySections[i])\r\n            }\r\n        })\r\n\r\n        function transform(section) {\r\n\r\n            const offsetTop = section.parentElement.offsetTop + 200;\r\n\r\n            const scrollSection = section.querySelector('.horizontal_scroll')\r\n\r\n            let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;\r\n\r\n            percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage;\r\n\r\n            scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`\r\n        }\r\n    </script>\r\n"
                    : "    <script>\r\n\r\n        var stickySections = [...document.querySelectorAll('.sticky_wrap')]\r\n\r\n        window.addEventListener('scroll', (e) => {\r\n            for (let i = 0; i < stickySections.length; i++) {\r\n                transform(stickySections[i])\r\n            }\r\n        })\r\n\r\n        function transform(section) {\r\n\r\n            const offsetTop = section.parentElement.offsetTop + 200;\r\n\r\n            const scrollSection = section.querySelector('.horizontal_scroll')\r\n\r\n            let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;\r\n\r\n            percentage = percentage < 0 ? 0 : percentage > 50 ? 50 : percentage;\r\n\r\n            scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`\r\n        }\r\n    </script>\r\n"
                }
              />

              <Embed
                className={classNames("__wab_instance", sty.embedHtml___9YoYe)}
                code={
                  "<style>\r\n  .sticky_wrap .__wab_flex-container.\u03c1fc{\r\n    overflow:hidden;\r\n  }\r\n</style>"
                }
              />

              <Stack__
                as={"div"}
                data-plasmic-name={"stickyWrap"}
                data-plasmic-override={overrides.stickyWrap}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  sty.stickyWrap,
                  "sticky_wrap"
                )}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gqwXs
                  )}
                >
                  {"Features"}
                </div>
                <Stack__
                  as={"div"}
                  data-plasmic-name={"horizontalScroll"}
                  data-plasmic-override={overrides.horizontalScroll}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    sty.horizontalScroll,
                    "horizontal_scroll"
                  )}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      sty.freeBox__z411D,
                      "scroll_contents"
                    )}
                  >
                    <FeaturesComponent3
                      className={classNames(
                        "__wab_instance",
                        sty.featuresComponent3__gbQyL
                      )}
                      featureHeading={"SECURITY FEATURES"}
                      featureSubHeading={"CodeVault\u2122 Protection"}
                      featureText={
                        "Our advanced security system ensures your premium code stays protected while allowing full functionality testing."
                      }
                      listLoop={[
                        "Proprietary anti-theft technology",
                        "Nullification prevention",
                        "Secure containerized environments",
                        "Real-time security monitoring"
                      ]}
                    />
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      sty.freeBox__p2Ns5,
                      "scroll_contents"
                    )}
                  >
                    <FeaturesComponent3
                      className={classNames(
                        "__wab_instance",
                        sty.featuresComponent3__dmeOi
                      )}
                      featureHeading={"USER EXPERIENCE FEATURES"}
                      featureSubHeading={"Complete Testing Freedom"}
                      featureText={
                        "Let users experience your plugin in a real-world environment with their preferred setup."
                      }
                      listLoop={[
                        "Install any compatible plugins",
                        "Test across multiple WordPress versions",
                        "Custom domain integration",
                        "Realistic testing environment"
                      ]}
                    />
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      sty.freeBox__sXNaf,
                      "scroll_contents"
                    )}
                  >
                    <FeaturesComponent3
                      className={classNames(
                        "__wab_instance",
                        sty.featuresComponent3__arci
                      )}
                      featureHeading={"MANAGEMENT FEATURES"}
                      featureSubHeading={"Effortless Integration"}
                      featureText={
                        "Start showcasing your plugins in minutes, not hours."
                      }
                      listLoop={[
                        "One-click integration",
                        "Simple embed code",
                        "Usage analytics dashboard",
                        "Customizable time limits"
                      ]}
                    />
                  </div>
                </Stack__>
              </Stack__>
            </section>
            <section
              data-plasmic-name={"planSection"}
              data-plasmic-override={overrides.planSection}
              className={classNames(
                projectcss.all,
                sty.planSection,
                "plan-section"
              )}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"planContent"}
                data-plasmic-override={overrides.planContent}
                hasGap={true}
                className={classNames(projectcss.all, sty.planContent)}
              >
                <Card
                  cardButtonText={"Get Started"}
                  cardHeading={"Starter Plan"}
                  cardSubHeading={"$100"}
                  cardText={"Best for growing authors and growth companies"}
                  className={classNames("__wab_instance", sty.card__vC9PM)}
                  listLoop={[
                    "100 active sites",
                    "NullShield\u2122 Protection",
                    "Template replication",
                    "Containerized Environment",
                    "16 MB upload limit",
                    "Install 3rd party plugin and themes",
                    "PHP version selection",
                    "WordPress version selection"
                  ]}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yeUrr
                    )}
                  >
                    {"/month"}
                  </div>
                </Card>
                <Card
                  cardButtonText={"Schedule Your Demo"}
                  cardHeading={"Enterprise"}
                  cardSubHeading={"Let's Talk"}
                  cardText={"Best for large companies and elite authors"}
                  children={null}
                  className={classNames("__wab_instance", sty.card__okkyr)}
                  listLoop={[
                    "Everything in Starter Plan",
                    "Unlimited active sites",
                    "No upload limit",
                    "Custom Domain"
                  ]}
                />
              </Stack__>
            </section>
          </div>
          <DummyWpFooter
            data-plasmic-name={"dummyWpFooter"}
            data-plasmic-override={overrides.dummyWpFooter}
            className={classNames("__wab_instance", sty.dummyWpFooter)}
          />

          <Embed
            className={classNames("__wab_instance", sty.embedHtml__tcxtf)}
            code={
              hasVariant(globalVariants, "screen", "bp420")
                ? "<style>\r\n    body{\r\n    overflow-y:visible !important;\r\n    overflow-x:hidden !important;\r\n  }\r\n\r\n  .main-container{\r\n    overflow-y:visible !important;\r\n    overflow-x:visible !important;\r\n  }\r\n\r\n  .plan-cards:nth-child(2){\r\n    background: #ffffff linear-gradient(218deg, #ffdddd -20%, #ffffff 100%) 0% 0% no-repeat padding-box;\r\n  }\r\n\r\n  /* for responsives */\r\n  .clamp-heading{\r\n    font-size:clamp(2rem, 5vw, 3.75rem);\r\n  }\r\n.plans-heading,\r\n  .challenge-heading{\r\n      font-size:clamp(1.5rem, 4vw, 1.8rem);\r\n  }\r\n\r\n\r\n  .clamp-subHeading{\r\n    font-size: clamp(1.2rem, 4vw, 1.5rem);\r\n  }\r\n\r\n  .feature-heading{\r\n    font-size:clamp(1.5rem, 4vw, 1.8rem);\r\n  }\r\n\r\n  .sec-feature-heading{\r\n    font-size:clamp(0.8rem, 4vw, 1.25rem);\r\n  }\r\n\r\n  .plans-subHeading{\r\n    font-size:clamp(2rem, 5vw, 3rem);\r\n  }\r\n\r\n  .horizontal_scroll,\r\n  .horizontal-cards{\r\n    height:630px;\r\n  }\r\n  </style>"
                : hasVariant(globalVariants, "screen", "bp480")
                ? "<style>\r\n    body{\r\n    overflow-y:visible !important;\r\n    overflow-x:hidden !important;\r\n  }\r\n\r\n  .main-container{\r\n    overflow-y:visible !important;\r\n    overflow-x:visible !important;\r\n  }\r\n\r\n  .plan-cards:nth-child(2){\r\n    background: #ffffff linear-gradient(218deg, #ffdddd -20%, #ffffff 100%) 0% 0% no-repeat padding-box;\r\n  }\r\n\r\n  /* for responsives */\r\n  .clamp-heading{\r\n    font-size:clamp(2rem, 5vw, 3.75rem);\r\n  }\r\n.plans-heading,\r\n  .challenge-heading{\r\n      font-size:clamp(1.5rem, 4vw, 1.8rem);\r\n  }\r\n\r\n\r\n  .clamp-subHeading{\r\n    font-size: clamp(1.2rem, 4vw, 1.5rem);\r\n  }\r\n\r\n  .feature-heading{\r\n    font-size:clamp(1.5rem, 4vw, 1.8rem);\r\n  }\r\n\r\n  .sec-feature-heading{\r\n    font-size:clamp(0.8rem, 4vw, 1.25rem);\r\n  }\r\n\r\n  .plans-subHeading{\r\n    font-size:clamp(2rem, 5vw, 3rem);\r\n  }\r\n\r\n  .horizontal_scroll,\r\n  .horizontal-cards{\r\n    height:600px;\r\n  }\r\n  </style>"
                : hasVariant(globalVariants, "screen", "bp506")
                ? "<style>\r\n    body{\r\n    overflow-y:visible !important;\r\n    overflow-x:hidden !important;\r\n  }\r\n\r\n  .main-container{\r\n    overflow-y:visible !important;\r\n    overflow-x:visible !important;\r\n  }\r\n\r\n  .plan-cards:nth-child(2){\r\n    background: #ffffff linear-gradient(218deg, #ffdddd -20%, #ffffff 100%) 0% 0% no-repeat padding-box;\r\n  }\r\n\r\n  /* for responsives */\r\n  .clamp-heading{\r\n    font-size:clamp(2rem, 5vw, 3.75rem);\r\n  }\r\n.plans-heading,\r\n  .challenge-heading{\r\n      font-size:clamp(1.5rem, 4vw, 1.8rem);\r\n  }\r\n\r\n\r\n  .clamp-subHeading{\r\n    font-size: clamp(1.2rem, 4vw, 1.5rem);\r\n  }\r\n\r\n  .feature-heading{\r\n    font-size:clamp(1.5rem, 4vw, 1.8rem);\r\n  }\r\n\r\n  .sec-feature-heading{\r\n    font-size:clamp(0.8rem, 4vw, 1.25rem);\r\n  }\r\n\r\n  .plans-subHeading{\r\n    font-size:clamp(2rem, 5vw, 3rem);\r\n  }\r\n\r\n  .horizontal_scroll,\r\n  .horizontal-cards{\r\n    height:600px;\r\n  }\r\n  </style>"
                : "<style>\r\n    body{\r\n    overflow-y:visible !important;\r\n    overflow-x:hidden !important;\r\n  }\r\n\r\n  .main-container{\r\n    overflow-y:visible !important;\r\n    overflow-x:visible !important;\r\n  }\r\n\r\n  .plan-cards:nth-child(2){\r\n    background: #ffffff linear-gradient(218deg, #ffdddd -20%, #ffffff 100%) 0% 0% no-repeat padding-box;\r\n  }\r\n\r\n  /* for responsives */\r\n  .clamp-heading{\r\n    font-size:clamp(2rem, 5vw, 3.75rem);\r\n  }\r\n  .plans-heading,\r\n  .challenge-heading{\r\n      font-size:clamp(1.5rem, 4vw, 1.8rem);\r\n  }\r\n\r\n\r\n  .clamp-subHeading{\r\n    font-size: clamp(1.2rem, 4vw, 1.5rem);\r\n  }\r\n\r\n  .feature-heading{\r\n    font-size:clamp(1.5rem, 4vw, 1.8rem);\r\n  }\r\n\r\n  .sec-feature-heading{\r\n    font-size:clamp(0.8rem, 4vw, 1.25rem);\r\n  }\r\n\r\n  .plans-subHeading{\r\n    font-size:clamp(2rem, 5vw, 3rem);\r\n  }\r\n\r\n  .fot_authors_button{\r\n    display:none;\r\n  }\r\n  </style>"
            }
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "additionalSeoData",
    "dummyWpContainer",
    "authorsContents",
    "authorHeadingSection",
    "headingContent",
    "svg",
    "img",
    "challengesSection",
    "challengesContents",
    "challengesContainer",
    "featuresSection",
    "featureEmbed",
    "stickyWrap",
    "horizontalScroll",
    "planSection",
    "planContent",
    "dummyWpFooter"
  ],

  additionalSeoData: ["additionalSeoData"],
  dummyWpContainer: ["dummyWpContainer"],
  authorsContents: [
    "authorsContents",
    "authorHeadingSection",
    "headingContent",
    "svg",
    "img",
    "challengesSection",
    "challengesContents",
    "challengesContainer",
    "featuresSection",
    "featureEmbed",
    "stickyWrap",
    "horizontalScroll",
    "planSection",
    "planContent"
  ],

  authorHeadingSection: [
    "authorHeadingSection",
    "headingContent",
    "svg",
    "img"
  ],

  headingContent: ["headingContent", "svg", "img"],
  svg: ["svg"],
  img: ["img"],
  challengesSection: [
    "challengesSection",
    "challengesContents",
    "challengesContainer"
  ],

  challengesContents: ["challengesContents", "challengesContainer"],
  challengesContainer: ["challengesContainer"],
  featuresSection: [
    "featuresSection",
    "featureEmbed",
    "stickyWrap",
    "horizontalScroll"
  ],

  featureEmbed: ["featureEmbed"],
  stickyWrap: ["stickyWrap", "horizontalScroll"],
  horizontalScroll: ["horizontalScroll"],
  planSection: ["planSection", "planContent"],
  planContent: ["planContent"],
  dummyWpFooter: ["dummyWpFooter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicForAuthors__ArgProps,
          internalVariantPropNames: PlasmicForAuthors__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicForAuthors__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicForAuthors";
  } else {
    func.displayName = `PlasmicForAuthors.${nodeName}`;
  }
  return func;
}

export const PlasmicForAuthors = Object.assign(
  // Top-level PlasmicForAuthors renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    additionalSeoData: makeNodeComponent("additionalSeoData"),
    dummyWpContainer: makeNodeComponent("dummyWpContainer"),
    authorsContents: makeNodeComponent("authorsContents"),
    authorHeadingSection: makeNodeComponent("authorHeadingSection"),
    headingContent: makeNodeComponent("headingContent"),
    svg: makeNodeComponent("svg"),
    img: makeNodeComponent("img"),
    challengesSection: makeNodeComponent("challengesSection"),
    challengesContents: makeNodeComponent("challengesContents"),
    challengesContainer: makeNodeComponent("challengesContainer"),
    featuresSection: makeNodeComponent("featuresSection"),
    featureEmbed: makeNodeComponent("featureEmbed"),
    stickyWrap: makeNodeComponent("stickyWrap"),
    horizontalScroll: makeNodeComponent("horizontalScroll"),
    planSection: makeNodeComponent("planSection"),
    planContent: makeNodeComponent("planContent"),
    dummyWpFooter: makeNodeComponent("dummyWpFooter"),
    // Metadata about props expected for PlasmicForAuthors
    internalVariantProps: PlasmicForAuthors__VariantProps,
    internalArgProps: PlasmicForAuthors__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "dummywp | For Authors",
      description:
        "Create free WordPress staging site where you can upload your own plugin and theme to test out things before you make it live on your main site.",
      ogImageSrc:
        "https://site-assets.plasmic.app/70bd5841dbee59b55a44fb215e176a76.png",
      canonical: ""
    }
  }
);

export default PlasmicForAuthors;
/* prettier-ignore-end */