export type TBlogType = {
  slug: string;
  metadata: TMetaData;
  content: string;
};

export type TProcessedBlogType = {
  slug: string;
  metadata: TMetaData;
  contentHtml: string;
};

export type TMetaData = {
  title?: string;
  metaTitle?: string;
  date?: string;
  description?: string;
  images?: string[];
  tags?: string[];
}