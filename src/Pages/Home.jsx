import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const FONT_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=Inter:wght@400;500&display=swap');
  .font-display { font-family: 'Archivo', sans-serif; }
  .font-body { font-family: 'Inter', sans-serif; }
`;

const PRODUCTS = [
  {
    name: "Boxy Tee — Stone",
    price: "$38",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Wide Trouser — Ink",
    price: "$86",
    img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Cropped Jacket — Clay",
    price: "$128",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Slip Dress — Sage",
    price: "$94",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
  },
];

export default function ClothingHomePage() {
  return (
    <div className="font-body bg-[#EAE4D8] text-[#171614]">
      <style>{FONT_STYLE}</style>

      <section className="relative h-[85vh] min-h-130 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop"
          alt="Model wearing new season basics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#171614]/70 via-[#171614]/10 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-14">
          <h1 className="font-display font-semibold text-5xl md:text-7xl text-[#EAE4D8] leading-[0.95] mb-6 max-w-2xl">
            Clothes that do less, so you can do more.
          </h1>
          <Link to="/product" className="bg-[#EAE4D8] text-[#171614] w-fit px-7 py-3.5 font-medium hover:bg-[#6B7358] hover:text-[#EAE4D8] transition-colors">
            Shop new arrivals
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display font-semibold text-2xl md:text-3xl">
            Best sellers
          </h2>
          <Link to="/product" className="flex items-center gap-1 text-sm font-medium border-b border-[#171614] pb-0.5 hover:border-[#6B7358] hover:text-[#6B7358] transition-colors">
            Shop all
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className="aspect-3/4 overflow-hidden mb-3 bg-[#DDD5C4]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-medium text-sm">{p.name}</p>
              <p className="text-[#6B7358] text-sm">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      
      
    </div>
  );
}