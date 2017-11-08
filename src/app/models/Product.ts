import {TypeOfProductEnum} from "./typeOfProductEnum";

export interface Product {
  name?: string;
  price?: string;
  photo?: string;
  type?: TypeOfProductEnum;
}
