import type { SiteConfig } from "@/lib/types";

const BOOKSY = "http://frostyfadez.booksy.com/";

export const site: SiteConfig = {
  name: "Frosty Fadez",
  tagline: "Licensed men's stylist in Brampton. Clean cuts, great vibes, everyone welcome.",
  category: "Men's barber",
  schemaType: "HairSalon",
  area: "Brampton, ON",
  siteUrl: "https://frosty-fadez.vercel.app",

  theme: {
    preset: "barber-bold-light",
    colors: { accent: "#b3221c" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Licensed men's stylist in Brampton",
    headline: "Clean cuts, great vibes",
    subhead: "Fades, classic cuts, and options for every type of hair. Appointments are booked online through Booksy, and new clients are always welcome.",
    images: [
      { src: "/images/cut-10.jpg", alt: "Fresh fade with a hard part at Frosty Fadez" },
      { src: "/images/cut-1.jpg", alt: "Client in the chair at Frosty Fadez" },
      { src: "/images/cut-11.jpg", alt: "Low fade on a client in Brampton" },
    ],
    primaryCta: { label: "Book now", href: BOOKSY },
    secondaryCta: { label: "See the cuts", href: "#gallery" },
  },

  highlights: ["Licensed men's stylist", "Book online with Booksy", "Brampton, Ontario", "New clients always welcome"],

  about: {
    title: "Everybody is welcome",
    body: [
      "Frosty Fadez is a licensed men's stylist in Brampton. It is all about great vibes, love, and clean cuts.",
      "No matter what hair you have, you will always get options so you are happy with the results. Clients with eczema or a sensitive scalp who have struggled to find the right barber are welcome too.",
    ],
    image: { src: "/images/cut-3.jpg", alt: "Client getting a cut at Frosty Fadez" },
  },

  menu: {
    label: "Services",
    title: "What I do",
    variant: "list",
    showPrices: false,
    priceNote: "See current services and prices on Booksy.",
    groups: [
      {
        title: "Cuts",
        items: [
          { name: "Men's haircuts and fades" },
          { name: "Classic cuts" },
          { name: "Cuts for eczema and sensitive scalps", description: "Options that suit your skin and hair." },
        ],
      },
    ],
  },

  gallery: {
    title: "Fresh out the chair",
    items: [
      { src: "/images/cut-10.jpg", width: 360, height: 640, alt: "Fade with a hard part", caption: "Classy cuts never go out of style", href: "https://www.instagram.com/reel/Der4TT8PYHc/" },
      { src: "/images/cut-1.jpg", width: 361, height: 640, alt: "Client in the chair", caption: "Barber in the Brampton area", href: "https://www.instagram.com/reel/DeSbMX-vxez/" },
      { src: "/images/cut-6.jpg", width: 360, height: 640, alt: "Fresh cut from behind", caption: "Great vibes, love, and clean cuts", href: "https://www.instagram.com/reel/DfAE4OETSFE/" },
      { src: "/images/cut-11.jpg", width: 361, height: 640, alt: "Low fade side view", caption: "New faces always welcome", href: "https://www.instagram.com/reel/DenRWNbPn7o/" },
      { src: "/images/cut-9.jpg", width: 360, height: 640, alt: "Happy client after a cut", caption: "Always a pleasure", href: "https://www.instagram.com/reel/DewoI8HzoxM/" },
      { src: "/images/cut-12.jpg", width: 361, height: 640, alt: "Cut in progress", caption: "Your next visit", href: "https://www.instagram.com/reel/DehOz1ezfL7/" },
      { src: "/images/cut-3.jpg", width: 360, height: 640, alt: "Client in a patterned cape", caption: "Everyone is welcome", href: "https://www.instagram.com/reel/DfNCdADPVTY/" },
      { src: "/images/cut-2.jpg", width: 360, height: 640, alt: "Mural wall in the shop", caption: "Brampton community", href: "https://www.instagram.com/reel/DfP3dQ_vOYj/" },
    ],
  },

  instagram: {
    handle: "frostyfadez_",
    embeds: [],
  },

  order: {
    label: "How to book",
    title: "Book online",
    intro: "All appointments are booked through Booksy. Pick your service and a time that works for you. Have a question first? Send a message on Instagram.",
    headerCtaLabel: "Ask a question",
    dmMessage: "Hi Frosty Fadez! I have a quick question before I book on Booksy.\nMy question:\nHair type or concern:",
    links: [{ label: "Book on Booksy", href: BOOKSY }],
    note: "No appointments by DM. Please book through Booksy.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Book online through Booksy. Appointments are not taken by DM." },
    { q: "Do you take new clients?", a: "Yes. New clients are always welcome, and everybody is welcome in the chair." },
    { q: "I have eczema or a sensitive scalp. Can you help?", a: "Yes. If you have struggled to find a barber that suits you, book a visit and we will find options that work for you." },
    { q: "Where are you located?", a: "Frosty Fadez is in Brampton, Ontario. You will see the details when you book on Booksy." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton, Ontario",
    socials: [
      { label: "Book on Booksy", href: BOOKSY },
      { label: "TikTok @frostyfadez_", href: "https://www.tiktok.com/@frostyfadez_" },
    ],
  },

  seo: {
    title: "Frosty Fadez | Men's barber in Brampton",
    description: "Frosty Fadez is a licensed men's stylist in Brampton, Ontario. Fades, classic cuts, and options for every hair type. Book online through Booksy today.",
    keywords: ["barber Brampton", "fade Brampton", "men's haircut Brampton", "Frosty Fadez"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
