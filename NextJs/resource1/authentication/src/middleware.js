import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request){
const path=request.nextUrl.pathname;
const checkPublicPath=path==='/sign-in' || path==='/sign-up';
const Cookies=cookies();
const token= Cookies.get('token');

if(checkPublicPath && token !==""){
    return NextResponse.redirect(new URL('/',request.nextUrl));
}

if(!checkPublicPath && token ===""){
    console.log("jgjhgjhg")
    return NextResponse.redirect(new URL("/sign-in"),request.nextUrl);
}
}

export const config={
    matcher:["/sign-in","/sign-up"]
}