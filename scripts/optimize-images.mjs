import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const inputDir = path.resolve("assets-original");
const outputDir = path.resolve("public/images");

const rules = [
    {
        input: "logo.png",
        output: "logo.png",
        width: 512,
        height: 512,
        format: "png",
        fit: "contain",
    },
    {
        input: "jar.png",
        output: "jar.webp",
        width: 1000,
        height: 1000,
        format: "webp",
        fit: "contain",
    },
    {
        input: "melia-hero.png",
        output: "melia-hero.webp",
        width: 1200,
        height: 630,
        format: "webp",
        fit: "cover",
    },
    {
        input: "melia-hero.png",
        output: "og-image.webp",
        width: 1200,
        height: 630,
        format: "webp",
        fit: "cover",
    },
    {
        input: "presentacion-250g.png",
        output: "presentacion-250g.webp",
        width: 800,
        height: 800,
        format: "webp",
        fit: "cover",
    },
    {
        input: "paquete-regalo.png",
        output: "paquete-regalo.webp",
        width: 800,
        height: 800,
        format: "webp",
        fit: "cover",
    },
    {
        input: "pedido-especial.png",
        output: "pedido-especial.webp",
        width: 800,
        height: 800,
        format: "webp",
        fit: "cover",
    },
];

await fs.mkdir(outputDir, { recursive: true });

for (const rule of rules) {
    const inputPath = path.join(inputDir, rule.input);
    const outputPath = path.join(outputDir, rule.output);

    try {
        let image = sharp(inputPath).resize({
            width: rule.width,
            height: rule.height,
            fit: rule.fit,
            background: { r: 255, g: 249, b: 238, alpha: 0 },
            withoutEnlargement: true,
        });

        if (rule.format === "webp") {
            image = image.webp({ quality: 82, effort: 6 });
        }

        if (rule.format === "png") {
            image = image.png({
                compressionLevel: 9,
                quality: 90,
                effort: 10,
            });
        }

        await image.toFile(outputPath);
        console.log(`Optimized: ${rule.input} → ${rule.output}`);
    } catch (error) {
        console.warn(`Skipped: ${rule.input}`);
        console.warn("Reason:", error.message);
    }
}