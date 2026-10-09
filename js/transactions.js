/**
 * TRANSACTIONS & AUDIT MODULE - HOÀNG HƯNG JEWELRY ERP PRO
 * Quản lý các giao dịch khách, thu ngân, kho hàng, thợ kim hoàn & tra cứu
 */

const TRANSACTIONS_STORE = {
  // Giao dịch mua dẻ / Phế liệu cũ
  scrapPurchases: [
    { id: 'MD-20261009-01', time: '09:15', customer: 'Nguyễn Thị Hương', goldType: 'Vàng 18K Cũ (Gãy nát)', totalWeight: 4.850, stoneDustDeduct: 0.350, realGoldWeight: 4.500, testPurity: '74.2%', unitPrice: 6150000, totalPayout: 27675000, cashier: 'Trần Hoàng Hưng', status: 'Đã nhập kho dẻ' },
    { id: 'MD-20261009-02', time: '10:40', customer: 'Trần Văn Hoàng (VIP)', goldType: 'Vàng 24K Miếng cũ cắt đôi', totalWeight: 5.000, stoneDustDeduct: 0.000, realGoldWeight: 5.000, testPurity: '99.9%', unitPrice: 8850000, totalPayout: 44250000, cashier: 'Trần Hoàng Hưng', status: 'Đã nhập kho dẻ' },
    { id: 'MD-20261009-03', time: '14:20', customer: 'Lê Thu Trang', goldType: 'Lắc Vàng 610 Đứt chấu rơi đá', totalWeight: 3.200, stoneDustDeduct: 0.400, realGoldWeight: 2.800, testPurity: '60.5%', unitPrice: 4980000, totalPayout: 13944000, cashier: 'Trần Hoàng Hưng', status: 'Đã nhập kho dẻ' }
  ],

  // Duyệt nhập kho 2 cấp (Thủ kho kiểm đếm -> Quản lý duyệt)
  pendingInboundApprovals: [
    { id: 'PNK-20261009-01', time: '08:30', supplier: 'Chành Hoàng Gia SG', category: 'Nhẫn Nam Kim Tiền 18K', qty: 10, totalWeight: 18.500, laborCost: 2500000, totalCost: 119975000, creator: 'Thủ kho Nguyễn Hùng', approver: 'Trần Hoàng Hưng (Quản Lý)', stage: 'Chờ duyệt cấp 2' },
    { id: 'PNK-20261009-02', time: '11:15', supplier: 'Công Ty Vàng SJC', category: 'Nhẫn Trơn Ép Vỉ SJC 1-2 Chỉ', qty: 20, totalWeight: 30.000, laborCost: 1200000, totalCost: 266700000, creator: 'Thủ kho Nguyễn Hùng', approver: 'Trần Hoàng Hưng (Quản Lý)', stage: 'Đã duyệt nhập kho' }
  ],

  // Kiểm kê hàng tồn theo khay qua RFID UHF
  trayAuditLog: [
    { trayCode: 'K01', trayName: 'Khay 01 - Nhẫn Nam 18K', expectedQty: 32, scannedQty: 32, matched: true, missingSkus: [], surplusSkus: [], scanTime: '10:05', status: 'Khớp 100%' },
    { trayCode: 'K02', trayName: 'Khay 02 - Nhẫn Cưới Ý 750', expectedQty: 45, scannedQty: 44, matched: false, missingSkus: ['BC-750-088'], surplusSkus: [], scanTime: '10:07', status: 'Cảnh báo thiếu 1 món' },
    { trayCode: 'K03', trayName: 'Khay 03 - Dây Chuyền 610', expectedQty: 22, scannedQty: 22, matched: true, missingSkus: [], surplusSkus: [], scanTime: '10:10', status: 'Khớp 100%' }
  ],

  // Giao dịch gia công thợ & Hao hụt rung rửa
  craftsmanWorkOrders: [
    { orderId: 'TC-20261008-01', craftsman: 'Trần Văn Đạt (Đạt Tân Định)', task: 'Đúc & Khắc 3D 5 Nhẫn Nam Rồng Vàng 18K', deliveredGoldChi: 12.500, returnedGoldChi: 12.465, actualLossChi: 0.035, allowedLossChi: 0.037, lossRate: '0.28%', laborFee: 3500000, paymentStatus: 'Đã thanh toán', orderStatus: 'Hoàn tất nghiệm thu' },
    { orderId: 'TC-20261009-02', craftsman: 'Nguyễn Văn Ba (Ba Râu)', task: 'Đính chấu 18 viên Ruby thiên nhiên vào Mặt Dây 750', deliveredGoldChi: 8.200, returnedGoldChi: 8.185, actualLossChi: 0.015, allowedLossChi: 0.020, lossRate: '0.18%', laborFee: 1800000, paymentStatus: 'Công nợ gối đầu', orderStatus: 'Đang gia công' }
  ],

  // Thu chi điều chuyển tiền/vàng liên quầy
  interCounterTransfers: [
    { code: 'DC-20261009-01', time: '08:00', from: 'Két Sắt Trung Tâm', to: 'Quầy 01 (Vàng Tây)', type: 'Tiền mặt đầu ca', amount: '150,000,000 đ', note: 'Cấp tiền mặt đầu ca giao dịch', sender: 'Thủ quỹ', receiver: 'Trần Hoàng Hưng', status: 'Đã nhận' },
    { code: 'DC-20261009-02', time: '11:30', from: 'Quầy 01 (Vàng Tây)', to: 'Tủ Thu Mua Kho Dẻ', type: 'Vàng dẻ thu mua', amount: '12.300 chỉ', note: 'Bàn giao 3 món vàng dẻ gom trong ca sáng', sender: 'Trần Hoàng Hưng', receiver: 'Thủ kho Dẻ', status: 'Đã nhận' },
    { code: 'DC-20261009-03', time: '15:45', from: 'Quầy 02 (Vàng Ta)', to: 'Két Sắt Trung Tâm', type: 'Tiền mặt doanh thu', amount: '200,000,000 đ', note: 'Chuyển bớt doanh thu bán vàng miếng về két chính', sender: 'Lê Thu Thủy', receiver: 'Thủ quỹ', status: 'Đã nhận' }
  ],

  // Tra cứu lịch sử đổi bảng giá vàng
  priceChangeHistory: [
    { time: '08:00 - 09/10/2026', user: 'Admin (Trần Hoàng Hưng)', goldType: 'SJC 1L-10L', oldBuy: 8820000, newBuy: 8850000, oldSell: 9020000, newSell: 9050000, changeText: 'Tăng +300,000 đ/lượng' },
    { time: '08:00 - 09/10/2026', user: 'Admin (Trần Hoàng Hưng)', goldType: 'Nhẫn 999.9', oldBuy: 8690000, newBuy: 8720000, oldSell: 8840000, newSell: 8870000, changeText: 'Tăng +300,000 đ/chỉ' },
    { time: '14:30 - 08/10/2026', user: 'Admin (Trần Hoàng Hưng)', goldType: 'Vàng Ý 750', oldBuy: 6250000, newBuy: 6280000, oldSell: 6460000, newSell: 6490000, changeText: 'Tăng +30,000 đ/chỉ' }
  ]
};

