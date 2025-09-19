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
}
