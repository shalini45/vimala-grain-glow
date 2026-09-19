import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/site/LegalPage";
import { ADDRESS, HOURS_LABEL, PHONE, PHONE_DISPLAY, SITE_URL } from "@/lib/site-config";
import { DELIVERY_CHARGE, FREE_DELIVERY_THRESHOLD } from "@/lib/products";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Delivery, Cancellation & Refund Policy — Vimala Flour Mill" },
      {
        name: "description",
        content:
          "Delivery charges and areas, how to cancel an order, and when a replacement or refund applies at Vimala Flour Mill.",
      },
      { property: "og:url", content: `${SITE_URL}/refund-policy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/refund-policy` }],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <LegalPage title="Delivery, Cancellation & Refund Policy" updated="19 September 2026">
      <LegalSection title="Delivery">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Home delivery is available across our serviceable areas in Bangalore.</li>
          <li>
            A delivery charge of ₹{DELIVERY_CHARGE} applies on orders below ₹
            {FREE_DELIVERY_THRESHOLD}; delivery is free on orders of ₹{FREE_DELIVERY_THRESHOLD} and
            above.
          </li>
          <li>
            Delivery timing depends on order volume and grinding time — we'll confirm an expected
            time with you on WhatsApp after your order is confirmed.
          </li>
          <li>
            If your area isn't covered by home delivery, you're welcome to collect your order from
            the mill during business hours ({HOURS_LABEL}).
          </li>
          <li>Please share an accurate address, area, landmark and PIN code to avoid delays.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Payment">
        <p>
          We currently collect payment on delivery or at pickup. No online prepayment is taken
          through the website at this time.
        </p>
      </LegalSection>

      <LegalSection title="Cancellations">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            You can cancel an order free of charge any time before we begin cleaning, grinding, or
            packing it — just message us on WhatsApp or call {PHONE_DISPLAY}.
          </li>
          <li>
            Once grinding/preparation has started, the order can no longer be cancelled, since it is
            being freshly made for you.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Replacements & refunds">
        <p>
          Because most of our products are freshly ground or prepared to order, we do not accept
          returns of opened or used items for a change of mind. That said, we stand behind the
          quality of what we make:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Wrong item delivered</strong> — we'll replace it or refund that item, at no
            extra cost to you.
          </li>
          <li>
            <strong>Damaged packaging or a quality issue</strong> (e.g. incorrect grind, spoilage) —
            let us know within 24 hours of delivery/pickup, with a photo where possible, and we'll
            replace the item or refund it.
          </li>
          <li>
            <strong>Short delivery</strong> (quantity received doesn't match what was billed) —
            we'll make up the difference or adjust the bill.
          </li>
        </ul>
        <p>
          To report an issue, message us on WhatsApp at {PHONE_DISPLAY} with your order details.
          Approved refunds for cash-on-delivery orders are settled directly with you; if online
          payment is paid in advance in future, refunds will be made to the original payment method
          within a reasonable time after approval.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          {ADDRESS}
          <br />
          Phone / WhatsApp:{" "}
          <a href={`tel:${PHONE}`} className="text-primary underline">
            {PHONE_DISPLAY}
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
