import { menuStore } from "./module/menu";
import { userStore } from "./module/user";
import { orderStore } from "./module/order"
import { commonStore } from "./module/common";
import { highlightStore } from "./module/highlight";

export interface RootStore {
}


export interface AllStoreTypes extends RootStore {
      menu: menuStore,
      user: userStore,
      order: orderStore
      common: commonStore
      highlight: highlightStore
}