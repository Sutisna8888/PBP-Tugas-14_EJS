-- CreateTable
CREATE TABLE `Sepatu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `ukuran` DOUBLE NOT NULL,
    `warnaDominan` VARCHAR(191) NOT NULL,
    `harga` DOUBLE NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `bahan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
