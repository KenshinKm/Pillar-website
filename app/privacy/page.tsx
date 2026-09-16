import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PILLAR collects, uses, and protects information from visitors and clients, including data collected through Google Ads and our contact form.",
};

const LAST_UPDATED = "September 16, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader eyebrow="Legal" title="Privacy Policy">
          Last updated {LAST_UPDATED}. This page explains what information we
          collect, how we use it, and the choices you have.
        </PageHeader>

        <section className="bg-bg py-16 md:py-20">
          <div className="mx-auto max-w-[900px] px-6 md:px-10 lg:px-16">
            <div className="flex flex-col gap-14">
              <Block title="Who We Are">
                <p>
                  PILLAR is a web development and SEO agency. This policy
                  applies to visitors of pillarwebagency.com and to
                  prospective and current clients who share information with
                  us through this site.
                </p>
              </Block>

              <Block title="Information We Collect">
                <p>
                  When you submit our contact form, we collect the
                  information you provide, including your name, email
                  address, and any details you share about your business or
                  project. We do not require this information to browse the
                  site, only to reach out to us.
                </p>
                <p>
                  We also collect some information automatically when you
                  visit the site, such as your approximate location, device
                  and browser type, the pages you view, and how you arrived
                  at the site. This is standard information collected by most
                  websites and is not tied to your name unless you also
                  submit our contact form.
                </p>
              </Block>

              <Block title="Google Ads and Analytics">
                <p>
                  We use Google Ads conversion tracking to understand how
                  people find this site and whether our advertising is
                  working. This tool uses cookies and similar technology to
                  record when someone who clicked one of our ads later
                  submits our contact form. It does not give us access to
                  your personal accounts or personally identify you beyond
                  what you voluntarily submit.
                </p>
                <p>
                  Google may use the data collected through this tracking to
                  improve its own advertising products, in accordance with
                  Google&rsquo;s own privacy policy. You can control how
                  Google uses this data through Google&rsquo;s Ad Settings,
                  and you can block cookies entirely through your browser
                  settings.
                </p>
              </Block>

              <Block title="How We Use Information">
                <p>
                  We use the information you submit to respond to your
                  inquiry, discuss your project, and, if we work together, to
                  deliver our services. We use the automatically collected
                  browsing information to understand how visitors use the
                  site and to measure the performance of our advertising.
                </p>
                <p>
                  We do not sell your information to third parties. We do not
                  use your information for purposes beyond what is described
                  in this policy without asking you first.
                </p>
              </Block>

              <Block title="Third Party Services">
                <p>
                  We use Resend to deliver contact form submissions to our
                  email. We use Google Ads and related Google measurement
                  tools as described above. These providers process
                  information on our behalf and are bound by their own
                  privacy and security practices.
                </p>
              </Block>

              <Block title="Business Information">
                <p>
                  If you are a client or prospective client, any business
                  details you share with us, such as your company name,
                  services, service area, or marketing goals, are used only
                  to scope, deliver, and improve the work we do for you. We
                  do not share this information with other clients or
                  outside parties without your permission.
                </p>
              </Block>

              <Block title="Data Retention">
                <p>
                  We keep contact form submissions and client project
                  information for as long as reasonably necessary to respond
                  to your inquiry or deliver our services, and afterward for
                  our own business records. You can request that we delete
                  your information at any time by emailing us.
                </p>
              </Block>

              <Block title="Your Choices">
                <p>
                  You can opt out of Google Ads personalization through
                  Google&rsquo;s Ad Settings, and you can disable cookies
                  through your browser. You can also email us at any time to
                  ask what information we have about you, to correct it, or
                  to have it deleted.
                </p>
              </Block>

              <Block title="Data Security">
                <p>
                  We take reasonable steps to protect the information you
                  share with us, but no method of transmission or storage is
                  completely secure. We recommend not sending sensitive
                  personal information, such as passwords or financial
                  details, through our contact form.
                </p>
              </Block>

              <Block title="Children's Privacy">
                <p>
                  This site is intended for business owners and is not
                  directed at children. We do not knowingly collect
                  information from anyone under 13.
                </p>
              </Block>

              <Block title="Changes to This Policy">
                <p>
                  We may update this policy from time to time as our
                  practices or the tools we use change. We will update the
                  date at the top of this page when we do.
                </p>
              </Block>

              <Block title="Contact Us">
                <p>
                  If you have questions about this policy or want to request,
                  correct, or delete your information, email us at{" "}
                  <a
                    href="mailto:kenshin@pillarwebagency.com"
                    className="text-ink underline hover:text-accent"
                  >
                    kenshin@pillarwebagency.com
                  </a>
                  .
                </p>
              </Block>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line pt-8">
      <h2 className="text-xl font-bold uppercase tracking-tight text-ink">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-4 text-muted">{children}</div>
    </div>
  );
}
