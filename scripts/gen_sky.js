const fs = require('fs');

const API_KEY = "sk_live_FTTm5EpPJDdPhWR8CkHa4g";
const ENDPOINT = "https://api.quiver.ai/v1/svgs/generations";

async function generateSvg(prompt, filename) {
    try {
        console.log(`Generating: ${filename}...`);
        const response = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "arrow-preview",
                stream: false,
                prompt: prompt
            })
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`API Error: ${response.status} ${text}`);
        }

        const data = await response.json();
        const svg = data.data[0].svg;

        fs.writeFileSync(filename, svg);
        console.log(`Saved: ${filename}`);
    } catch (e) {
        console.error(`Failed to generate ${filename}:`, e);
    }
}

async function main() {
    await generateSvg(
        "A beautiful, elegant flat vector illustration of a warm, bright midday sun with stylized rays, soft golden color, mature storybook watercolor style, isolated on transparent background.",
        "/Users/tony/Documents/zoe-landing/public/assets/illustrations/Parallax/sun.svg"
    );

    await generateSvg(
        "A beautiful, elegant flat vector illustration of a glowing crescent moon, soft pale blueish-white color, mature storybook watercolor style, isolated on transparent background.",
        "/Users/tony/Documents/zoe-landing/public/assets/illustrations/Parallax/moon.svg"
    );

    await generateSvg(
        "A cluster of elegant minimalist 4-point stars, glowing white, scattered organically, isolated on transparent background.",
        "/Users/tony/Documents/zoe-landing/public/assets/illustrations/Parallax/stars.svg"
    );
}

main();
