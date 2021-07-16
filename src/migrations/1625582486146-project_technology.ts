import { MigrationInterface, QueryRunner } from 'typeorm';

export class projectTechnology1625582486146 implements MigrationInterface {
  name = 'projectTechnology1625582486146';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "project_technologies" ("projectId" integer NOT NULL, "technologyId" integer NOT NULL, CONSTRAINT "PK_abaaeb1b993b4480923602e957d" PRIMARY KEY ("projectId", "technologyId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_060c20ff18e52766bce563b052" ON "project_technologies" ("projectId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f8d58af88a6743390a911f257a" ON "project_technologies" ("technologyId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "project_technologies" ADD CONSTRAINT "FK_060c20ff18e52766bce563b0523" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_technologies" ADD CONSTRAINT "FK_f8d58af88a6743390a911f257a7" FOREIGN KEY ("technologyId") REFERENCES "technology"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "project_technologies" DROP CONSTRAINT "FK_f8d58af88a6743390a911f257a7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_technologies" DROP CONSTRAINT "FK_060c20ff18e52766bce563b0523"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_f8d58af88a6743390a911f257a"`);
    await queryRunner.query(`DROP INDEX "IDX_060c20ff18e52766bce563b052"`);
    await queryRunner.query(`DROP TABLE "project_technologies"`);
  }
}
