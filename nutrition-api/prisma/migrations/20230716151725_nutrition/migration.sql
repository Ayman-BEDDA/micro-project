-- CreateTable
CREATE TABLE `Nutrition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `calories` INTEGER NOT NULL,
    `proteines` INTEGER NOT NULL,
    `lipides` INTEGER NOT NULL,
    `glucides` INTEGER NOT NULL,
    `fibres` INTEGER NOT NULL,
    `vitamines` VARCHAR(191) NOT NULL,
    `mineraux` VARCHAR(191) NOT NULL,
    `allergenes` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Nutrition_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
