import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import RSS from "@/assets/icons/rss.svg"
export const SITE = {
  title: "Yajing Liu",
  description:
    "Yajing Liu is a Computer Science and Technology undergraduate at Sun Yat-sen University interested in AI for Science, AI agents, and backend engineering.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/1200x630.png",
} as const

export const NAVIGATION = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/authors", label: "Authors" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/Glazzze", label: "GitHub", icon: GitHub },
  { href: "mailto:liuyj363@mail2.sysu.edu.cn", label: "Email", icon: Email },
  { href: "/rss.xml", label: "RSS", icon: RSS },
]
