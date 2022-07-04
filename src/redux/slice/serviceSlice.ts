import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: ServiceState = {
    services: null,
    service: null
}

export const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
        get_services: (state: ServiceState, action: PayloadAction<Service[]>) => {
            state.services = action.payload;
        },
        fail_services: (state: ServiceState, action: PayloadAction<string>) => {
            state.services = null;
        },
        get_service: (state: ServiceState, action: PayloadAction<ServiceDetail>) => {
            state.service = action.payload;
        },
        fail_service: (state: ServiceState, action: PayloadAction<string>) => {
            state.service = null;
        }



    }
});

export const {
    get_services,
    fail_services,
    get_service,
    fail_service
} = serviceSlice.actions


export default serviceSlice.reducer


export interface ServiceState {
    services: Service[] | null
    service: ServiceDetail | null
}


export interface ServiceDetail {
    id: number
    name: string
    title: string
    description: string
    slug: string
    plans: Plan[]
    func_services: FuncService[]
    benefits: Benefit[]
}


export interface Benefit {
    id: number
    title: string
    subtitle: string
}

export interface FuncService {
    id: number
    title: string
    sub_title: string
    func_list: Func[]
}

export interface Func {
    id: number
    name: string
}

export interface Plan {
    id: number
    name: string
    title: string
    description: string
    subtitle: string
    price: number
    compare_price: number
    renovation_price: number
    photo: string
    slug: string
    features: Feature[]
    is_recomented: string
}

export interface Feature {
    id: number
    name: string
    is_main: boolean
}

export interface Service {
    id: number
    name: string
    description: string
    slug: string
}