// Current view selector in Operations
let currentOperationSubView = 'scrapPurchases';

function selectOperationSubView(viewKey) {
  currentOperationSubView = viewKey;
  document.querySelectorAll('.op-pill').forEach(btn => {
    btn.className = 'op-pill px-3 py-1 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-700 transition';
  });
  if (window.event && window.event.target && window.event.target.classList.contains('op-pill')) {
    window.event.target.className = 'op-pill px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold border border-amber-600 shadow-sm transition';
  }
  renderOperationsTable();
}

/**
 * Render Operations & Audit views
 */
function renderOperationsTable() {
  const container = document.getElementById('operations-table-container');
  const titleEl = document.getElementById('operations-active-title');
  if (!container) return;

  let title = '';
  let thead = '';
  let tbody = '';

  if (currentOperationSubView === 'scrapPurchases') {
    title = 'NHẬT KÝ THU MUA VÀNG DẺ / PHẾ LIỆU (ĐỊNH GIÁ ĐỒ CŨ)';
    thead = `
      <thead class="bg-gradient-to-r from-slate-100 via-amber-50 to-slate-100 text-slate-800 font-bold border-b text-xs">
        <tr>
          <th class="p-3">Mã Phiếu</th>
          <th class="p-3">Thời Gian</th>
          <th class="p-3">Khách Hàng</th>
          <th class="p-3">Loại Vàng Cũ</th>
          <th class="p-3 text-right">Tổng TL (KLT)</th>
          <th class="p-3 text-right">Trừ Đá/Bụi</th>
          <th class="p-3 text-right text-red-700">TL Vàng Thực</th>
          <th class="p-3 text-center">Tuổi Quang Phổ</th>
          <th class="p-3 text-right">Đơn Giá Mua/Chỉ</th>
          <th class="p-3 text-right text-slate-900 font-bold">Tiền Trả Khách</th>
          <th class="p-3 text-center">Trạng Thái</th>
          <th class="p-3 text-center">Thao Tác</th>
        </tr>
      </thead>`;
    tbody = '<tbody class="divide-y divide-slate-100 font-medium text-xs">';
    TRANSACTIONS_STORE.scrapPurchases.forEach(item => {
      tbody += `
        <tr class="hover:bg-amber-50/50">
          <td class="p-3 font-mono font-bold text-amber-700">${item.id}</td>
          <td class="p-3 font-mono text-slate-500">${item.time}</td>
          <td class="p-3 font-bold text-slate-900">${item.customer}</td>
          <td class="p-3 text-slate-700">${item.goldType}</td>
          <td class="p-3 text-right font-mono">${item.totalWeight.toFixed(3)} chỉ</td>
          <td class="p-3 text-right font-mono text-slate-400">-${item.stoneDustDeduct.toFixed(3)} chỉ</td>
          <td class="p-3 text-right font-mono font-bold text-red-700">${item.realGoldWeight.toFixed(3)} chỉ</td>
          <td class="p-3 text-center font-bold text-purple-700 bg-purple-50 rounded">${item.testPurity}</td>
          <td class="p-3 text-right font-mono">${item.unitPrice.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-right font-mono font-extrabold text-slate-900">${item.totalPayout.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-center"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">${item.status}</span></td>
          <td class="p-3 text-center">
            <button onclick="alert('In phiếu biên nhận thu mua dẻ: ${item.id}')" class="px-2 py-1 bg-amber-500 text-slate-950 font-bold rounded text-[11px] shadow hover:bg-amber-400">In Phiếu</button>
          </td>
        </tr>`;
    });
    tbody += '</tbody>';
  } else if (currentOperationSubView === 'pendingApprovals') {
    title = 'DUYỆT NHẬP HÀNG / NHẬP KHO 2 CẤP (THỦ KHO ➜ QUẢN LÝ)';
    thead = `
      <thead class="bg-gradient-to-r from-slate-100 via-amber-50 to-slate-100 text-slate-800 font-bold border-b text-xs">
        <tr>
          <th class="p-3">Số Phiếu Nhập</th>
          <th class="p-3">Giờ Tạo</th>
          <th class="p-3">Nhà Cung Cấp / Chành</th>
          <th class="p-3">Mặt Hàng Nhập</th>
          <th class="p-3 text-center">SL Món</th>
          <th class="p-3 text-right">Tổng TL Vàng</th>
          <th class="p-3 text-right">Tiền Công Vốn</th>
          <th class="p-3 text-right font-bold">Tổng Trị Giá Vốn</th>
          <th class="p-3">Người Tạo</th>
          <th class="p-3">Cấp Phê Duyệt</th>
          <th class="p-3 text-center">Thao Tác</th>
        </tr>
      </thead>`;
    tbody = '<tbody class="divide-y divide-slate-100 font-medium text-xs">';
    TRANSACTIONS_STORE.pendingInboundApprovals.forEach(item => {
      tbody += `
        <tr class="hover:bg-amber-50/50">
          <td class="p-3 font-mono font-bold text-amber-700">${item.id}</td>
          <td class="p-3 font-mono text-slate-500">${item.time}</td>
          <td class="p-3 font-bold text-slate-900">${item.supplier}</td>
          <td class="p-3 text-slate-700">${item.category}</td>
          <td class="p-3 text-center font-bold text-amber-600">${item.qty} món</td>
          <td class="p-3 text-right font-mono font-bold text-red-700">${item.totalWeight.toFixed(3)} chỉ</td>
          <td class="p-3 text-right font-mono">${item.laborCost.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-right font-mono font-extrabold text-slate-900">${item.totalCost.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-slate-600">${item.creator}</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded ${item.stage.includes('Chờ') ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-emerald-100 text-emerald-900'} font-bold text-[10px]">${item.stage}</span></td>
          <td class="p-3 text-center">
            ${item.stage.includes('Chờ') ? `<button onclick="alert('Duyệt thành công phiếu nhập kho: ${item.id}')" class="px-3 py-1 bg-emerald-600 text-white font-bold rounded text-[11px] shadow hover:bg-emerald-700">Duyệt Nhập Kho</button>` : `<span class="text-slate-400 font-bold text-[11px]">Đã Hoàn Tất</span>`}
          </td>
        </tr>`;
    });
    tbody += '</tbody>';
  } else if (currentOperationSubView === 'trayAudit') {
    title = 'KIỂM KÊ HÀNG TỒN TẠI QUẦY (QUÉT BARCODE / RFID THEO KHAY)';
    thead = `
      <thead class="bg-gradient-to-r from-slate-100 via-amber-50 to-slate-100 text-slate-800 font-bold border-b text-xs">
        <tr>
          <th class="p-3">Mã Khay</th>
          <th class="p-3">Tên Khay Trưng Bày</th>
          <th class="p-3 text-center">Số Lượng Hệ Thống</th>
          <th class="p-3 text-center">Số Lượng Quét RFID</th>
          <th class="p-3 text-center">Đối Soát Đối Chiếu</th>
          <th class="p-3">Món Lệch / Thất Thoát</th>
          <th class="p-3">Thời Gian Quét</th>
          <th class="p-3 text-center">Trạng Thái</th>
          <th class="p-3 text-center">Thao Tác</th>
        </tr>
      </thead>`;
    tbody = '<tbody class="divide-y divide-slate-100 font-medium text-xs">';
    TRANSACTIONS_STORE.trayAuditLog.forEach(item => {
      tbody += `
        <tr class="hover:bg-amber-50/50">
          <td class="p-3 font-mono font-bold text-amber-700">${item.trayCode}</td>
          <td class="p-3 font-bold text-slate-900">${item.trayName}</td>
          <td class="p-3 text-center font-mono font-bold">${item.expectedQty} món</td>
          <td class="p-3 text-center font-mono font-bold ${item.matched ? 'text-emerald-700' : 'text-red-700'}">${item.scannedQty} món</td>
          <td class="p-3 text-center">${item.matched ? '<span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold text-[10px]">✓ Trùng khớp</span>' : '<span class="px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-bold text-[10px]">✕ Lệch số liệu</span>'}</td>
          <td class="p-3 font-mono text-red-600">${item.missingSkus.length > 0 ? 'Thiếu: ' + item.missingSkus.join(', ') : '<span class="text-slate-400">Không có</span>'}</td>
          <td class="p-3 font-mono text-slate-500">${item.scanTime}</td>
          <td class="p-3 text-center font-bold ${item.matched ? 'text-emerald-700' : 'text-rose-700'}">${item.status}</td>
          <td class="p-3 text-center">
            <button onclick="simulateRfidTrayScan('${item.trayCode}')" class="px-2.5 py-1 bg-purple-600 text-white font-bold rounded text-[11px] shadow hover:bg-purple-700 flex items-center gap-1 mx-auto">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/></svg>
              Quét Lại RFID
            </button>
          </td>
        </tr>`;
    });
    tbody += '</tbody>';
  } else if (currentOperationSubView === 'craftsmanOrders') {
    title = 'GIAO DỊCH THỢ KIM HOÀN (GIA CÔNG, RUNG RỬA, XI MẠ, HAO HỤT)';
    thead = `
      <thead class="bg-gradient-to-r from-slate-100 via-amber-50 to-slate-100 text-slate-800 font-bold border-b text-xs">
        <tr>
          <th class="p-3">Mã Lệnh Thợ</th>
          <th class="p-3">Thợ Kim Hoàn</th>
          <th class="p-3">Nội Dung Gia Công / Xi Mạ</th>
          <th class="p-3 text-right">TL Vàng Giao</th>
          <th class="p-3 text-right">TL Vàng Nhận</th>
          <th class="p-3 text-right text-red-700">Hao Hụt Thực Tế</th>
          <th class="p-3 text-center">Tỷ Lệ Hao Hụt</th>
          <th class="p-3 text-right">Tiền Công Thợ</th>
          <th class="p-3 text-center">Thanh Toán</th>
          <th class="p-3 text-center">Tiến Độ</th>
          <th class="p-3 text-center">Thao Tác</th>
        </tr>
      </thead>`;
    tbody = '<tbody class="divide-y divide-slate-100 font-medium text-xs">';
    TRANSACTIONS_STORE.craftsmanWorkOrders.forEach(item => {
      tbody += `
        <tr class="hover:bg-amber-50/50">
          <td class="p-3 font-mono font-bold text-amber-700">${item.orderId}</td>
          <td class="p-3 font-bold text-slate-900">${item.craftsman}</td>
          <td class="p-3 text-slate-700">${item.task}</td>
          <td class="p-3 text-right font-mono font-bold">${item.deliveredGoldChi.toFixed(3)} chỉ</td>
          <td class="p-3 text-right font-mono font-bold text-emerald-700">${item.returnedGoldChi.toFixed(3)} chỉ</td>
          <td class="p-3 text-right font-mono text-red-700 font-bold">-${item.actualLossChi.toFixed(3)} chỉ</td>
          <td class="p-3 text-center font-bold text-slate-700">${item.lossRate}</td>
          <td class="p-3 text-right font-mono font-bold text-slate-900">${item.laborFee.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-center"><span class="px-2 py-0.5 rounded ${item.paymentStatus.includes('Đã') ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'} font-bold text-[10px]">${item.paymentStatus}</span></td>
          <td class="p-3 text-center font-semibold text-blue-700">${item.orderStatus}</td>
          <td class="p-3 text-center">
            <button onclick="alert('In phiếu bù trừ hao hụt thợ: ${item.orderId}')" class="px-2 py-1 bg-amber-500 text-slate-950 font-bold rounded text-[11px] hover:bg-amber-400">In Phiếu</button>
          </td>
        </tr>`;
    });
    tbody += '</tbody>';
  } else if (currentOperationSubView === 'counterTransfers') {
    title = 'THU CHI & ĐIỀU CHUYỂN TIỀN VÀNG GIỮA CÁC QUẦY';
    thead = `
      <thead class="bg-gradient-to-r from-slate-100 via-amber-50 to-slate-100 text-slate-800 font-bold border-b text-xs">
        <tr>
          <th class="p-3">Mã Phiếu Chuyển</th>
          <th class="p-3">Giờ</th>
          <th class="p-3">Nguồn Chuyển</th>
          <th class="p-3">Nơi Nhận</th>
          <th class="p-3">Loại Tài Sản</th>
          <th class="p-3 text-right font-bold">Giá Trị / Số Lượng</th>
          <th class="p-3">Mục Đích Điều Chuyển</th>
          <th class="p-3">Người Giao</th>
          <th class="p-3">Người Nhận</th>
          <th class="p-3 text-center">Trạng Thái</th>
        </tr>
      </thead>`;
    tbody = '<tbody class="divide-y divide-slate-100 font-medium text-xs">';
    TRANSACTIONS_STORE.interCounterTransfers.forEach(item => {
      tbody += `
        <tr class="hover:bg-amber-50/50">
          <td class="p-3 font-mono font-bold text-amber-700">${item.code}</td>
          <td class="p-3 font-mono text-slate-500">${item.time}</td>
          <td class="p-3 font-bold text-slate-900">${item.from}</td>
          <td class="p-3 font-bold text-blue-800">${item.to}</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-[10px]">${item.type}</span></td>
          <td class="p-3 text-right font-mono font-extrabold text-emerald-700">${item.amount}</td>
          <td class="p-3 text-slate-600">${item.note}</td>
          <td class="p-3 text-slate-700">${item.sender}</td>
          <td class="p-3 text-slate-700">${item.receiver}</td>
          <td class="p-3 text-center"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">${item.status}</span></td>
        </tr>`;
    });
    tbody += '</tbody>';
  } else if (currentOperationSubView === 'priceChanges') {
    title = 'TRA CỨU LỊCH SỬ THAY ĐỔI BẢNG GIÁ VÀNG NIÊM YẾT';
    thead = `
      <thead class="bg-gradient-to-r from-slate-100 via-amber-50 to-slate-100 text-slate-800 font-bold border-b text-xs">
        <tr>
          <th class="p-3">Thời Gian Cập Nhật</th>
          <th class="p-3">Người Điều Chỉnh</th>
          <th class="p-3">Loại Vàng</th>
          <th class="p-3 text-right">Giá Mua Cũ</th>
          <th class="p-3 text-right text-emerald-700 font-bold">Giá Mua Mới</th>
          <th class="p-3 text-right">Giá Bán Cũ</th>
          <th class="p-3 text-right text-red-700 font-bold">Giá Bán Mới</th>
          <th class="p-3 text-center">Biến Động</th>
        </tr>
      </thead>`;
    tbody = '<tbody class="divide-y divide-slate-100 font-medium text-xs">';
    TRANSACTIONS_STORE.priceChangeHistory.forEach(item => {
      tbody += `
        <tr class="hover:bg-amber-50/50">
          <td class="p-3 font-mono font-semibold text-slate-600">${item.time}</td>
          <td class="p-3 font-bold text-slate-900">${item.user}</td>
          <td class="p-3 font-bold text-amber-800">${item.goldType}</td>
          <td class="p-3 text-right font-mono text-slate-400">${item.oldBuy.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-right font-mono font-bold text-emerald-700">${item.newBuy.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-right font-mono text-slate-400">${item.oldSell.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-right font-mono font-bold text-red-700">${item.newSell.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-center"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">${item.changeText}</span></td>
        </tr>`;
    });
    tbody += '</tbody>';
  }

  if (titleEl) titleEl.innerText = title;
  container.innerHTML = `<table class="w-full text-left border-collapse">${thead}${tbody}</table>`;
}

function simulateRfidTrayScan(trayCode) {
  alert(`Đang phát sóng RFID UHF tần số 920MHz quét toàn bộ khay ${trayCode}...\nĐã đọc thành công 100% chip tem trang sức trong 0.8 giây!`);
  renderOperationsTable();
}

window.TRANSACTIONS_STORE = TRANSACTIONS_STORE;
window.selectOperationSubView = selectOperationSubView;
window.renderOperationsTable = renderOperationsTable;
window.simulateRfidTrayScan = simulateRfidTrayScan;
