export declare module BroadbandResult {

    export interface Period {
        months?: number;
        amount: number;
    }

    export interface Price {
        periods: Period[];
        firstYear: number;
        totalContractCost: number;
        upFrontCost: number;
        upsell?: any;
        selectedOptions: any[];
    }

    export interface LabelValue {
        label: string;
        sortValue: string | number;
    }

    export interface Mobile {
        minutes: LabelValue;
        data: LabelValue;
        texts: LabelValue;
        connectionType: LabelValue;
    }

    export interface Offer {
        type: string;
        title: string;
        smallLogo: string;
        expiresAt: Date;
    }

    export interface Provider {
        id: number;
        name: string;
        logo: string;
    }

    export interface UpfrontCost {
        name: string;
        price: number;
    }

    export interface PremiumFeatures {
        BTSport?: boolean;
        ComedyCentral?: boolean;
        DiscoveryChannel?: boolean;
        CartoonNetwork?: boolean;
        DisneyChannel?: boolean;
    }

    export interface PopularChannel {
        name: string;
        channelCategory: string;
        logo: string;
    }

    export interface Extras {
        sortValue: number;
        labels: string[];
    }

    export interface Deal {
        title: string;
        prices: Price[];
        id: number;
        contractLength: number;
        tvProduct: string;
        standardChannels: LabelValue;
        totalChannels: LabelValue;
        hdChannels: LabelValue;
        speed: LabelValue;
        uploadSpeed: LabelValue;
        usage: LabelValue;
        mobile: Mobile;
        offer: Offer;
        provider: Provider;
        newLineCost: number;
        upfrontCosts: UpfrontCost[];
        productTypes: string[];
        premiumFeatures: PremiumFeatures;
        popularChannels: PopularChannel[];
        telephoneNumber: string;
        extras: Extras;
        broadbandType: string;
    }

    export interface RootObject {
        deals: Deal[];
    }

}
