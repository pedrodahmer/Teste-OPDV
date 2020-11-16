    export interface GarnishIten {
        id: string;
        code: string;
        description: string;
        unitPrice: number;
        availability: string;
        posCode: string;
        tags: any[];
        enabled: boolean;
        details: string;
    }

    export interface Choice {
        code: string;
        name: string;
        min: number;
        max: number;
        order: number;
        availability: string;
        garnishItens: GarnishIten[];
        enabled: boolean;
    }

    export interface OpeningHour {
        dayOfWeek: string;
        openingTime: number;
        closingTime: number;
    }

    export interface ProductTag {
        group: string;
        tags: string[];
    }

    export interface Iten {
        id: string;
        code: string;
        description: string;
        details: string;
        logoUrl: string;
        taxonomyName: string;
        needChoices: boolean;
        choices: Choice[];
        unitPrice: number;
        unitMinPrice: number;
        order: number;
        availability: string;
        posCode: string;
        openingHours: OpeningHour[];
        discoveryTags: any[];
        tags: string[];
        operationModes: string[];
        productTags: ProductTag[];
        enabled: boolean;
        unitOriginalPrice?: number;
    }

    export interface Menu {
        code: string;
        name: string;
        itens: Iten[];
        order: number;
        enabled: boolean;
    }

    export interface Data {
        menu: Menu[];
    }

    export interface RootObject {
        code: string;
        data: Data;
    }


