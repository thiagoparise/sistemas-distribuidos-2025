import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "database.json");

export interface Pokemon {
    name: string;
    id: number;
    sprites: { front_default: string };
    types: {
        slot: number;
        type: { name: string; url: string };
    }[];
    abilities: {
        ability: { name: string; url: string };
        is_hidden: boolean;
        slot: number;
    }[];
};

class Database {
    private async readDB(): Promise<Pokemon[]> {
        try {
            const data = await fs.readFile(DB_PATH, "utf-8");
            return JSON.parse(data);
        } catch (error) {
        // Si el archivo no existe, devolver array vacío
            return [];
        }
    }

    private async writeDB(data: Pokemon[]): Promise<void> {
        await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
    }

    async getAll(): Promise<Pokemon[]> {
        return await this.readDB();
    }

    async getById(id: number): Promise<Pokemon | undefined> {
        const data = await this.readDB();
        return data.find((item) => item.id === id);
    }

    async create(product: Omit<Pokemon, "id">): Promise<Pokemon> {
        const data = await this.readDB();
        const newProduct: Pokemon = {
            id: data.length > 0 ? Math.max(...data.map((p) => p.id)) + 1 : 1,
            ...product,
        };
        data.push(newProduct);
        await this.writeDB(data);
        return newProduct;
    }

    async delete(id: number): Promise<boolean> {
        const data = await this.readDB();
        const initialLength = data.length;
        const filtered = data.filter((item) => item.id !== id);
        
        if (filtered.length === initialLength) {
            return false; // No se encontró el elemento
        }
        
        await this.writeDB(filtered);
        return true;
    }

    async update(id: number, updates: Partial<Omit<Pokemon, "id">>): Promise<Pokemon | null> {
        const data = await this.readDB();
        const index = data.findIndex((item) => item.id === id);
        
        if (index === -1) {
            return null;
        }
        
        data[index] = { ...data[index], ...updates };
        await this.writeDB(data);
        return data[index];
    }
}

export const db = new Database();