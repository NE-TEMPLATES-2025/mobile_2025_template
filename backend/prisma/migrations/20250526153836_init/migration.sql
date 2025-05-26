-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'ATTENDANT');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parking" (
    "code" TEXT NOT NULL,
    "parking_name" TEXT NOT NULL,
    "available_spaces" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "charging_fee_per_hour" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Parking_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "car_movements" (
    "id" TEXT NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "parkingCode" TEXT NOT NULL,
    "entry_date_time" TIMESTAMP(3) NOT NULL,
    "exit_date_time" TIMESTAMP(3) DEFAULT NULL,
    "charged_amount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "car_movements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" SERIAL NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "parkingCode" TEXT NOT NULL,
    "entry_date_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bills" (
    "id" SERIAL NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "parkingCode" TEXT NOT NULL,
    "entry_date_time" TIMESTAMP(3) NOT NULL,
    "exit_date_time" TIMESTAMP(3),
    "charged_amount" INTEGER NOT NULL,

    CONSTRAINT "bills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Parking_code_key" ON "Parking"("code");

-- AddForeignKey
ALTER TABLE "Parking" ADD CONSTRAINT "Parking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car_movements" ADD CONSTRAINT "car_movements_parkingCode_fkey" FOREIGN KEY ("parkingCode") REFERENCES "Parking"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
