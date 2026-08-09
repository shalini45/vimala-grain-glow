import heroImg from "@/assets/hero-wheat.jpg";
import millInterior from "@/assets/mill-interior.jpg";
import ragiImg from "@/assets/ragi-flour.jpg";
import wetImg from "@/assets/wet-grinding.jpg";
import chilliImg from "@/assets/chilli-powder.jpg";
import healthMixImg from "@/assets/health-mix.jpg";
import sacksImg from "@/assets/sacks.jpg";
import machineImg from "@/assets/machine.jpg";
import vfmInteriorAsset from "@/assets/vfm-interior.png.asset.json";
import aboutImg from "@/assets/About.png";

export const images = {
  hero: heroImg,
  millInterior,
  ragi: ragiImg,
  wet: wetImg,
  chilli: chilliImg,
  healthMix: healthMixImg,
  sacks: sacksImg,
  machine: machineImg,
  vfmInterior: vfmInteriorAsset.url,
  about: aboutImg,
};

export const PHONE = "+919480975441";
export const WHATSAPP = "919480975441";
export const ADDRESS =
  "No. 46, 2nd Cross, 7th Main, N.S. Layout, Subbanna Palya, Bangalore - 560043";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Vimala Flour Mill, " + ADDRESS,
)}`;

/** Real, verifiable figures from the business's Google Maps listing — update if they change. */
export const GOOGLE_RATING = 4.0;
export const GOOGLE_REVIEW_COUNT = 9;
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Vimala+Flour+Mill/@13.0153734,77.6416367,17z/data=!4m8!3m7!1s0x3bae16d606aeb1fd:0x10ead216dd07493f!8m2!3d13.0153734!4d77.6416367!9m1!1b1!16s%2Fg%2F11b7f2pp82";

export const waLink = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
