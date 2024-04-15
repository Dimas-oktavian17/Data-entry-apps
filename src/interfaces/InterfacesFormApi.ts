export interface LocationAPI {
 id: string
 name: string
}

export type StringOrNull = string | null
export interface Provinsi {
 id: string
 name: string
}
export interface City {
 id: string
 province_id: string
 name: string
}
export interface District {
 id: string
 regency_id: string
 name: string
}

export interface Villages {
 id: string
 district_id: string
 name: string
}