import {environment} from 'src/environments/environment'

export const baseUrl = environment.production ? 'http://api.sample.edamama.com' : 'http://localhost:3000'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'