import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/site/LegalPage";
import { ADDRESS, PHONE, PHONE_DISPLAY, waLink } from "@/lib/site-config";

// Plain-language policy describing how the site actually handles data today (enquiries by email
// via Web3Forms, orders over WhatsApp, cart in browser storage, no online payments). Update it
// when online payment, accounts or analytics are added.
export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vimala Flour Mill, Bangalore" },
      {
        name: "description",
        content:
          "How Vimala Flour Mill collects, uses and protects the details you share when you enquire or order through our website.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="19 September 2026">
      <p>
        Vimala Flour Mill (“we”, “us”) respects your privacy. This policy explains what information
        we collect through this website, why we collect it, and how we look after it.
      </p>

      <LegalSection title="Information we collect">
        <p>We only collect the details you choose to give us:</p>
        <ul className="list-disc space-y-1.5 pl-6">
          <li>
            <strong>Enquiries</strong> — your name, phone number, the service you need and your
            message.
          </li>
          <li>
            <strong>Orders</strong> — your name, phone number, optional email, delivery address,
            area, landmark, PIN code, delivery instructions and the items in your cart.
          </li>
        </ul>
        <p>
          We don't ask for payment card or bank details on this website. Payment is made at delivery
          or pickup.
        </p>
      </LegalSection>

      <LegalSection title="How your information is sent to us">
        <p>
          When you submit the enquiry form, your details are sent to our business email inbox. We
          use a form-delivery service, Web3Forms, to pass the message on to us; it handles the
          message under its own privacy policy and does not use your details for anything else.
        </p>
        <p>
          When you place an order from the shop, the website prepares a WhatsApp message with your
          order details and opens WhatsApp on your device. Nothing is sent until you press send in
          WhatsApp, and that message is then handled under WhatsApp's own privacy policy.
        </p>
        <p>This website does not store your enquiry or order on a server of its own.</p>
      </LegalSection>

      <LegalSection title="How we use your information">
        <ul className="list-disc space-y-1.5 pl-6">
          <li>To reply to your enquiry and give you pricing or timing.</li>
          <li>To prepare, confirm and deliver your order.</li>
          <li>To contact you about your order, for example if an item is unavailable.</li>
        </ul>
        <p>
          We do not sell, rent or share your personal details with anyone for marketing. We share
          your address only with the person delivering your order.
        </p>
      </LegalSection>

      <LegalSection title="Cart data in your browser">
        <p>
          Your cart is saved in your own browser's local storage, so it's still there if you refresh
          the page. This data stays on your device. You can clear it at any time by emptying your
          cart or clearing your browser's site data.
        </p>
      </LegalSection>

      <LegalSection title="Third-party services">
        <p>
          The website loads Google Maps to show our location and Google Fonts for text. Links open
          WhatsApp and Google Maps, and enquiry form submissions are delivered to our inbox by
          Web3Forms. These services may collect technical information such as your IP address, under
          their own privacy policies. We do not use advertising or tracking cookies.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep information">
        <p>
          We keep order and enquiry messages only as long as we need them to serve you and keep
          basic business records. You can ask us to delete your messages and details at any time.
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <p>
          You can ask us what information we hold about you, or ask us to correct or delete it, by
          calling or messaging us using the details below.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          Vimala Flour Mill
          <br />
          {ADDRESS}
          <br />
          Phone:{" "}
          <a href={`tel:${PHONE}`} className="text-primary underline">
            {PHONE_DISPLAY}
          </a>{" "}
          ·{" "}
          <a
            href={waLink("Hi, I have a question about my personal data.")}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            WhatsApp
          </a>
        </p>
        <p>If we change this policy, we'll update this page and the “Last updated” date above.</p>
      </LegalSection>
    </LegalPage>
  );
}
