/*
  Warnings:

  - The primary key for the `CestaBasica` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Crianca` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Frequencia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Parceiro` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Responsavel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Voluntario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "CestaBasica" DROP CONSTRAINT "CestaBasica_id_responsavel_fkey";

-- DropForeignKey
ALTER TABLE "Crianca" DROP CONSTRAINT "Crianca_id_responsavel_fkey";

-- DropForeignKey
ALTER TABLE "Frequencia" DROP CONSTRAINT "Frequencia_id_crianca_fkey";

-- AlterTable
ALTER TABLE "CestaBasica" DROP CONSTRAINT "CestaBasica_pkey",
ALTER COLUMN "id_cesta" DROP DEFAULT,
ALTER COLUMN "id_cesta" SET DATA TYPE BIGINT,
ALTER COLUMN "id_responsavel" SET DATA TYPE BIGINT,
ADD CONSTRAINT "CestaBasica_pkey" PRIMARY KEY ("id_cesta");
DROP SEQUENCE "CestaBasica_id_cesta_seq";

-- AlterTable
ALTER TABLE "Crianca" DROP CONSTRAINT "Crianca_pkey",
ALTER COLUMN "id_crianca" DROP DEFAULT,
ALTER COLUMN "id_crianca" SET DATA TYPE BIGINT,
ALTER COLUMN "id_responsavel" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Crianca_pkey" PRIMARY KEY ("id_crianca");
DROP SEQUENCE "Crianca_id_crianca_seq";

-- AlterTable
ALTER TABLE "Frequencia" DROP CONSTRAINT "Frequencia_pkey",
ALTER COLUMN "id_frequencia" DROP DEFAULT,
ALTER COLUMN "id_frequencia" SET DATA TYPE BIGINT,
ALTER COLUMN "id_crianca" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Frequencia_pkey" PRIMARY KEY ("id_frequencia");
DROP SEQUENCE "Frequencia_id_frequencia_seq";

-- AlterTable
ALTER TABLE "Parceiro" DROP CONSTRAINT "Parceiro_pkey",
ALTER COLUMN "id_parceiro" DROP DEFAULT,
ALTER COLUMN "id_parceiro" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Parceiro_pkey" PRIMARY KEY ("id_parceiro");
DROP SEQUENCE "Parceiro_id_parceiro_seq";

-- AlterTable
ALTER TABLE "Responsavel" DROP CONSTRAINT "Responsavel_pkey",
ALTER COLUMN "id_responsavel" DROP DEFAULT,
ALTER COLUMN "id_responsavel" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Responsavel_pkey" PRIMARY KEY ("id_responsavel");
DROP SEQUENCE "Responsavel_id_responsavel_seq";

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
ALTER COLUMN "id_usuario" DROP DEFAULT,
ALTER COLUMN "id_usuario" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario");
DROP SEQUENCE "Usuario_id_usuario_seq";

-- AlterTable
ALTER TABLE "Voluntario" DROP CONSTRAINT "Voluntario_pkey",
ALTER COLUMN "id_voluntario" DROP DEFAULT,
ALTER COLUMN "id_voluntario" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Voluntario_pkey" PRIMARY KEY ("id_voluntario");
DROP SEQUENCE "Voluntario_id_voluntario_seq";

-- AddForeignKey
ALTER TABLE "Crianca" ADD CONSTRAINT "Crianca_id_responsavel_fkey" FOREIGN KEY ("id_responsavel") REFERENCES "Responsavel"("id_responsavel") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Frequencia" ADD CONSTRAINT "Frequencia_id_crianca_fkey" FOREIGN KEY ("id_crianca") REFERENCES "Crianca"("id_crianca") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CestaBasica" ADD CONSTRAINT "CestaBasica_id_responsavel_fkey" FOREIGN KEY ("id_responsavel") REFERENCES "Responsavel"("id_responsavel") ON DELETE RESTRICT ON UPDATE CASCADE;