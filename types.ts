import type React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactElement;
}

export interface CaseStudy {
  industry: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Article {
  title: string;
  excerpt: string;
  url: string;
}
