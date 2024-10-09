/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Window {
  [key: string]: any;
}

export interface Module {
  selector: string,
  include: (el: any) => { init: () => void }
}

export interface Basket {
  init: () => void
}

export interface BasketItem {
  title: string;
  price: string,
  size: string,
  quantity: string,
  image: string,
  currency: string;
}

export interface Summary {
  init: () => void
}

export interface Post {
  init: () => void
}

export interface Options {
  init: () => void
}

export interface Header {
  init: () => void
}
