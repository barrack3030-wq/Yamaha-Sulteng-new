export interface Motorcycle {
  id: string;
  name: string;
  series: 'Maxi Series' | 'Classy Series' | 'Matic Praktis' | 'Sport & Adventure';
  tagline: string;
  engine: string;
  power: string;
  torque: string;
  fuelSystem: string;
  fuelCapacity: string;
  features: string[];
  bestFor: string;
  targetRegion: string[];
  image: string;
  badge?: string;
  transmission: string;
  starter: string;
  curbWeight: string;
}

export interface RegionalArea {
  id: 'toili' | 'luwuk' | 'morowali';
  name: string;
  district: string;
  headline: string;
  description: string;
  coverage: string[];
  popularModels: string[];
  keyHighlight: string;
  whatsappMessage: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'harga' | 'kredit' | 'pengiriman' | 'berkas';
}
