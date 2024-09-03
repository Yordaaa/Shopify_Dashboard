export interface categoryResTyp {
  _id: string;
  category: string;
  categoryImg: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface productResTyp {
  ancestry: string;
  code: string;
  createdAt: string;
  customs_description: string;
  description: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  hs_code: string;
  hs_description: string;
  leaf: boolean;
  name: string;
  preferred_units: string;
  productImg: string;
  source_id: {
    name: string;
    description: string;
    contact_info: {
      phoneNumber: string;
      email: string;
    };
  };
  updatedAt: string;
  weight: number;
  weight_unit_id: string;
  _id: string;
}

export interface ProductCardProps {
  products: productResTyp[];
  filteredProductCount: number;
  resPerPage: number;
}

export interface productIdProps {
  id: string;
}

export interface CartItem extends productResTyp {
  quantity: number;
  price: number;
}
export interface RegistrationInputProps {
  apiKey: string;
  apiSecretKey: string;
  shopUrl: string;
  accessToken: string;
}
export interface WooCommerceRegistrationInputProps {
  url: string;
  consumerKey: string;
  consumerSecret: string;
}

export interface RegistrationResponseProps {
  success: boolean;
  message?: string;
}

export interface userTypeProps {
  _id: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserInputProps {
  email: string;
  password: string;
}

export interface UserResponseProps {
  success: boolean;
  userInfo: userTypeProps;
}
