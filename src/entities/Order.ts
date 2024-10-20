export interface OrderInfo {
  data: OrderData;
}

export interface OrderData {
  cardApiDtoList: CardApiDtoList[];
}

export interface CardApiDtoList {
  data: string;
  usedMB: string;
}
