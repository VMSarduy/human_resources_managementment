-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `numero_trab` INTEGER NOT NULL,
    `numero_ci` VARCHAR(191) NOT NULL,
    `edad` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `grupo_area` VARCHAR(191) NULL,
    `area` VARCHAR(191) NOT NULL,
    `raza` VARCHAR(191) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `nive_escolar` VARCHAR(191) NOT NULL,
    `especialidad` VARCHAR(191) NULL,
    `direccion` VARCHAR(191) NULL,
    `telefono` VARCHAR(191) NULL,
    `cat_ocupa` VARCHAR(191) NOT NULL,
    `fecha_entrada` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fecha_baja` DATETIME(3) NULL,
    `juvilado` BOOLEAN NOT NULL DEFAULT false,
    `cat_docent` DOUBLE NULL,
    `hora_irreg` DOUBLE NULL,
    `certificacion` DOUBLE NULL,
    `maestria` DOUBLE NULL,
    `dortorado` DOUBLE NULL,
    `grupo_escala` VARCHAR(191) NOT NULL,
    `escala` DOUBLE NOT NULL,
    `isadmin` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_numero_trab_key`(`numero_trab`),
    UNIQUE INDEX `User_numero_ci_key`(`numero_ci`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Baja` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anno` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `descrip` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Baja_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Talla` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `calsado` DOUBLE NOT NULL,
    `ropa` VARCHAR(191) NOT NULL,
    `oder` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Talla_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estud_actual` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lugar` VARCHAR(191) NOT NULL,
    `anno` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `descrip` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Estud_actual_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reg_milit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lugar` VARCHAR(191) NOT NULL,
    `anno` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `descrip` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Reg_milit_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Baja` ADD CONSTRAINT `Baja_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Talla` ADD CONSTRAINT `Talla_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Estud_actual` ADD CONSTRAINT `Estud_actual_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reg_milit` ADD CONSTRAINT `Reg_milit_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
