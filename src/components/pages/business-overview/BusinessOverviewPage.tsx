"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Building2,
  Calendar,
  Banknote,
  UserRound,
  Users,
  Briefcase,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function BusinessOverviewPage() {
  const { t, lang, localizePath } = useLanguage();
  const isRTL = lang === "ar";
  const ci = t.businessOverview;

  const infoRows = [
    {
      icon: <Building2 className="w-5 h-5" />,
      label: ci.companyName.label,
      content: <span className="font-semibold text-gray-900">{ci.companyName.value}</span>,
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: ci.established.label,
      content: <span>{ci.established.value}</span>,
    },
    ci.capital.value
      ? {
          icon: <Banknote className="w-5 h-5" />,
          label: ci.capital.label,
          content: <span>{ci.capital.value}</span>,
        }
      : null,
    {
      icon: <UserRound className="w-5 h-5" />,
      label: ci.representative.label,
      content: <span>{ci.representative.value}</span>,
    },
    ci.employees.value
      ? {
          icon: <Users className="w-5 h-5" />,
          label: ci.employees.label,
          content: <span>{ci.employees.value}</span>,
        }
      : null,
    {
      icon: <Briefcase className="w-5 h-5" />,
      label: ci.business.label,
      content: (
        <ul className="space-y-1.5">
          {ci.business.values.map((item) => (
            <li key={item} className="text-gray-700 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: ci.address.label,
      content: (
        <div>
          <span className="text-gray-500 text-sm">{ci.address.postalCode}</span>
          <br />
          <span>{ci.address.value}</span>
        </div>
      ),
    },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; content: React.ReactNode }[];

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-cream via-white to-lavender"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute top-20 -left-32 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className={`flex items-center gap-1.5 text-sm text-gray-500 mb-8 ${
              isRTL ? "justify-end" : "justify-start"
            }`}
          >
            <Link
              href={localizePath("/")}
              className="hover:text-purple-600 transition-colors duration-200"
            >
              {ci.breadcrumbHome}
            </Link>
            <ChevronRight
              className={`w-3.5 h-3.5 text-gray-400 ${isRTL ? "rotate-180" : ""}`}
            />
            <span className="text-purple-600 font-medium">
              {ci.breadcrumbBusinessOverview}
            </span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-transparent bg-clip-text mb-6">
            {ci.pageTitle}
          </h1>

          {/* Description */}
          <p
            className={`text-lg text-gray-600 leading-relaxed max-w-3xl ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {ci.heroDescription}
          </p>
        </div>
      </section>

      {/* Company Details Table */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500" />

            <div className="divide-y divide-gray-100">
              {infoRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`group flex flex-col md:flex-row transition-colors duration-200 hover:bg-purple-50/50 ${
                    index === 0 ? "" : ""
                  }`}
                >
                  {/* Label column */}
                  <div
                    className={`flex items-start gap-3 px-6 pt-6 pb-2 md:py-6 md:w-[240px] shrink-0 ${
                      isRTL ? "md:border-l" : "md:border-r"
                    } border-gray-100`}
                  >
                    <span className="text-purple-500 mt-0.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                      {row.icon}
                    </span>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                      {row.label}
                    </span>
                  </div>

                  {/* Value column */}
                  <div className="px-6 pb-6 pt-1 md:py-6 md:flex-1 text-gray-700 leading-relaxed">
                    {row.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
