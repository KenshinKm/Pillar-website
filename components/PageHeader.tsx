import type { ReactNode } from "react";
import Eyebrow from "@/components/type/Eyebrow";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-8 max-w-3xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <SplitText text={title} />
        </h1>
        {children && (
          <Reveal delay={0.15} className="mt-6 max-w-xl text-lg text-muted md:text-xl">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
