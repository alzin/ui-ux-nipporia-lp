"use client";

import { TMetaData } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

interface IBlogCardProps {
  slug: string;
  metadata: TMetaData;
}

const BlogCard = ({ slug, metadata }: IBlogCardProps) => {
  const { lang } = useLanguage();

  const localized = {
    ja: {
      untitled: "無題",
      noDescription: "説明はありません",
      noDate: "日付なし",
      noTags: "タグなし",
      readPost: "ブログ記事を読む",
    },
    en: {
      untitled: "Untitled",
      noDescription: "No description available",
      noDate: "No date",
      noTags: "No tags",
      readPost: "Read blog post",
    },
    ar: {
      untitled: "بدون عنوان",
      noDescription: "لا يوجد وصف",
      noDate: "لا يوجد تاريخ",
      noTags: "لا توجد وسوم",
      readPost: "قراءة المقال",
    },
  } as const;

  const localeText = localized[lang];
  const title = metadata.title || localeText.untitled;
  const description = metadata.description || localeText.noDescription;
  const date = metadata.date || localeText.noDate;
  const images = metadata.images || [];
  const tags = metadata.tags || [];

  return (
    <Link
      key={slug}
      href={`/blogs/${slug}`}
      aria-label={`${localeText.readPost}: ${title}`}
    >
      <div
        className="flex flex-col bg-white/90 backdrop-blur-sm p-4 rounded-2xl hover:cursor-pointer group h-full border border-gray-100 transition-all duration-500 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
      >
        {images[0] ? (
          <div className="relative w-full aspect-video mb-4 rounded-xl overflow-hidden">
            <Image
              src={images[0]}
              alt={title}
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="group-hover:scale-110 transition-transform duration-500 rounded-xl"
              priority
            />
          </div>
        ) : (
          <div className="w-full aspect-video bg-gradient-to-br from-purple-100 to-cyan-100 mb-4 rounded-xl" />
        )}
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <h3 className="group-hover:text-purple-600 transition-colors duration-300 font-semibold text-lg text-center text-gray-800 line-clamp-2">
              {title}
            </h3>
            <p className="my-2 text-center text-gray-500 text-sm max-w-[90%] mx-auto line-clamp-3">
              {description}
            </p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-2 justify-between md:items-end">
            <small className="text-center text-gray-400 md:text-left">
              {date}
            </small>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end md:max-w-[70%]">
              {tags.length > 0 ? (
                tags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full bg-purple-100 text-purple-600 text-xs px-3 py-1"
                  >
                    {tag}
                  </div>
                ))
              ) : (
                <div className="text-gray-400 text-xs">{localeText.noTags}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;