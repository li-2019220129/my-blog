import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  enhance() {
    if (typeof window === "undefined") return;

    window.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.closest("a, button, input, textarea, select")) return;

      const card = target.closest(".post-item-container");
      const link = card?.querySelector(".title a");
      if (link?.href) window.location.href = link.href;
    });
  },
});
