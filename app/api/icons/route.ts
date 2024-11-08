import * as fs from "node:fs";
import {NextResponse} from "next/server";

export async function GET() {
    const data: string[] = await fs.readdirSync('./public/icons')

    const names: string[] = data.map((item)=>item.split('.')[0])

    const single: string[]= names.filter(e=> !e.toLowerCase().includes('-'));
    const plural: string[]= names.filter(e=> e.toLowerCase().includes('-'));

    return NextResponse.json({single, plural});
}