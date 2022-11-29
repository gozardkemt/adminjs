import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public firstName: string

  @Column()
  public lastName: string

  @Column()
  public age: number
}
