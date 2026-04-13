export type TPlanMeta = {
  id: string;
  name: string;
  price: string;
  priceSuffix: string;
  featured: boolean;
  color: string;
};

export const plansMeta: TPlanMeta[] = [
  {
    id: "basic",
    name: "Basic",
    price: "250,000",
    priceSuffix: "/mo",
    featured: false,
    color: "from-[#F472B6] to-[#FB7185]",
  },
  {
    id: "growth",
    name: "Growth",
    price: "350,000",
    priceSuffix: "/mo",
    featured: true,
    color: "from-[#C084FC] to-[#818CF8]",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "500,000",
    priceSuffix: "/mo",
    featured: false,
    color: "from-[#22D3EE] to-[#60A5FA]",
  },
];
