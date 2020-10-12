import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * Sample database model
 */
@Entity()
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 100 })
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
