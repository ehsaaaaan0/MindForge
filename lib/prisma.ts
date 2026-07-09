import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client";

const golabalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function createPrismaClient(){
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL!,
    });
    const adapter = new PrismaPg(pool);

    return new PrismaClient({ adapter });
}

export const db = golabalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") golabalForPrisma.prisma = db;