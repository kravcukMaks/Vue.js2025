import 'pinia'
import type { PersistOptions } from 'pinia-plugin-persistedstate'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    persist?: boolean | PersistOptions<Store>
  }
}
