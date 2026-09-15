import { createFileRoute, Link } from "@tanstack/react-router";
import { PolicyPage, PolicySection } from "@/components/site/PolicyPage";
import { ADDRESS, EMAIL, PHONE, SITE_URL } from "@/lib/site-config";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Vimala Flour Mill" },
      {
        name: "description",
        content:
          "Terms governing your use of the Vimala Flour Mill website and the enquiries/orders placed through it.",
      },
      { property: "og:url", content: `${SITE_URL}/terms` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PolicyPage title="Terms of Service" updated="13 September 2026">
      <p>
        These terms govern your use of the Vimala Flour Mill website and any enquiry or order you
        place through it. By using this website, you agree to these terms.
      </p>

      <PolicySection title="About us">
        <p>
          Vimala Flour Mill is a flour milling and grinding business operating from {ADDRESS}. We
          offer wet and dry grinding services and a range of ready-made flours, batters and masala
          powders, with home delivery available in our serviceable areas around Bangalore.
        </p>
      </PolicySection>

      <PolicySection title="Product information and pricing">
        <p>
          Prices shown on the website are indicative. Because many items are ground and packed
          fresh, final weight and price may vary slightly and is confirmed with you at the time of
          pickup or delivery. Product photos are representative — natural variation in colour or
          texture between batches is normal for freshly milled products.
        </p>
      </PolicySection>

      <PolicySection title="How an order is placed">
        <p>
          Adding items to the cart or submitting the enquiry/checkout form does not itself confirm
          your order — it prepares a WhatsApp message with your details for you to send to us. An
          order is confirmed only once we acknowledge it on WhatsApp or by phone. We may contact you
          to confirm quantities, availability, or delivery timing before confirming.
        </p>
      </PolicySection>

      <PolicySection title="Payment">
        <p>
          At present we do not accept online payment through the website. Payment is collected on
          delivery or at pickup, by cash or UPI, unless we agree otherwise with you directly.
        </p>
      </PolicySection>

      <PolicySection title="Delivery, cancellation and refunds">
        <p>
          Delivery areas, charges, cancellation and refund terms are set out in our{" "}
          <Link to="/refund-policy" className="text-primary underline underline-offset-2">
            Delivery, Cancellation &amp; Refund Policy
          </Link>
          .
        </p>
      </PolicySection>

      <PolicySection title="Acceptable use">
        <p>
          Please don't use this website to submit false enquiries/orders, attempt to disrupt the
          site, or copy our content (text, photos, logo) for commercial use without permission.
        </p>
      </PolicySection>

      <PolicySection title="Limitation of liability">
        <p>
          We take care to describe our products and services accurately, but the website is provided
          "as is". To the extent permitted by law, we are not liable for indirect losses arising
          from your use of the website; our liability for any order is limited to the value of that
          order.
        </p>
      </PolicySection>

      <PolicySection title="Governing law">
        <p>
          These terms are governed by the laws of India, and disputes are subject to the exclusive
          jurisdiction of the courts in Bangalore, Karnataka.
        </p>
      </PolicySection>

      <PolicySection title="Changes to these terms">
        <p>
          We may update these terms from time to time. Continued use of the website after changes
          means you accept the updated terms.
        </p>
      </PolicySection>

      <PolicySection title="Contact us">
        <p>
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
