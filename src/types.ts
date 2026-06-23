export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface TrustItem {
  title: string;
  description: string;
  iconName: string;
}

export interface PetQuizAnswer {
  type: string;
  age: string;
  service: string;
}
