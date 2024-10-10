/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Window {
  [key: string]: any;
}

export interface Module {
  selector: string,
  include: (el: any) => { init: () => void }
}