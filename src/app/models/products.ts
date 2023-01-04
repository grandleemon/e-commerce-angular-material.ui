export interface IProduct {
  id: number
  title: string
  year: number
  price: number
  image?: string
  configure: IProductConfig
}

export interface IProductConfig {
  chip: string
  SSD: string
  memory: string
  display: string
}
