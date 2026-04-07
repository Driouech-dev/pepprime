export type Product = {
  slug: string;
  name: string;
  price: string;
  category: string;
  size: string;
  image: string;
  shortDescription: string;
  details: string[];
  featured?: boolean;
};

const base = import.meta.env.BASE_URL;

export const products: Product[] = [
  {
    slug: "retatrutide-5",
    name: "Retatrutide 5mg",
    price: "$50",
    category: "Research Peptides",
    size: "5mg / vial • 10 vials / box",
    image: `${base}images/retatrutide-5.jpg`,
    shortDescription: "Retatrutide 5mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: RT 5",
      "5mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: true
  },
  {
    slug: "retatrutide-10",
    name: "Retatrutide 10mg",
    price: "$90",
    category: "Research Peptides",
    size: "10mg / vial • 10 vials / box",
    image: `${base}images/retatrutide-10.jpg`,
    shortDescription: "Retatrutide 10mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: RT 10",
      "10mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "retatrutide-15",
    name: "Retatrutide 15mg",
    price: "$130",
    category: "Research Peptides",
    size: "15mg / vial • 10 vials / box",
    image: `${base}images/retatrutide-15.jpg`,
    shortDescription: "Retatrutide 15mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: RT 15",
      "15mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "retatrutide-20",
    name: "Retatrutide 20mg",
    price: "$170",
    category: "Research Peptides",
    size: "20mg / vial • 10 vials / box",
    image: `${base}images/retatrutide-20.jpg`,
    shortDescription: "Retatrutide 20mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: RT 20",
      "20mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "retatrutide-30",
    name: "Retatrutide 30mg",
    price: "$250",
    category: "Research Peptides",
    size: "30mg / vial • 10 vials / box",
    image: `${base}images/retatrutide-30.jpg`,
    shortDescription: "Retatrutide 30mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: RT 30",
      "30mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "tesamorelin-10",
    name: "Tesamorelin 10mg",
    price: "$180",
    category: "Research Peptides",
    size: "10mg / vial • 10 vials / box",
    image: `${base}images/tesamorelin-10.jpg`,
    shortDescription: "Tesamorelin 10mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: TE 10",
      "10mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: true
  },
  {
    slug: "mots-c-10",
    name: "MOTS-C 10mg",
    price: "$60",
    category: "Research Peptides",
    size: "10mg / vial • 10 vials / box",
    image: `${base}images/mots-c-10.jpg`,
    shortDescription: "MOTS-C 10mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: MC 10",
      "10mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: true
  },
  {
    slug: "ghk-cu-100",
    name: "GHK-CU 100mg",
    price: "$50",
    category: "Research Peptides",
    size: "100mg / vial • 10 vials / box",
    image: `${base}images/ghk-cu-100.jpg`,
    shortDescription: "GHK-CU 100mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: GHK 100",
      "100mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: true
  },
  {
    slug: "aod-9604-5",
    name: "AOD-9604 5mg",
    price: "$90",
    category: "Research Peptides",
    size: "5mg / vial • 10 vials / box",
    image: `${base}images/aod-9604-5.jpg`,
    shortDescription: "AOD-9604 5mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: AD 5",
      "5mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "ghk-cu-50",
    name: "GHK-CU 50mg",
    price: "$30",
    category: "Research Peptides",
    size: "50mg / vial • 10 vials / box",
    image: `${base}images/ghk-cu-50.jpg`,
    shortDescription: "GHK-CU 50mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: GK 50",
      "50mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "bpc-157-5",
    name: "BPC-157 5mg",
    price: "$40",
    category: "Research Peptides",
    size: "5mg / vial • 10 vials / box",
    image: `${base}images/bpc-157-5.jpg`,
    shortDescription: "BPC-157 5mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: BC5",
      "5mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: true
  },
  {
    slug: "bpc-157-10",
    name: "BPC-157 10mg",
    price: "$50",
    category: "Research Peptides",
    size: "10mg / vial • 10 vials / box",
    image: `${base}images/bpc-157-10.jpg`,
    shortDescription: "BPC-157 10mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: BC10",
      "10mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "thymosin-alpha-1-10",
    name: "Thymosin Alpha-1 10mg",
    price: "$150",
    category: "Research Peptides",
    size: "10mg / vial • 10 vials / box",
    image: `${base}images/thymosin-alpha-1-10.jpg`,
    shortDescription: "Thymosin Alpha-1 10mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: TA10",
      "10mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "tb500-5",
    name: "TB500 5mg",
    price: "$70",
    category: "Research Peptides",
    size: "5mg / vial • 10 vials / box",
    image: `${base}images/tb500-5.jpg`,
    shortDescription: "TB500 5mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: TB 5",
      "5mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: true
  },
  {
    slug: "tb500-10",
    name: "TB500 10mg",
    price: "$120",
    category: "Research Peptides",
    size: "10mg / vial • 10 vials / box",
    image: `${base}images/tb500-10.jpg`,
    shortDescription: "TB500 10mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: TB 10",
      "10mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "klow-80",
    name: "KLOW 80mg",
    price: "$160",
    category: "Research Peptides",
    size: "80mg / vial • 10 vials / box",
    image: `${base}images/klow-80.jpg`,
    shortDescription: "KLOW 80mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: KLOW 80",
      "80mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "glow-70",
    name: "GLOW 70mg",
    price: "$140",
    category: "Research Peptides",
    size: "70mg / vial • 10 vials / box",
    image: `${base}images/glow-70.jpg`,
    shortDescription: "GLOW 70mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: GLOW 70",
      "70mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "5-amino-1mq-5",
    name: "5-Amino-1MQ 5mg",
    price: "$60",
    category: "Research Peptides",
    size: "5mg / vial • 10 vials / box",
    image: `${base}images/5-amino-1mq-5.jpg`,
    shortDescription: "5-Amino-1MQ 5mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: AM 5",
      "5mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "cjc-1295-ipamorelin-20",
    name: "CJC-1295 + Ipamorelin 20mg",
    price: "$160",
    category: "Research Peptides",
    size: "20mg / vial • 10 vials / box",
    image: `${base}images/cjc-1295-ipamorelin-20.jpg`,
    shortDescription: "CJC-1295 + Ipamorelin 20mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: CP 20",
      "20mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "semax-5",
    name: "Semax 5mg",
    price: "$30",
    category: "Research Peptides",
    size: "5mg / vial • 10 vials / box",
    image: `${base}images/semax-5.jpg`,
    shortDescription: "Semax 5mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: SX 5",
      "5mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
  {
    slug: "selank-5",
    name: "Selank 5mg",
    price: "$30",
    category: "Research Peptides",
    size: "5mg / vial • 10 vials / box",
    image: `${base}images/selank-5.jpg`,
    shortDescription: "Selank 5mg listed with visible pricing and direct inquiry contact for the pepprime catalog.",
    details: [
      "Product code shown in image: SK 5",
      "5mg / vial / 10 vials / box",
      "Public price shown on the product card",
      "Inquiry available by WhatsApp or email",
    ],
    featured: false
  },
];

export const featuredProducts = products.filter((product) => product.featured).slice(0, 6);
