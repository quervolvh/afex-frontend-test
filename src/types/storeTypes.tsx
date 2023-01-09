export type authType = {
    token?: string,
    expiresAt?: string
}

export type routeType = {
    currentPath: {
        fullPath?: string,
        queries?: { [key: string]: string },
        specificPath?: string
    },
    previousPath: {
        fullPath?: string,
        queries?: { [key: string]: string },
        specificPath?: string
    },
    tempPath: {
        fullPath?: string,
        queries?: { [key: string]: string },
        specificPath?: string
    },
    navigating: boolean,
    visitationTrack: string[]
}

export type toastType = {
    timer: number,
    nature?: string,
    manualDismiss?: boolean,
    toDismiss?: string,
    toast?: { id: string, text: string },
    toasts: { id: string, text: string, new: boolean }[]
}

export type workerType = {
    activity: string[],
    refreshing: boolean
}

export type utilType = {
    cities: {
        loader: boolean,
        error: boolean,
        data: {
            [key: string]: { name: string, id: string }[]
        }
    },
    states: {
        loader: boolean,
        error: boolean,
        data: { name: string, id: string }[]
    }
}

export type tradeType = {

    logs: {

        messages: {

            security_code: string,

            board_type: string,

            order_type: string,

            order_price: number,

            units: string,

            created: string,

        }[],

        loader: boolean

    },

    products: {


        items: {

            "code": string,
            "name": string,
            "board": {
                "code": string,
                "name": string
            },
            "board_code": string,
            "commodity_code": string,
            "location_basis_code": string,
            "created": string,
            "commodity_image_url": string,
            "is_virtual_security": string,
            "volume_per_unit": string,
            "security_type": string,
            "season_to_date_change": string,
            "best_buy": string,
            "best_sell": string,
            "no_of_deals": string,
            "daily_change": string,
            "can_be_bought": string,
            "can_be_sold": string,
            "show_on_demo": string,
            "show_on_live": string,
            "use_ecn_fees": string
        }[],

        loader: boolean

    }

}

export interface storeInterface {
    auth: authType,
    route: routeType
    toast: toastType,
    util: utilType,
    worker: workerType,
    trade: tradeType
}
