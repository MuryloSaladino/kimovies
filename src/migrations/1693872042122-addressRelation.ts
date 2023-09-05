import { MigrationInterface, QueryRunner } from "typeorm";

export class AddressRelation1693872042122 implements MigrationInterface {
    name = 'AddressRelation1693872042122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_75facd1c24e1de014d33f1c4a42"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "REL_75facd1c24e1de014d33f1c4a4"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "adressId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "UQ_c7a1c763ff260ac28674afa8c60" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "createdAt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "updatedAt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedAt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "updatedAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "createdAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "UQ_c7a1c763ff260ac28674afa8c60"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "adressId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "REL_75facd1c24e1de014d33f1c4a4" UNIQUE ("adressId")`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_75facd1c24e1de014d33f1c4a42" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
