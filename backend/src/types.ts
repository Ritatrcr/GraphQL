export type Breed = {
  id: string;
  name: string;
  temperament?: string;
  origin?: string;
  description?: string;
  life_span?: string;
  wikipedia_url?: string;
  weight_imperial?: string;
  weight_metric?: string;
  image_url?: string | null;
};

export type Student = {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  age?: number;
};
