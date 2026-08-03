import heroImg from "@/assets/hero-wheat.jpg";
import millInterior from "@/assets/mill-interior.jpg";
import ragiImg from "@/assets/ragi-flour.jpg";
import wetImg from "@/assets/wet-grinding.jpg";
import chilliImg from "@/assets/chilli-powder.jpg";
import healthMixImg from "@/assets/health-mix.jpg";
import sacksImg from "@/assets/sacks.jpg";
import machineImg from "@/assets/machine.jpg";
import vfmShopAsset from "@/assets/vfm-shop.png.asset.json";
import vfmInteriorAsset from "@/assets/vfm-interior.png.asset.json";
import vfmLogoAsset from "@/assets/vfm-logo.png.asset.json";

export const images = {
  hero: heroImg,
  millInterior,
  ragi: ragiImg,
  wet: wetImg,
  chilli: chilliImg,
  healthMix: healthMixImg,
  sacks: sacksImg,
  machine: machineImg,
  vfmShop: vfmShopAsset.url,
  vfmInterior: vfmInteriorAsset.url,
  vfmLogo: vfmLogoAsset.url,
};

export const PHONE = "+919480975441";
export const WHATSAPP = "919480975441";
export const ADDRESS =
  "No. 46, 2nd Cross, 7th Main, N.S. Layout, Subbanna Palya, Bangalore - 560043";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Vimala Flour Mill, " + ADDRESS,
)}`;

export const waLink = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
