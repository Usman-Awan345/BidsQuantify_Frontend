// frontend/src/components/ServiceCard.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const createSlug = (title = "") =>
  title.toLowerCase().trim().replace(/&/g, "and").replace(/\s+/g, "-");

const ServiceCard = ({
  title,
  description,
  icon,
  slug,
  category,
  price,
  features = [],
  variant = "default",
  className = "",
}) => {
  const serviceUrl = `/services/${slug || createSlug(title)}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35 }}
      className={`
        group relative min-h-[310px] overflow-hidden rounded-[28px]
        border border-zinc-200 bg-[#f8f6f1] shadow-[0_18px_60px_rgba(0,0,0,0.08)]
        transition-all duration-500 hover:-translate-y-2 hover:border-[#d6a437]/70
        hover:shadow-[0_28px_90px_rgba(0,0,0,0.16)]
        ${className}
      `}
    >
      {/* Dark corner panel */}
      <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[60px] bg-zinc-950 transition-all duration-500 group-hover:h-40 group-hover:w-40" />

      {/* Card number / icon mark */}
      <div className="absolute right-6 top-6 z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d6a437] text-zinc-950 shadow-xl">
        {icon ? (
          typeof icon === "string" ? (
            <img src={icon} alt={title} className="h-8 w-8 object-contain" />
          ) : (
            icon
          )
        ) : (
          <span className="text-xl font-black">{title?.slice(0, 2)}</span>
        )}
      </div>

      <div className="relative z-10 flex h-full flex-col p-7">
        <div className="mb-7">
          {category && (
            <span className="mb-4 inline-flex rounded-full border border-[#d6a437]/40 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-700">
              {category}
            </span>
          )}

          <h3 className="max-w-[75%] text-[22px] font-black leading-tight text-zinc-950">
            {title}
          </h3>
        </div>

        <p className="mb-6 max-w-[92%] text-[15px] leading-7 text-zinc-600">
          {description ||
            `Detailed ${title} estimating support with accurate quantities, cost breakdowns, and bid-ready reports for contractors.`}
        </p>

        <div className="mt-auto">
          {features.length > 0 && (
            <div className="mb-6 grid gap-2 border-y border-zinc-200 py-4">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 text-[#d6a437]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-400">
                Estimate Service
              </p>
              <p className="mt-1 text-sm font-bold text-zinc-950">
                {price || "Quote Based"}
              </p>
            </div>

            <Link
              to={serviceUrl}
              className="
                inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3
                text-sm font-black text-white transition-all duration-300
                hover:bg-[#d6a437] hover:text-zinc-950
              "
            >
              Details
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-7 right-7 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#d6a437] to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
    </motion.article>
  );
};

export default ServiceCard;