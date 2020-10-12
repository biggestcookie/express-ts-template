import { ItemEntity } from "@/entities/item.entity";
import { ItemRequest, ItemResponse } from "@/models/item.model";
import { Controller } from "@/utils/controller";
import { Request, Response } from "express";
import { getRepository } from "typeorm";

/**
 * Sample route that gets and creates items in the database.
 */
export default class ItemController extends Controller {
  public basePath = "/item";
  private itemRepository = getRepository(ItemEntity);

  constructor() {
    super();
    this.router.get("/:id", this.getItemById.bind(this));
    this.router.post("/", this.createItem.bind(this));
  }

  /**
   * Route at /api/item/:id
   * Returns an item from the database with the given id
   */
  async getItemById(request: Request, response: Response): Promise<Response> {
    try {
      const itemId = request.params["id"];
      const item = await this.itemRepository.findOneOrFail(itemId);
      return response.send(item);
    } catch (error) {
      console.error(error);
      return response.status(404).send("Could not find item with that ID");
    }
  }

  /**
   * Route at /api/item
   * Creates and returns item in the database with a random id and the given name
   */
  async createItem(request: Request, response: Response): Promise<Response> {
    try {
      const itemBody: ItemRequest = request.body;
      const itemEntity = new ItemEntity(itemBody.name);
      const createdItem = await this.itemRepository.save(itemEntity);
      const itemResponse: ItemResponse = {
        id: createdItem.id,
        name: createdItem.name,
      };
      return response.status(200).send(itemResponse);
    } catch (error) {
      console.log(error);
      return response.status(500).send(error);
    }
  }
}
