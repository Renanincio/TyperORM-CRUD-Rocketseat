import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateVideos1686784292999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "videos",
                columns: [
                    {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "category_id",
                    type: "uuid"
                },
                {
                    name: "duration",
                    type: "numeric"
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [{
                name: "videos_category_id_fkey",
                columnNames: ["category_id"],
                referencedTableName: "categories",
                referencedColumnNames: ["id"]
            }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("videos")
    }

}
