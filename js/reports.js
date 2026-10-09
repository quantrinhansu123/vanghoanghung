/**
 * ADVANCED REPORTING & BI MODULE - HOÀNG HƯNG JEWELRY ERP PRO
 * Bao gồm toàn bộ các nhóm báo cáo quản trị kim hoàn chuyên sâu
 */

const REPORTS_STORE = {
  // 1. Nhóm Hàng (7 báo cáo)
  productReports: [
    { code: 'BC-HANG-01', name: 'Báo Cáo Hàng Bán & Sản Lượng Món', period: 'Hôm nay', value: '42 món', goldWeight: '58.400 chỉ', revenue: '312,450,000 đ' },
    { code: 'BC-HANG-02', name: 'Báo Cáo Tổng Tài Sản Hàng Tồn Kho', period: 'Thời điểm hiện tại', value: '2,240 món', goldWeight: '6,450.000 chỉ', revenue: '38,250,000,000 đ' },
    { code: 'BC-HANG-03', name: 'Báo Cáo Xuất Kho Sau Duyệt (Bán Buôn / Chuyển)', period: 'Tháng 10/2026', value: '18 phiếu xuất', goldWeight: '142.500 chỉ', revenue: '890,000,000 đ' },
    { code: 'BC-HANG-04', name: 'Báo Cáo Tổng Hợp Bán Lẻ Theo Quầy', period: 'Hôm nay', value: '38 đơn lẻ', goldWeight: '46.800 chỉ', revenue: '286,500,000 đ' },
    { code: 'BC-HANG-05', name: 'Báo Cáo Lời / Lỗ Từng Hóa Đơn (Biên Lợi Nhuận)', period: 'Hôm nay', value: '38 HĐ', goldWeight: 'Lợi nhuận gộp', revenue: '42,850,000 đ' },
    { code: 'BC-HANG-06', name: 'Báo Cáo Hàng Bán Tổng Hợp Toàn Chuỗi', period: 'Tuần này', value: '215 món', goldWeight: '320.000 chỉ', revenue: '1,890,000,000 đ' },
    { code: 'BC-HANG-07', name: 'Báo Cáo Doanh Thu Theo Nhóm Hàng (Nhẫn, Lắc, Dây)', period: 'Tháng 10/2026', value: 'Top: Nhẫn Nam', goldWeight: '45% cơ cấu', revenue: '2,450,000,000 đ' }
  ],

  // 2. Nhóm Thu ngân (8 báo cáo)
  cashierReports: [
    { code: 'BC-TN-01', name: 'Báo Cáo Doanh Thu Quầy Thu Ngân', desc: 'Đối soát tiền mặt + Chuyển khoản VietQR + Thẻ POS', totalCash: '185,400,000 đ', totalBank: '127,050,000 đ' },
    { code: 'BC-TN-02', name: 'Báo Cáo Dẻ Tại Quầy (Vàng Cũ Thu Mua)', desc: 'Tổng hợp số lượng món và trọng lượng vàng cũ gom trong ca', totalCash: '12.300 chỉ', totalBank: '85,869,000 đ vốn trả' },
    { code: 'BC-TN-03', name: 'Báo Cáo Tiền Tệ Quầy Thu Ngân', desc: 'Số dư khả dụng các mệnh giá tiền mặt VND trong két quầy', totalCash: '285,400,000 đ', totalBank: 'Không lệch quỹ' },
    { code: 'BC-TN-04', name: 'Báo Cáo Dẻ Đổi (Cấn Trừ Hóa Đơn)', desc: 'Tổng giá trị vàng cũ khách đổi lấy vàng mới bù chênh lệch', totalCash: '8 giao dịch', totalBank: '64,200,000 đ cấn trừ' },
    { code: 'BC-TN-05', name: 'Báo Cáo Số Dư Cuối Ngày & Bàn Giao Ca', desc: 'Chốt số dư tiền mặt két + số dư vàng dẻ giao ca tối', totalCash: 'Ca sáng ➜ Ca tối', totalBank: 'Biên bản khớp 100%' },
    { code: 'BC-TN-06', name: 'Báo Cáo Giao Dịch Ngoại Tệ (USD, EUR, AUD)', desc: 'Thu đổi tiền kiều hối khách nước ngoài mua trang sức', totalCash: '2,400 USD', totalBank: '61,200,000 đ quy đổi' },
    { code: 'BC-TN-07', name: 'Sổ Quỹ Tiền Mặt Chi Tiết', desc: 'Toàn bộ phiếu thu / phiếu chi tiền mặt có xác nhận', totalCash: 'Thu: 312M', totalBank: 'Chi: 126M' },
    { code: 'BC-TN-08', name: 'Báo Cáo Thu Chi Điều Chuyển Liên Quầy', desc: 'Đối soát các lệnh rót quỹ và nộp doanh thu liên quầy', totalCash: '3 lệnh', totalBank: 'Khớp biên bản' }
  ],

  // 3. Nhóm Khách hàng (2 báo cáo)
  customerReports: [
    { code: 'BC-KH-01', name: 'Báo Cáo Doanh Số & Xếp Hạng Khách Hàng (Top VIP)', desc: 'Thống kê top 50 khách hàng có sức mua lớn nhất trong tháng' },
    { code: 'BC-KH-02', name: 'Báo Cáo Tổng Hợp Thông Tin Khách & Sinh Nhật', desc: 'Chăm sóc khách hàng, tặng quà tri ân sinh nhật tháng 10' }
  ],

  // 4. Nhóm Thợ (3 báo cáo)
  craftsmanReports: [
    { code: 'BC-THO-01', name: 'Báo Cáo Giao Dịch & Tiền Công Thợ Kim Hoàn', desc: 'Thống kê tổng số món thợ hoàn thành và tiền công phải thanh toán' },
    { code: 'BC-THO-02', name: 'Báo Cáo Rung Rửa, Xi Mạ & Hao Hụt Tuổi Vàng', desc: 'Kiểm soát tỷ lệ hao hụt thực tế so với định mức 0.3%' },
    { code: 'BC-THO-03', name: 'Báo Cáo Xuất Nhập Tồn Nguyên Liệu Thợ Gối Đầu', desc: 'Theo dõi lượng vàng hạt/vàng tấm thợ đang giữ để chế tác' }
  ],

  // 5. Nhóm Dẻ (2 báo cáo)
  scrapReports: [
    { code: 'BC-DE-01', name: 'Danh Sách Dẻ Mua + Đổi Cấn Trừ Trong Kỳ', desc: 'Tổng hợp toàn bộ vàng cũ thu mua chờ phân kim hoặc bán sỉ' },
    { code: 'BC-DE-02', name: 'Báo Cáo Cắt Ni Nhẫn & Rã Đá Quý Phế Liệu', desc: 'Tách hột đá, cân lại vàng tinh khiết đưa về xưởng nấu chảy' }
  ],

  // 6. Nhóm Xuất Nhập Tồn (6 báo cáo)
  inventoryReports: [
    { code: 'BC-XNT-01', name: 'Báo Cáo Hàng Tồn Kho Theo Từng Quầy (Q01, Q02, Q03, Kho Tổng)', desc: 'Số lượng món, tổng khối lượng vàng (chỉ), tiền công tồn' },
    { code: 'BC-XNT-02', name: 'Báo Cáo Hàng Tồn Theo Từng Loại Vàng (24K, 18K, 610, Platin)', desc: 'Phân loại chi tiết hàm lượng và định mức tồn an toàn' },
    { code: 'BC-XNT-03', name: 'Báo Cáo Thống Kê Tồn Quầy Theo Khay Trưng Bày', desc: 'Chi tiết từng khay từ K01 đến K06 tích hợp RFID' },
    { code: 'BC-XNT-04', name: 'Báo Cáo Thống Kê Tồn Loại Vàng Theo Tuổi Vàng Thực Tế', desc: 'Đối soát tuổi vàng quang phổ và tuổi niêm yết' },
    { code: 'BC-XNT-05', name: 'Báo Cáo Xuất Nhập Tồn (XNT) Theo Loại Vàng Toàn Kỳ', desc: 'Tồn đầu kỳ + Nhập trong kỳ - Xuất bán = Tồn cuối kỳ' },
    { code: 'BC-XNT-06', name: 'Báo Cáo XNT Theo Quầy & Theo Giá Trị Tiền Công Vốn', desc: 'Kiểm soát tài sản vốn lưu động nằm trong tiền công thợ' }
  ],

  // 7. Báo cáo nhân viên bán hàng (3 báo cáo)
  staffReports: [
    { code: 'BC-NV-01', name: 'Báo Cáo Thống Kê Bán Hàng Từng Nhân Viên', desc: 'Số hóa đơn chốt, số lượng món, tổng doanh số bán và tỷ lệ thưởng' },
    { code: 'BC-NV-02', name: 'Báo Cáo Doanh Số Bán Hàng Theo Tháng (KPI)', desc: 'So sánh mức độ hoàn thành chỉ tiêu doanh thu tháng của từng bạn thu ngân' },
    { code: 'BC-NV-03', name: 'Báo Cáo Doanh Thu Bán Hàng Trong Ngày Theo Ca Trực', desc: 'Theo dõi biểu đồ doanh thu theo từng khung giờ cao điểm' }
  ]
};

