import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Lấy API Key từ Header của request gửi lên
  const apiKey = request.headers.get('x-api-key');

  // 2. Lấy mã bí mật đã lưu trong file .env.local
  const secretKey = process.env.API_SECRET_KEY;

  // 3. Kiểm tra xem request có đang gọi vào đường dẫn /api/secret không
  if (request.nextUrl.pathname.startsWith('/api/secret')) {
    
    // 4. So sánh chìa khóa: Nếu không khớp hoặc không có chìa khóa
    if (apiKey !== secretKey) {
      return NextResponse.json(
        { message: 'Unauthorized: Invalid or missing API Key' },
        { status: 401 } // Trả về lỗi 401 (Không có quyền truy cập)
      );
    }
  }

  // Nếu chìa khóa đúng, cho phép request tiếp tục đi tiếp
  return NextResponse.next();
}

// 5. Cấu hình "Matcher" để Middleware chỉ chạy khi gọi vào API này
// Điều này giúp tối ưu hiệu năng, tránh chạy Middleware cho các trang tĩnh khác.
export const config = {
  matcher: '/api/secret/:path*',
};