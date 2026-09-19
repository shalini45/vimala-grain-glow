import { Link, createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/site/LegalPage";
import { DELIVERY_CHARGE, FREE_DELIVERY_THRESHOLD, MAX_QTY_PER_ITEM } from "@/lib/products";
import { HOURS_LABEL, PHONE, PHONE_DISPLAY, waLink } from "@/lib/site-config";

// Order terms reflect how the shop runs today (WhatsApp confirmation, pay on delivery/pickup).
// Delivery figures come from lib/products.ts so this page always matches the cart.
export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Order Policy — Vimala Flour Mill, Bangalore" },
      {
        name: "description",
        content:
          "Ordering, pricing, delivery, payment and cancellation terms for Vimala Flour Mill's grinding services and online shop.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms & Order Policy" updated="19 September 2026">
      <p>
        These terms apply when you use this website, place an order through our online shop, or use
        our grinding services. By placing an order, you agree to them.
      </p>

      <LegalSection title="Placing an order">
        <ul className="list-disc space-y-1.5 pl-6">
          <li>
            Orders are placed by sending the pre-filled WhatsApp message from checkout. An order is
            confirmed only after we reply to you on WhatsApp or by phone.
          </li>
          <li>
            Online orders are limited to {MAX_QTY_PER_ITEM} units per product. For bulk, catering or
            custom orders, please{" "}
            <a
              href={waLink("Hi, I'd like to place a bulk / custom order.")}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              message us
            </a>{" "}
            for a quote.
          </li>
          <li>If an item is unavailable, we'll tell you and you can change or cancel that item.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Prices and weight">
        <p>
          Prices on the website are indicative and include applicable taxes. Freshly ground products
          can vary slightly in weight, so your final bill is based on the actual weight at pickup or
          delivery. We'll tell you about any difference before you pay. Grinding charges for your
          own ingredients depend on the item and quantity, and we'll confirm them with you first.
        </p>
      </LegalSection>

      <LegalSection title="Delivery">
        <ul className="list-disc space-y-1.5 pl-6">
          <li>
            We deliver in and around N.S. Layout, Subbanna Palya and nearby areas of Bangalore.
            We'll confirm on WhatsApp whether we can deliver to your address.
          </li>
          <li>
            Delivery is <strong>free for orders of ₹{FREE_DELIVERY_THRESHOLD} and above</strong>. A
            ₹{DELIVERY_CHARGE} delivery charge applies to smaller orders.
          </li>
          <li>
            We'll agree a delivery time with you when we confirm your order. Most orders are ready
            the same day.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Payment">
        <p>
          We don't take payment online. You pay when your order is delivered or when you collect it
          from our mill.
        </p>
      </LegalSection>

      <LegalSection title="Cancellations and changes">
        <p>
          You can change or cancel an order free of charge before we start preparing it. Just call
          or WhatsApp us. Once grinding has started, or if the item was custom-made (such as a
          custom blend, health mix or bulk order), we may not be able to cancel it.
        </p>
      </LegalSection>

      <LegalSection title="Quality and freshness">
        <ul className="list-disc space-y-1.5 pl-6">
          <li>
            Our products are freshly ground and contain no preservatives. Store flours and masalas
            in a cool, dry, airtight container. Keep batters refrigerated and use them within the
            time we advise.
          </li>
          <li>
            If something isn't right with your order, please tell us within 24 hours of delivery or
            pickup and we'll put it right with a replacement or refund. See our{" "}
            <Link to="/refund-policy" className="text-primary underline">
              Delivery &amp; Refund Policy
            </Link>{" "}
            for details.
          </li>
          <li>
            When you bring your own ingredients, we clean and grind them with care, but we can't be
            responsible for the quality of the ingredients themselves.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Using this website">
        <p>
          We try to keep the website accurate and up to date, but prices, product availability and
          opening hours can change. The website's content and images belong to Vimala Flour Mill and
          may not be reused without our permission.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          Questions about an order? Call{" "}
          <a href={`tel:${PHONE}`} className="text-primary underline">
            {PHONE_DISPLAY}
          </a>{" "}
          or{" "}
          <a
            href={waLink("Hi, I have a question about my order.")}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            WhatsApp us
          </a>
          . We're open {HOURS_LABEL}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
