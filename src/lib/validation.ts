/** Indian mobile numbers: 10 digits, starting 6-9, with an optional +91/91 prefix. */
const INDIAN_MOBILE_RE = /^(?:\+?91)?[6-9]\d{9}$/;

export function isValidIndianPhone(value: string): boolean {
  const trimmed = value.trim().replace(/[\s-]/g, "");
  if (!INDIAN_MOBILE_RE.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  const last10 = digits.slice(-10);
  return !/^(\d)\1{9}$/.test(last10);
}
