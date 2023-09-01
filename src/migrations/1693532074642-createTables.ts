import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1693532074642 implements MigrationInterface {
    name = 'CreateTables1693532074642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_75facd1c24e1de014d33f1c4a42"`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying(45) NOT NULL, "zipCode" character varying(8) NOT NULL, "number" integer NOT NULL, "city" character varying(20) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_75facd1c24e1de014d33f1c4a42" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_75facd1c24e1de014d33f1c4a42"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_75facd1c24e1de014d33f1c4a42" FOREIGN KEY ("adressId") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
