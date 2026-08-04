import chilliImg from "@/assets/chilli-powder.jpg";
import ragiImg from "@/assets/ragi-flour.jpg";
import sacksImg from "@/assets/sacks.jpg";
import wetImg from "@/assets/wet-grinding.jpg";

/**
 * Centralized product catalogue for the "Fresh Products From Our Mill" section.
 * Edit prices, descriptions, units or availability here — the UI reads straight from this file.
 * `image` is an optional real photo; products without one render a branded icon visual instead
 * (swap in a photo any time by adding an `image` entry).
 */
export type ProductVisualIcon = "leaf" | "flame" | "soup" | "wheat" | "sprout" | "circle" | "sun";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image?: string;
  visualIcon?: ProductVisualIcon;
  available: boolean;
  minQty?: number;
  step?: number;
}

export const DELIVERY_CHARGE = 30;
export const FREE_DELIVERY_THRESHOLD = 500;

export const products: Product[] = [
  {
    id: "coriander-powder",
    name: "Coriander Powder",
    description: "Freshly ground coriander seeds, aromatic and full-flavoured.",
    price: 60,
    unit: "250 g",
    visualIcon: "leaf",
    available: true,
  },
  {
    id: "chilli-powder",
    name: "Chilli Powder",
    description: "Stone-ground red chilli powder, vibrant colour and balanced heat.",
    price: 70,
    unit: "250 g",
    image: chilliImg,
    available: true,
  },
  {
    id: "sambar-powder",
    name: "Sambar Powder",
    description: "Our signature masala blend, roasted and ground fresh for sambar.",
    price: 90,
    unit: "250 g",
    visualIcon: "soup",
    available: true,
  },
  {
    id: "dosa-batter",
    name: "Dosa Batter",
    description: "Naturally fermented, ready-to-cook dosa batter ground on stone.",
    price: 60,
    unit: "1 kg",
    visualIcon: "circle",
    available: true,
  },
  {
    id: "idli-batter",
    name: "Idli Batter",
    description: "Soft, fluffy idli batter — fermented fresh, ready to steam.",
    price: 60,
    unit: "1 kg",
    image: wetImg,
    available: true,
  },
  {
    id: "ragi-flour",
    name: "Ragi Flour",
    description: "Finger millet flour, stone-ground for nutrition and taste.",
    price: 65,
    unit: "1 kg",
    image: ragiImg,
    available: true,
  },
  {
    id: "wheat-flour",
    name: "Wheat Flour",
    description: "Whole wheat atta, freshly milled for soft rotis and chapatis.",
    price: 50,
    unit: "1 kg",
    image: sacksImg,
    available: true,
  },
  {
    id: "rice-flour",
    name: "Rice Flour",
    description: "Fine rice flour, ground fresh for idiyappam, dosas & sweets.",
    price: 55,
    unit: "1 kg",
    visualIcon: "wheat",
    available: true,
  },
  {
    id: "besan-flour",
    name: "Besan Flour",
    description: "Roasted gram flour, stone-ground for bajji, sweets & curries.",
    price: 80,
    unit: "1 kg",
    visualIcon: "sprout",
    available: true,
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    description: "Pure turmeric, dried and ground fresh — no additives, no colour.",
    price: 75,
    unit: "250 g",
    visualIcon: "sun",
    available: true,
  },
];
