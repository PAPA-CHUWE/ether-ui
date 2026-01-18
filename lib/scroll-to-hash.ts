export function scrollToHash(hash: string, opts?: { offset?: number }) {
  if (!hash?.startsWith("#")) return;

  const el = document.querySelector(hash);
  if (!el) return;

  const offset = opts?.offset ?? 88; // tweak for your fixed header height
  const top =
    el.getBoundingClientRect().top + window.scrollY - offset;

  // Prefer Lenis if available
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(top, { immediate: false });
  } else {
    window.scrollTo({ top, behavior: "smooth" });
  }
}
