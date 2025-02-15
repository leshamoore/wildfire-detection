// import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
// import { button as buttonStyles } from "@heroui/theme";
//
// import { siteConfig } from "@/config/site.ts";
import { title, subtitle } from "@/components/primitives.ts";
// import { GithubIcon } from "@/components/icons.tsx";
import DefaultLayout from "@/layouts/default.tsx";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Find out&nbsp;</span>
          <span className={title()}>about the&nbsp;</span>
          <span className={title({ color: "violet" })}>wildfire probability&nbsp;</span>
          <br />
          <span className={title()}>
            in your region in advance.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            With our AI-powered monitoring system.
          </div>
        </div>

        {/*<div className="flex gap-3">*/}
        {/*  <Link*/}
        {/*    isExternal*/}
        {/*    className={buttonStyles({*/}
        {/*      color: "primary",*/}
        {/*      radius: "full",*/}
        {/*      variant: "shadow",*/}
        {/*    })}*/}
        {/*    href={siteConfig.links.docs}*/}
        {/*  >*/}
        {/*    Documentation*/}
        {/*  </Link>*/}
        {/*  <Link*/}
        {/*    isExternal*/}
        {/*    className={buttonStyles({ variant: "bordered", radius: "full" })}*/}
        {/*    href={siteConfig.links.github}*/}
        {/*  >*/}
        {/*    <GithubIcon size={20} />*/}
        {/*    GitHub*/}
        {/*  </Link>*/}
        {/*</div>*/}

        {/*<div className="mt-8">*/}
        {/*  <Snippet hideCopyButton hideSymbol variant="bordered">*/}
        {/*    <span>*/}
        {/*      Get started by editing{" "}*/}
        {/*      <Code color="primary">pages/index.tsx</Code>*/}
        {/*    </span>*/}
        {/*  </Snippet>*/}
        {/*</div>*/}
      </section>
    </DefaultLayout>
  );
}
