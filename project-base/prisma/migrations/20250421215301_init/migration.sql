-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('admin', 'usuario');

-- CreateTable
CREATE TABLE "Crianca" (
    "id_crianca" SERIAL NOT NULL,
    "id_responsavel" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,

    CONSTRAINT "Crianca_pkey" PRIMARY KEY ("id_crianca")
);

-- CreateTable
CREATE TABLE "Responsavel" (
    "id_responsavel" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "parentesco_com_crianca" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ocupacao" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "Responsavel_pkey" PRIMARY KEY ("id_responsavel")
);

-- CreateTable
CREATE TABLE "Voluntario" (
    "id_voluntario" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "disponibilidade" TEXT NOT NULL,
    "area_atuacao" TEXT NOT NULL,
    "respondeu_questionario" BOOLEAN NOT NULL,
    "aceitou_termos" BOOLEAN NOT NULL,

    CONSTRAINT "Voluntario_pkey" PRIMARY KEY ("id_voluntario")
);

-- CreateTable
CREATE TABLE "Parceiro" (
    "id_parceiro" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "contribuicao" TEXT NOT NULL,

    CONSTRAINT "Parceiro_pkey" PRIMARY KEY ("id_parceiro")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "perfil" "TipoUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Frequencia" (
    "id_frequencia" SERIAL NOT NULL,
    "id_crianca" INTEGER NOT NULL,
    "atividade" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "presenca" BOOLEAN NOT NULL,

    CONSTRAINT "Frequencia_pkey" PRIMARY KEY ("id_frequencia")
);

-- CreateTable
CREATE TABLE "CestaBasica" (
    "id_cesta" SERIAL NOT NULL,
    "id_responsavel" INTEGER NOT NULL,
    "data_entrega" TIMESTAMP(3) NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "observacoes" TEXT NOT NULL,

    CONSTRAINT "CestaBasica_pkey" PRIMARY KEY ("id_cesta")
);

-- CreateIndex
CREATE UNIQUE INDEX "Crianca_cpf_key" ON "Crianca"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Responsavel_cpf_key" ON "Responsavel"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Voluntario_cpf_key" ON "Voluntario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Crianca" ADD CONSTRAINT "Crianca_id_responsavel_fkey" FOREIGN KEY ("id_responsavel") REFERENCES "Responsavel"("id_responsavel") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Frequencia" ADD CONSTRAINT "Frequencia_id_crianca_fkey" FOREIGN KEY ("id_crianca") REFERENCES "Crianca"("id_crianca") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CestaBasica" ADD CONSTRAINT "CestaBasica_id_responsavel_fkey" FOREIGN KEY ("id_responsavel") REFERENCES "Responsavel"("id_responsavel") ON DELETE RESTRICT ON UPDATE CASCADE;
