export interface EnergyDrink {
  id: null,
  type: string,
  name: string,
  fizzLevel: number
}

export const emptyEnergyDrink: EnergyDrink = {
  id: null,
  type: '',
  name: '',
  fizzLevel: null
}

export interface User {
  id: null,
  email: string,
  password: string
}
