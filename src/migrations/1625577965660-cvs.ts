import { MigrationInterface, QueryRunner } from 'typeorm';

export class cvs1625577965660 implements MigrationInterface {
  name = 'cvs1625577965660';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cv" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "dob" TIMESTAMP NOT NULL, "position" character varying NOT NULL, "description" character varying NOT NULL, "start_of_experience" TIMESTAMP NOT NULL, "experience" character varying NOT NULL, "english_level" character varying NOT NULL, "communication_skills" character varying NOT NULL, CONSTRAINT "PK_4ddf7891daf83c3506efa503bb8" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cv"`);
  }
}
