import {MigrationInterface, QueryRunner} from "typeorm";

export class technology1625163340899 implements MigrationInterface {
    name = 'technology1625163340899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "technology" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_89f217a9ebf9b4bc1a0d74883ec" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "technology"`);
    }

}
