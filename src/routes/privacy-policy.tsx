import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage, PolicySection } from "@/components/site/PolicyPage";
import { ADDRESS, EMAIL, PHONE, SITE_URL } from "@/lib/site-config";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vimala Flour Mill" },
      {
        name: "description",
        content:
          "How Vimala Flour Mill collects, uses and protects the information you share via our enquiry, checkout and contact forms.",
      },
      { property: "og:url", content: `${SITE_URL}/privacy-policy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy-policy` }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <PolicyPage title="Privacy Policy" updated="13 September 2026">
      <p>
        Vimala Flour Mill ("we", "us", "our") operates this website to share information about our
        flour milling and grinding services and to let customers reach us for enquiries and orders.
        This policy explains what information we collect through the website, how we use it, and
        your choices.
      </p>

      <PolicySection title="Information we collect">
        <p>We collect information only when you choose to share it with us, through:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>The enquiry form</strong> — your name, phone number, the service you're asking
            about, and your message.
          </li>
          <li>
            <strong>The checkout form</strong> — your name, phone number, delivery address, area,
            landmark, PIN code, delivery instructions, and, if you choose to provide it, your email
            address.
          </li>
          <li>
            <strong>Your shopping cart</strong> — the products and quantities you add to your cart
            are stored only in your own browser (local storage), not on our servers.
          </li>
        </ul>
        <p>We do not use cookies for advertising and we do not ask for payment card details.</p>
      </PolicySection>

      <PolicySection title="How we use and store your information">
        <p>
          This website does not have a database. When you submit the enquiry or checkout form, your
          details are formatted into a message and handed to WhatsApp to send directly to our
          business number, +91 94809 75441. We use that information only to understand your
          requirement, confirm your order, and arrange delivery or pickup. We do not store your form
          submissions on any server, and we do not sell, rent, or share your information with third
          parties for their own marketing.
        </p>
      </PolicySection>

      <PolicySection title="Third-party services used on this site">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>WhatsApp</strong> (Meta) — used to receive your enquiries/orders. WhatsApp's own
            privacy policy governs messages sent through it.
          </li>
          <li>
            <strong>Google Maps</strong> — embedded to show our location; Google may set cookies
            when you interact with the map.
          </li>
          <li>
            <strong>Google Analytics</strong> — we use aggregated, anonymised analytics to
            understand site traffic and improve the website. Analytics cookies do not identify you
            personally.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="Your choices">
        <p>
          You can browse the site and view our catalogue without submitting any personal
          information. If you'd like us to delete or stop using information you've previously sent
          us over WhatsApp, contact us using the details below and we'll action it.
        </p>
      </PolicySection>

      <PolicySection title="Children's privacy">
        <p>
          This website is intended for adults placing enquiries or orders on behalf of a household
          or business. We do not knowingly collect information from children.
        </p>
      </PolicySection>

      <PolicySection title="Changes to this policy">
        <p>
          We may update this policy from time to time to reflect changes to the website or the law.
          The "Last updated" date at the top of this page will change when we do.
        </p>
      </PolicySection>

      <PolicySection title="Contact us">
        <p>
          For any questions about this policy or your information, reach us at:
          <br />
          {ADDRESS}
          <br />
          Phone / WhatsApp: {PHONE}
          <br />
          Email: {EMAIL}
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
