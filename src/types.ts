export type ThemeMode = "ruby-cashmere";

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  price: number;
  duration: string;
  popular?: boolean;
  features: string[];
}

export interface ServiceCategory {
  id: string;
  categoryName: string;
  badge: string;
  description: string;
  examples: string;
  items: ServiceItem[];
}

export interface ReviewItem {
  id: string;
  author: string;
  pet: string;
  breed: string;
  rating: number;
  date: string;
  comment: string;
  avatarUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Allgemein" | "Ablauf" | "Gesundheit" | "Preise";
}

export interface TransformationItem {
  id: string;
  name: string;
  breed: string;
  treatment: string;
  quote: string;
  beforeImg: string;
  afterImg: string;
}
