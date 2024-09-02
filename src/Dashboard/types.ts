export interface Product {
  _id: string;
  code: string;
  quantity: number;
  price: number;
}

export interface cartProduct {
  code: string;
  quantity: number;
}

export interface quotationDataProps {
  name: string;
  email: string;
  products: cartProduct[];
}

export interface quatationType {
  _id: string;
  customer_name: string;
  customer_email: string;
  status: "Pending" | "Cancled" | "Approved";
  otp?: number;
  otp_expires_at: string;
  createdAt: string;
  updatedAt: string;
  grandTotal: number;
  products: Product[];
}

export interface quatationResType {
  success: boolean;
  message: string;
  newQuotationRequest: quatationType;
}

export interface ErrorResponse {
  status: number;
  data: {
    message: string;
    error: any;
    stack?: string;
  };
}

export interface quatationResType {
  success: boolean;
  quatations: quatationType[];
}

export interface productDetail {
  price: string | number;
  ancestry: string;
  code: string;
  createdAt: Date;
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
  source_id: string;
  updatedAt: Date;
  weight: Number;
  weight_unit_id: string;
  _id: string;
}

export interface prod {
  _id: string;
  code: string;
  price: number;
  quantity_requested: number;
  productDetails: productDetail;
}

export interface quotation {
  createdAt: Date;
  customer_email: string;
  customer_name: string;
  products: prod[];
  status: "Pending" | "Cancled" | "Approved";
  updatedAt: string;
  _id: string;
}

export interface QuotationByIdProps {
  success: boolean;
  quotation: quotation;
}

export interface paramsProps {
  keyword: string;
  page: number;
}

export interface orderedDetailType {
  _id: string;
  customer_name: string;
  customer_email: string;
  status: "Pending" | "Cancled" | "Approved";
  otp?: number;
  otp_expires_at: string;
  createdAt: string;
  updatedAt: string;
  grandTotal: number;
  products: prod[];
}

export interface productDetail {
  success: boolean;
  quote: orderedDetailType;
}

export interface successMessage {
  success: boolean;
  message: string;
}
