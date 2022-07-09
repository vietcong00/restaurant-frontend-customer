export interface ICategory {
    id: number | string;
    name: string;
}

export interface IGetCategories {
    categories: Array<ICategory>;
}

export interface IPageObject {
    [key: string]: number | string;
}

export type TModalType = 'Create' | 'Edit' | 'Close';

export interface ITextItem {
    name: string;
    number: number;
}

export interface ILogInForm {
    email: string | undefined;
    password: string | undefined;
}

export interface IFood {
    id: number;
    name: string;
    price: string;
    imgLink: string;
}

export interface IGetFoods {
    foods: Array<IFood>;
    totalProduct: number;
}

export interface ITable {
    id: number;
    name: string;
    status: string;
    numberSeat: number;
    idRestaurant: number;
}

export interface IGetTables {
    tables: Array<ITable>;
    totalProduct: number;
}

export interface IPatchQueryTable {
    status: string;
    nameCustomer: string;
    phone: string;
    arrivalTime: number;
}
export interface IRestaurant {
    id: number;
    name: string;
    address: string;
    phone: string;
}

export interface IGetRestaurant {
    tables: Array<IRestaurant>;
    totalProduct: number;
}

export interface IPostQueryBooking {
    numberPeople: number;
    nameCustomer: string;
    phone: string;
    arrivalTime: Date | string;
}
