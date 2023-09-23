import {NextRequest, NextResponse} from "next/server";

import type { NextApiRequest, NextApiResponse } from 'next'

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug // 'a', 'b', or 'c'
}