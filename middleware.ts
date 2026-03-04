import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const isJesusRed = hostname.includes('jesus.red');
  
  if (isJesusRed) {
    const url = request.nextUrl.clone();
    
    // Rewrite root to /jesus-red page
    if (url.pathname === '/') {
      url.pathname = '/jesus-red';
      return NextResponse.rewrite(url);
    }
    
    // Serve jesus-red favicon
    if (url.pathname === '/favicon.ico') {
      url.pathname = '/jesus-red/favicon.ico';
      return NextResponse.rewrite(url);
    }
    
    // Serve jesus-red apple icon
    if (url.pathname === '/apple-icon.png') {
      url.pathname = '/jesus-red/apple-icon.png';
      return NextResponse.rewrite(url);
    }
    
    // Serve jesus-red icon
    if (url.pathname === '/icon.png') {
      url.pathname = '/jesus-red/favicon.png';
      return NextResponse.rewrite(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/favicon.ico', '/apple-icon.png', '/icon.png'],
};
