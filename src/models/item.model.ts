/**
 * Sample request body model used in ItemController to create items
 */
export interface ItemRequest {
  name: string;
}

/**
 * Sample response body model used in ItemController to represent items from database
 */
export interface ItemResponse {
  id: number;
  name: string;
}
