import { DELIVERY_CHARGE, FREE_DELIVERY_THRESHOLD } from "./products";

/** FAQ content — rendered in the FAQ section and emitted as FAQPage structured data. */
export const FAQS = [
  {
    q: "What items can be ground at Vimala Flour Mill?",
    a: "We grind wheat, ragi, rice, chola, multi-grain blends, millets, chilli, coriander, sambar masala, and prepare idli/dosa batter, chutney, and ginger-garlic paste. We also do custom flour blends and health mixes.",
  },
  {
    q: "Do you provide home delivery?",
    a: `Yes, we deliver in and around N.S. Layout and Subbanna Palya. Delivery is free on orders of ₹${FREE_DELIVERY_THRESHOLD} and above; a ₹${DELIVERY_CHARGE} charge applies to smaller orders. Order through our online shop, or call/WhatsApp us with your order and address.`,
  },
  {
    q: "Can you prepare custom health mixes?",
    a: "Absolutely. Share your recipe or preferred ingredients and we will prepare it fresh for you.",
  },
  {
    q: "Do you accept bulk orders?",
    a: "Yes, we handle bulk grinding for households, restaurants, caterers and small businesses. Contact us with your requirement for pricing.",
  },
  {
    q: "How long does grinding take?",
    a: "Most orders are completed the same day. Bulk or special orders may take a little longer — we will confirm the time when you place the order.",
  },
  { q: "What are your business hours?", a: "We are open all days from 9:00 AM to 10:00 PM." },
  {
    q: "Do you offer both wet and dry grinding?",
    a: "Yes — wet grinding for batters/pastes and dry grinding for flours and masalas, all under one roof.",
  },
];
