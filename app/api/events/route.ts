import {NextRequest, NextResponse} from "next/server";

import {Data} from "@/app/activities/data";


export async function GET(request: NextRequest) {
    return NextResponse.json(Data);
}