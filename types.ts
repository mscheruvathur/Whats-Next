export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: null;
}

export interface Products {
    id: number;
    title: string;
}

export interface GetProductsResult {
    map(arg0: (product: any) => { params: { productId: string; }; }): unknown;
    info: Info
    result: Products[]
}

