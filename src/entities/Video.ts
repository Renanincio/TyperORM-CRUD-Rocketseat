import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import crypto from "crypto"
import { Category } from "./Category";

@Entity("videos")
export class Video {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({name: "category_id"})
    category: Category;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = crypto.randomUUID();
        }
    }
}