// tslint:disable:variable-name

import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
 } from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("uuid")
    @Generated("uuid")
    public id: string;

    @Column("varchar", { length: 45 })
    public first_name: string;

    @Column("varchar", { length: 45 })
    public last_name: string;

    @Column("varchar", { length: 45 })
    public email: string;

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;

}
