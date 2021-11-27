export interface IResults {
  answers: string[];
  device_region: string;
  device_type: string;
  image_results?: {
    image: {
      src: string;
    };
    link: {
      href: string;
      title: string;
    };
  }[];
  results?: {
    additional_links: {
      href: string;
      text: string;
    }[];
    cite: {
      domain: string;
      span: string;
    };
    description: string;
    link: string;
    title: string;
  }[];
  entries?: {
    links?: {
      href: string;
      rel: string;
      type: string;
    }[];
    source?: {
      href: string;
      title: string;
    };
    title: string;
    id: string;
    guidislink: boolean;
    link: string;
    published: string;
    published_parsed: number[];
    sub_articles: {
      publisher: string;
      title: string;
      url: string;
    }[];
    summary: string;
    summary_detail: {
      base: string;
      language: string | null;
      type: string;
      value: string;
    };
    title_detail: {
      base: string;
      language: string | null;
      type: string;
      value: string;
    };
  }[];
  total: number;
  ts: number;
}
