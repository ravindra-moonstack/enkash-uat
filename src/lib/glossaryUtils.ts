import fs from 'fs';
import path from 'path';

const JSON_PATH = path.join(process.cwd(), 'public', 'glossary-data.json');

export const getGlossaryJson = () => {
    try {
        if (!fs.existsSync(JSON_PATH)) return [];
        const fileContent = fs.readFileSync(JSON_PATH, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error("Error reading glossary JSON:", error);
        return [];
    }
}

export const saveGlossaryJson = (data: any[]) => {
    try {
        // Sort by word alphabetically
        data.sort((a, b) => a.word.localeCompare(b.word));
        
        const dir = path.dirname(JSON_PATH);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error("Error saving glossary JSON:", error);
        return false;
    }
}

export const addToGlossaryJson = (item: { id: number, word: string, slug: string }) => {
    const data = getGlossaryJson();
    // Check if exists to avoid duplicates (though ID should be unique)
    const exists = data.some((i: any) => i.id === Number(item.id));
    if (!exists) {
        data.push({
            id: Number(item.id),
            word: item.word,
            slug: item.slug
        });
        return saveGlossaryJson(data);
    }
    return false;
}

export const updateInGlossaryJson = (item: { id: number, word: string, slug: string }) => {
    const data = getGlossaryJson();
    const index = data.findIndex((i: any) => i.id === Number(item.id));
    if (index !== -1) {
        data[index] = { 
            ...data[index],
            word: item.word,
            slug: item.slug
        };
        return saveGlossaryJson(data);
    }
    return false;
}

export const deleteFromGlossaryJson = (id: number) => {
    const data = getGlossaryJson();
    // Filter out the item
    const newData = data.filter((i: any) => i.id !== Number(id));
    if (data.length !== newData.length) {
        return saveGlossaryJson(newData);
    }
    return false;
}