let currentReportCategory = 'productReports';

function selectReportCategory(catKey) {
  currentReportCategory = catKey;
  document.querySelectorAll('.bc-pill').forEach(btn => {
    btn.className = 'bc-pill px-3 py-1 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-700 transition';
  });
  if (window.event && window.event.target && window.event.target.classList.contains('bc-pill')) {
    window.event.target.className = 'bc-pill px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold border border-amber-600 shadow-sm transition';
  }
  renderReportView();
}

function renderReportView() {
  const container = document.getElementById('report-cards-container');
  const titleEl = document.getElementById('report-group-title');
  if (!container) return;

  let title = '';
  let list = [];

  switch (currentReportCategory) {
    case 'productReports':
      title = 'NHÓM BÁO CÁO HÀNG HÓA & DOANH SỐ KIM HOÀN (7 BÁO CÁO)';
      list = REPORTS_STORE.productReports;
      break;
    case 'cashierReports':
      title = 'NHÓM BÁO CÁO THU NGÂN, QUỸ TIỀN MẶT & TÀI SẢN (8 BÁO CÁO)';
      list = REPORTS_STORE.cashierReports;
      break;
    case 'customerReports':
      title = 'NHÓM BÁO CÁO KHÁCH HÀNG & VIP (2 BÁO CÁO)';
      list = REPORTS_STORE.customerReports;
      break;
    case 'craftsmanReports':
      title = 'NHÓM BÁO CÁO THỢ KIM HOÀN & HAO HỤT RUNG RỬA (3 BÁO CÁO)';
      list = REPORTS_STORE.craftsmanReports;
      break;
    case 'scrapReports':
      title = 'NHÓM BÁO CÁO VÀNG DẺ, PHẾ LIỆU & RÃ ĐÁ (2 BÁO CÁO)';
      list = REPORTS_STORE.scrapReports;
      break;
    case 'inventoryReports':
      title = 'NHÓM BÁO CÁO XUẤT NHẬP TỒN (XNT) & KHO VÀNG (6 BÁO CÁO)';
      list = REPORTS_STORE.inventoryReports;
      break;
    case 'staffReports':
      title = 'NHÓM BÁO CÁO NHÂN VIÊN BÁN HÀNG & KPI (3 BÁO CÁO)';
      list = REPORTS_STORE.staffReports;
      break;
  }

  if (titleEl) titleEl.innerText = title;

  let html = '';
  list.forEach(item => {
    html += `
      <div class="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">${item.code}</span>
            <span class="text-xs text-slate-400"><i class="fa-solid fa-chart-line text-amber-500"></i> Báo Cáo Chuẩn</span>
          </div>
          <h4 class="font-bold text-sm text-slate-900 mb-1.5">${item.name}</h4>
          <p class="text-xs text-slate-500 mb-3">${item.desc || item.period + ' • ' + item.value}</p>
          ${item.revenue ? `
            <div class="bg-slate-50 rounded-lg p-2.5 mb-3 flex items-center justify-between text-xs">
              <span class="text-slate-600">Tổng Trọng Lượng: <b class="text-red-700">${item.goldWeight}</b></span>
              <span class="text-slate-900 font-bold">${item.revenue}</span>
            </div>` : ''}
        </div>
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <button onclick="viewReportDetail('${item.code}', '${item.name}')" class="flex-1 py-1.5 bg-burgundy-900 hover:bg-burgundy-850 text-amber-300 font-bold rounded-lg text-xs shadow transition text-center">
            <i class="fa-solid fa-eye mr-1"></i> Xem Chi Tiết
          </button>
          <button onclick="alert('Đang trích xuất Excel báo cáo: ${item.name}')" class="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold rounded-lg text-xs border border-emerald-300 transition" title="Xuất Excel">
            <i class="fa-solid fa-file-excel"></i>
          </button>
          <button onclick="alert('Đang gửi lệnh in máy in A4 báo cáo: ${item.name}')" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg text-xs transition" title="In Báo Cáo">
            <i class="fa-solid fa-print"></i>
          </button>
        </div>
      </div>`;
  });

  container.innerHTML = html;
}

function viewReportDetail(code, name) {
  alert(`Đang mở Bảng Đối Soát Chi Tiết [${code}]:\n${name}\n\nDữ liệu được đồng bộ từ toàn bộ các quầy và két sắt tự động.`);
}

window.REPORTS_STORE = REPORTS_STORE;
window.selectReportCategory = selectReportCategory;
window.renderReportView = renderReportView;
window.viewReportDetail = viewReportDetail;
