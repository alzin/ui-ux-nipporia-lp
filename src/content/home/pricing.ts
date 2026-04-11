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
    color: "from-purple-400 to-indigo-400",
  },
  {
    id: "growth",
    name: "Growth",
    price: "350,000",
    priceSuffix: "/mo",
    featured: true,
    color: "from-pink-400 to-rose-400",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "500,000",
    priceSuffix: "/mo",
    featured: false,
    color: "from-cyan-400 to-blue-400",
  },
];
