/**
 * MASTER DATA MODULE - HOÀNG HƯNG JEWELRY ERP PRO
 * Quản lý ~20 danh mục Master Data cốt lõi của tiệm vàng
 */

const MASTER_DATA_STORE = {
  // 1. Khách hàng
  customers: [
    { id: 'KH001', name: 'Nguyễn Thị Kim Loan', phone: '0903123456', group: 'VIP Kim Cương', debt: 0, balance: 125000000, points: 1420, address: 'Phường Bến Nghé, Q.1, TP.HCM' },
    { id: 'KH002', name: 'Trần Văn Hoàng', phone: '0918555777', group: 'VIP Vàng', debt: 15000000, balance: 84000000, points: 950, address: 'Nguyễn Trãi, P.3, Q.5, TP.HCM' },
    { id: 'KH003', name: 'Lê Hoàng Yến', phone: '0988666888', group: 'Khách Thân Thiết', debt: 0, balance: 45000000, points: 410, address: 'Lê Văn Sỹ, P.14, Q.3, TP.HCM' },
    { id: 'KH004', name: 'Phạm Hữu Nghĩa (Chành Biên Hòa)', phone: '0933777999', group: 'Đại Lý / Chành Sỉ', debt: 120000000, balance: 650000000, points: 5800, address: 'TP. Biên Hòa, Đồng Nai' },
    { id: 'KH005', name: 'Đỗ Thị Minh Châu', phone: '0909112233', group: 'Khách Vãng Lai', debt: 0, balance: 18500000, points: 120, address: 'Bình Thạnh, TP.HCM' }
  ],

  // 2. Nhóm khách hàng
  customerGroups: [
    { code: 'VIP-KC', name: 'VIP Kim Cương', discountRate: 5.0, laborDiscount: 30, minSpend: 100000000, count: 28 },
    { code: 'VIP-VANG', name: 'VIP Vàng', discountRate: 3.0, laborDiscount: 20, minSpend: 50000000, count: 64 },
    { code: 'THAN-THIET', name: 'Khách Thân Thiết', discountRate: 1.5, laborDiscount: 10, minSpend: 15000000, count: 185 },
    { code: 'CHANH-SI', name: 'Đại Lý / Chành Sỉ', discountRate: 0.5, laborDiscount: 50, minSpend: 500000000, count: 12 },
    { code: 'VANG-LAI', name: 'Khách Vãng Lai', discountRate: 0.0, laborDiscount: 0, minSpend: 0, count: 950 }
  ],

  // 3. Cửa hàng & Chi nhánh
  branches: [
    { code: 'CH01', name: 'Hoàng Hưng Jewelry - Trụ Sở Chính Q.1', address: '124 Phố Kim Hoàn, P. Bến Thành, Q.1, TP.HCM', hotline: '0942 88 99 77', manager: 'Trần Hoàng Hưng', countersCount: 5, status: 'Hoạt động' },
    { code: 'CH02', name: 'Hoàng Hưng Jewelry - Chi Nhánh An Đông Q.5', address: '48 An Dương Vương, P.9, Q.5, TP.HCM', hotline: '0942 88 99 88', manager: 'Nguyễn Văn Minh', countersCount: 3, status: 'Hoạt động' },
    { code: 'CH03', name: 'Xưởng Chế Tác & Gia Công Tân Định', address: '72 Trần Khắc Chân, P. Tân Định, Q.1, TP.HCM', hotline: '0942 88 99 99', manager: 'Võ Kim Tài (Trưởng Xưởng)', countersCount: 2, status: 'Hoạt động' }
  ],

  // 4. Quầy kho phân cấp
  counters: [
    { code: 'Q01', name: 'Quầy 01 - Vàng Tây & Vàng Ý (18K, 750, 610)', branch: 'CH01', type: 'Quầy Bán Lẻ', staff: 'Trần Hoàng Hưng', itemsCount: 420, goldWeightChi: 685.5, status: 'Đang mở' },
    { code: 'Q02', name: 'Quầy 02 - Vàng Ta & Nhẫn Trơn (24K, 9999, SJC)', branch: 'CH01', type: 'Quầy Bán Lẻ', staff: 'Lê Thu Thủy', itemsCount: 180, goldWeightChi: 1250.0, status: 'Đang mở' },
    { code: 'Q03', name: 'Quầy 03 - Kim Cương Thiên Nhiên & Đá Quý', branch: 'CH01', type: 'Quầy Chuyên Biệt', staff: 'Phạm Ngọc Trân', itemsCount: 95, goldWeightChi: 142.8, status: 'Đang mở' },
    { code: 'KHO-TONG', name: 'Kho Tổng Két Sắt Kim Hoàn', branch: 'CH01', type: 'Kho Trung Tâm', staff: 'Thủ Kho Nguyễn Văn Hùng', itemsCount: 1540, goldWeightChi: 4520.0, status: 'Bảo mật cao' },
    { code: 'KHO-DE', name: 'Tủ Thu Mua Vàng Cũ & Phế Liệu (Dẻ)', branch: 'CH01', type: 'Kho Thu Mua', staff: 'Thu Ngân Quầy', itemsCount: 85, goldWeightChi: 124.6, status: 'Hoạt động' }
  ],

  // 5. Loại vàng
  goldTypes: [
    { code: 'V9999', name: 'Vàng 999.9 (24K Ta)', purity: 99.99, age: '10 tuổi', buyRate: 8850000, sellRate: 9050000, color: 'Vàng óng truyền thống', tt22Standard: 'Đạt chuẩn TCCS 01:2018' },
    { code: 'V750', name: 'Vàng Ý 750 (18K Ý)', purity: 75.00, age: '7.5 tuổi', buyRate: 6280000, sellRate: 6490000, color: 'Vàng hồng / Trắng / Vàng', tt22Standard: 'Đạt chuẩn TCCS 02:2018' },
    { code: 'V610', name: 'Vàng Tây 610 (15K)', purity: 61.00, age: '6.1 tuổi', buyRate: 5110000, sellRate: 5320000, color: 'Vàng Tây tự nhiên', tt22Standard: 'Đạt chuẩn TCCS 03:2018' },
    { code: 'V585', name: 'Vàng 585 (14K)', purity: 58.50, age: '5.85 tuổi', buyRate: 4890000, sellRate: 5080000, color: 'Vàng nhạt', tt22Standard: 'Đạt chuẩn TCCS 04:2018' },
    { code: 'V416', name: 'Vàng 416 (10K)', purity: 41.60, age: '4.16 tuổi', buyRate: 3450000, sellRate: 3680000, color: 'Vàng trắng/vàng', tt22Standard: 'Đạt chuẩn TCCS 05:2018' },
    { code: 'PT950', name: 'Bạch Kim Platinum 950', purity: 95.00, age: 'Bạch Kim', buyRate: 4950000, sellRate: 5250000, color: 'Trắng sáng Platin', tt22Standard: 'Đạt chuẩn TCCS 06:2018' }
  ],

  // 6. Nhóm vàng
  goldGroups: [
    { code: 'NHOM-TA', name: 'Nhóm Vàng Ta / Vàng Đầu Tư', description: 'Vàng miếng SJC, nhẫn trơn 999.9, vàng 24K ép vỉ', goldCodes: ['V9999'] },
    { code: 'NHOM-TAY', name: 'Nhóm Nữ Trang Vàng Tây', description: 'Vàng 18K 750, Vàng 610, Vàng 14K đính đá', goldCodes: ['V750', 'V610', 'V585', 'V416'] },
    { code: 'NHOM-KIMCUONG', name: 'Nhóm Trang Sức Bạch Kim & Kim Cương', description: 'Ổ nhẫn đúc Platinum 950 và Vàng Ý 750', goldCodes: ['PT950', 'V750'] }
  ],

  // 7. Nhóm hàng & Ngành hàng
  productCategories: [
    { code: 'NHAN-NAM', name: 'Nhẫn Nam (Kim Tiền, Rồng, Khắc Chữ, Đính Đá)', baseLabor: 1200000, defaultTray: 'K01', count: 68 },
    { code: 'NHAN-NU', name: 'Nhẫn Nữ / Cặp Nhẫn Cưới', baseLabor: 650000, defaultTray: 'K02', count: 145 },
    { code: 'DAY-CHUYEN', name: 'Dây Chuyền & Dây Ý Khắc Hoa', baseLabor: 800000, defaultTray: 'K03', count: 110 },
    { code: 'LAC-TAY', name: 'Lắc Tay / Vòng Ximen 7 Chiếc', baseLabor: 1500000, defaultTray: 'K04', count: 85 },
    { code: 'BONG-TAI', name: 'Bông Tai / Hoa Tai Nữ', baseLabor: 450000, defaultTray: 'K05', count: 95 },
    { code: 'MAT-DAY', name: 'Mặt Dây Chuyền / Phật Bản Mệnh', baseLabor: 550000, defaultTray: 'K06', count: 62 },
    { code: 'KIENG-CUOI', name: 'Kiềng Cổ Cưới 24K Chạm Long Phụng', baseLabor: 1800000, defaultTray: 'K07', count: 24 }
  ],

  // 8. Đơn vị tính (ĐVT)
  units: [
    { code: 'CHI', name: 'Chỉ', grams: 3.75, note: '1 chỉ = 10 phân = 3.75g (Đơn vị niêm yết chính)' },
    { code: 'PHAN', name: 'Phân', grams: 0.375, note: '1 phân = 10 ly = 0.375g' },
    { code: 'LY', name: 'Ly', grams: 0.0375, note: '1 ly = 0.0375g' },
    { code: 'LUONG', name: 'Lượng (Cây)', grams: 37.5, note: '1 lượng = 10 chỉ = 37.5g' },
    { code: 'GAM', name: 'Gam (g)', grams: 1.0, note: 'Đơn vị đo quốc tế chuẩn cân Ohaus' },
    { code: 'CHIEU', name: 'Chiếc / Món', grams: 0, note: 'Đơn vị tính số lượng đếm sản phẩm' },
    { code: 'BO', name: 'Bộ (Set trang sức)', grams: 0, note: 'Bộ trang sức cưới (Kiềng + Lắc + Nhẫn + Bông)' }
  ],

  // 9. Thợ kim hoàn & Xưởng gia công
  craftsmen: [
    { id: 'THO01', name: 'Trần Văn Đạt (Đạt Tân Định)', workshop: 'Xưởng Kim Hoàn Tân Định', specialty: 'Đúc & Khắc 3D Nhẫn Nam', phone: '0908111222', lossAllowance: '0.3%', debt: 14500000, rating: '5 sao' },
    { id: 'THO02', name: 'Nguyễn Văn Ba (Ba Râu)', workshop: 'Xưởng Nữ Trang Chợ Thiếc', specialty: 'Đính Chấu Hột Xoàn & Đá Quý', phone: '0908333444', lossAllowance: '0.2%', debt: 8200000, rating: '5 sao' },
    { id: 'THO03', name: 'Lê Hoàng Minh', workshop: 'Tổ Xi Mạ Hoàng Gia', specialty: 'Xi Mạ Bạch Kim / Vàng Hồng / Rung Rửa', phone: '0908555666', lossAllowance: '0.4%', debt: 5600000, rating: '4.8 sao' },
    { id: 'THO04', name: 'Phạm Đức Cường', workshop: 'Xưởng Chạm Bạc & Vàng Tây Q.5', specialty: 'Chạm Long Phụng / Cắt Ni Nhẫn', phone: '0908777888', lossAllowance: '0.25%', debt: 3400000, rating: '4.9 sao' }
  ],

  // 10. Nhà cung cấp & Chành vàng
  suppliers: [
    { code: 'CHANH01', name: 'Chành Hoàng Gia Sài Gòn (Chợ Thiếc)', contact: 'Anh Hùng Chành', phone: '0913999888', address: 'Đỗ Ngọc Thạnh, P.14, Q.5, TP.HCM', debt: 340000000, creditLimit: 2000000000, status: 'Uy tín' },
    { code: 'CHANH02', name: 'Công Ty Vàng Bạc Đá Quý SJC Sài Gòn', contact: 'Phòng Bán Buôn', phone: '02839296006', address: '418-420 Nguyễn Thị Minh Khai, Q.3', debt: 0, creditLimit: 5000000000, status: 'Trực tiếp' },
    { code: 'CHANH03', name: 'Xưởng Nữ Trang Ý Milano Q5', contact: 'Chị Mai Nữ Trang', phone: '0903887766', address: 'Hải Thượng Lãn Ông, P.10, Q.5', debt: 85000000, creditLimit: 500000000, status: 'Uy tín' },
    { code: 'CHANH04', name: 'Tập Đoàn Kim Cương Lộc Phúc', contact: 'Đại Diện Kinh Doanh', phone: '0909555666', address: 'An Dương Vương, Q.5', debt: 150000000, creditLimit: 1000000000, status: 'Hợp đồng' }
  ],

  // 11. Tiêu chuẩn cơ sở (TCCS TT22)
  standards: [
    { code: 'TCCS-01', name: 'TCCS Vàng Trang Sức 999.9 (24K)', toleranceWeight: '±0.0002 chỉ (±0.001g)', minPurity: '99.90%', certReg: 'Quyết định 22/2013/TT-BKHCN', active: 'Có hiệu lực' },
    { code: 'TCCS-02', name: 'TCCS Nữ Trang Vàng Ý 750 (18K)', toleranceWeight: '±0.0005 chỉ (±0.002g)', minPurity: '75.00%', certReg: 'Thông tư 22/BKHCN - Phụ lục 1', active: 'Có hiệu lực' },
    { code: 'TCCS-03', name: 'TCCS Nữ Trang Vàng Tây 610', toleranceWeight: '±0.0005 chỉ (±0.002g)', minPurity: '61.00%', certReg: 'Tiêu chuẩn ngành kim hoàn Sài Gòn', active: 'Có hiệu lực' },
    { code: 'TCCS-04', name: 'TCCS Trang Sức Gắn Đá Quý & Kim Cương', toleranceWeight: '±0.0010 chỉ (±0.005g)', minPurity: 'Tùy loại vàng vỏ ổ', certReg: 'Kèm kiểm định GIA/PNJ/SJC', active: 'Có hiệu lực' }
  ],

  // 12. Danh mục Khay & Nhóm khay
  trays: [
    { code: 'K01', name: 'Khay 01 - Nhẫn Nam Kim Tiền 18K', group: 'Khay Nhẫn Nam', counter: 'Q01', rfidChip: 'EPC-E280-001-A1', capacity: 36, currentQty: 32, status: 'Tại quầy trưng bày' },
    { code: 'K02', name: 'Khay 02 - Nhẫn Nữ & Cặp Nhẫn Cưới Ý 750', group: 'Khay Nhẫn Cưới', counter: 'Q01', rfidChip: 'EPC-E280-002-B2', capacity: 48, currentQty: 45, status: 'Tại quầy trưng bày' },
    { code: 'K03', name: 'Khay 03 - Dây Chuyền & Dây Ý Khắc Hoa 610', group: 'Khay Dây Chuyền', counter: 'Q01', rfidChip: 'EPC-E280-003-C3', capacity: 24, currentQty: 22, status: 'Tại quầy trưng bày' },
    { code: 'K04', name: 'Khay 04 - Lắc Tay & Vòng Ximen 18K', group: 'Khay Lắc Tay', counter: 'Q01', rfidChip: 'EPC-E280-004-D4', capacity: 20, currentQty: 18, status: 'Tại quầy trưng bày' },
    { code: 'K05', name: 'Khay 05 - Nhẫn Trơn Vàng Ta 999.9 (1-5 chỉ)', group: 'Khay Vàng Ta', counter: 'Q02', rfidChip: 'EPC-E280-005-E5', capacity: 50, currentQty: 48, status: 'Tại quầy trưng bày' },
    { code: 'K06', name: 'Khay 06 - Ổ Kim Cương Thiên Nhiên GIA', group: 'Khay Kim Cương', counter: 'Q03', rfidChip: 'EPC-E280-006-F6', capacity: 18, currentQty: 15, status: 'Két bảo mật quầy 03' }
  ],

  // 13. Danh mục Tem
  tagTemplates: [
    { code: 'TEM-TT22-4012', name: 'Tem bướm 2 cánh kim hoàn chuẩn TT22 (40x12mm)', printer: 'Zebra ZD220 / Godex G500', wingLength: '85mm', barcodeFormat: 'Code 128', isDefault: true },
    { code: 'TEM-T-SHAPE', name: 'Tem chữ T treo dây chuyền / lắc dày (50x12mm)', printer: 'Zebra ZD220', wingLength: '100mm', barcodeFormat: 'Code 128', isDefault: false },
    { code: 'TEM-MINI', name: 'Tem mini cho bông tai & nhẫn bé (30x10mm)', printer: 'Godex G500', wingLength: '65mm', barcodeFormat: 'EAN-13 / Code 128', isDefault: false }
  ],

  // 14. Danh mục Mã hàng
  productSkus: [
    { sku: 'NN-750-KT', name: 'Nhẫn Nam Kim Tiền Vàng Ý 750', category: 'NHAN-NAM', gold: 'V750', standardLabor: 1500000, avgWeight: '2.500 chỉ' },
    { sku: 'DC-610-KH', name: 'Dây Chuyền Nữ Khắc Hoa 610', category: 'DAY-CHUYEN', gold: 'V610', standardLabor: 800000, avgWeight: '1.800 chỉ' },
    { sku: 'LT-750-XM', name: 'Vòng Ximen 7 Chiếc May Mắn 18K', category: 'LAC-TAY', gold: 'V750', standardLabor: 2500000, avgWeight: '5.200 chỉ' },
    { sku: 'NT-9999-EP', name: 'Nhẫn Trơn Ép Vỉ SJC 999.9 (1 Chỉ)', category: 'NHAN-NAM', gold: 'V9999', standardLabor: 0, avgWeight: '1.000 chỉ' }
  ],

  // 15. Loại tiền tệ & Tỷ giá quy đổi
  currencies: [
    { code: 'VND', name: 'Việt Nam Đồng', symbol: '₫', buyRate: 1, sellRate: 1, isBase: true },
    { code: 'USD', name: 'Đô la Mỹ', symbol: '$', buyRate: 25350, sellRate: 25720, isBase: false },
    { code: 'EUR', name: 'Đồng Euro Châu Âu', symbol: '€', buyRate: 27100, sellRate: 27650, isBase: false },
    { code: 'AUD', name: 'Đô la Úc', symbol: 'A$', buyRate: 16400, sellRate: 16850, isBase: false },
    { code: 'CAD', name: 'Đô la Canada', symbol: 'C$', buyRate: 18200, sellRate: 18700, isBase: false }
  ],

  // 16. Tài khoản giao dịch & Sổ ngân hàng
  bankAccounts: [
    { id: 'TK01', bankName: 'Vietcombank (VCB)', accountNo: '0071001234567', accountHolder: 'TRẦN HOÀNG HƯNG', branch: 'Chi nhánh TP.HCM', balance: 1450600000, isVietQR: true },
    { id: 'TK02', bankName: 'Techcombank (TCB)', accountNo: '19036688998899', accountHolder: 'CÔNG TY TNHH KIM HOÀN HOÀNG HƯNG', branch: 'Hội sở Sài Gòn', balance: 890400000, isVietQR: true },
    { id: 'TK03', bankName: 'MB Bank (Quân Đội)', accountNo: '0942889977', accountHolder: 'TRẦN HOÀNG HƯNG', branch: 'Sở Giao Dịch 2', balance: 412500000, isVietQR: true },
    { id: 'TM01', bankName: 'Két Sắt Tiền Mặt Trung Tâm', accountNo: 'KET-SAT-CH01', accountHolder: 'Thủ Quỹ Tiệm Vàng', branch: 'Trụ sở 124 Phố Kim Hoàn', balance: 285400000, isVietQR: false }
  ]
};

// Current selected category in Master Data screen
let currentMasterDataKey = 'customers';

/**
 * Switch Master Data category and re-render table
 */
function selectMasterDataCategory(key) {
  currentMasterDataKey = key;
  document.querySelectorAll('.md-pill').forEach(btn => {
    btn.className = 'md-pill px-3 py-1 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-700 transition';
  });
  if (window.event && window.event.target && window.event.target.classList.contains('md-pill')) {
    window.event.target.className = 'md-pill px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold border border-amber-600 shadow-sm transition';
  }
  renderMasterDataTable();
}

/**
 * Filter Master Data table by search keyword
 */
function searchMasterData(query) {
  renderMasterDataTable(query ? query.toLowerCase() : '');
}

/**
 * Render Master Data table dynamically based on active category
 */
function renderMasterDataTable(searchFilter = '') {
  const container = document.getElementById('master-data-table-container');
  const titleEl = document.getElementById('master-data-active-title');
  const countEl = document.getElementById('master-data-count-badge');
  if (!container) return;

  let headers = [];
  let rowsHtml = '';
  let dataList = [];
  let catTitle = '';

  switch (currentMasterDataKey) {
    case 'customers':
      catTitle = 'DANH MỤC KHÁCH HÀNG & NHÓM KHÁCH';
      dataList = MASTER_DATA_STORE.customers;
      headers = ['Mã KH', 'Họ & Tên Khách Hàng', 'Số Điện Thoại', 'Nhóm Khách', 'Điểm Thưởng', 'Công Nợ', 'Địa Chỉ', 'Thao Tác'];
      break;
    case 'customerGroups':
      catTitle = 'DANH MỤC NHÓM KHÁCH HÀNG & CHÍNH SÁCH';
      dataList = MASTER_DATA_STORE.customerGroups;
      headers = ['Mã Nhóm', 'Tên Nhóm Khách', 'Chiết Khấu Vàng', 'Giảm Tiền Công', 'Chi Tiêu Tối Thiểu', 'Số Lượng Khách', 'Thao Tác'];
      break;
    case 'branches':
      catTitle = 'DANH MỤC CỬA HÀNG & CHI NHÁNH';
      dataList = MASTER_DATA_STORE.branches;
      headers = ['Mã CH', 'Tên Chi Nhánh', 'Địa Chỉ', 'Hotline', 'Quản Lý', 'Số Quầy', 'Trạng Thái', 'Thao Tác'];
      break;
    case 'counters':
      catTitle = 'DANH MỤC QUẦY KHO PHÂN CẤP';
      dataList = MASTER_DATA_STORE.counters;
      headers = ['Mã Quầy', 'Tên Quầy / Kho', 'Chi Nhánh', 'Phân Loại', 'Phụ Trách', 'Số Món', 'Tổng TL Vàng (Chỉ)', 'Trạng Thái'];
      break;
    case 'goldTypes':
      catTitle = 'DANH MỤC LOẠI VÀNG & TUỔI VÀNG NIÊM YẾT';
      dataList = MASTER_DATA_STORE.goldTypes;
      headers = ['Mã Vàng', 'Tên Loại Vàng', 'Hàm Lượng Au', 'Tuổi Vàng', 'Giá Mua Vào', 'Giá Bán Ra', 'Màu Sắc', 'Chuẩn TT22'];
      break;
    case 'goldGroups':
      catTitle = 'DANH MỤC NHÓM VÀNG KINH DOANH';
      dataList = MASTER_DATA_STORE.goldGroups;
      headers = ['Mã Nhóm', 'Tên Nhóm Vàng', 'Mô Tả Chi Tiết', 'Loại Vàng Trực Thuộc', 'Thao Tác'];
      break;
    case 'productCategories':
      catTitle = 'DANH MỤC NHÓM HÀNG TRANG SỨC';
      dataList = MASTER_DATA_STORE.productCategories;
      headers = ['Mã Nhóm', 'Tên Nhóm Hàng', 'Tiền Công Vốn Chuẩn', 'Khay Mặc Định', 'Số Lượng Món', 'Thao Tác'];
      break;
    case 'units':
      catTitle = 'DANH MỤC ĐƠN VỊ TÍNH (ĐVT) & QUY ĐỔI KHỐI LƯỢNG';
      dataList = MASTER_DATA_STORE.units;
      headers = ['Mã ĐVT', 'Tên Đơn Vị', 'Trọng Lượng Gam (g)', 'Ghi Chú Nghiệp Vụ Kim Hoàn', 'Thao Tác'];
      break;
    case 'craftsmen':
      catTitle = 'DANH MỤC THỢ KIM HOÀN & XƯỞNG GIA CÔNG';
      dataList = MASTER_DATA_STORE.craftsmen;
      headers = ['Mã Thợ', 'Họ Tên Thợ / Nghệ Nhân', 'Tên Xưởng', 'Chuyên Môn', 'Hao Hụt Cho Phép', 'Công Nợ', 'Đánh Giá', 'Thao Tác'];
      break;
    case 'suppliers':
      catTitle = 'DANH MỤC NHÀ CUNG CẤP & CHÀNH VÀNG ĐẦU MỐI';
      dataList = MASTER_DATA_STORE.suppliers;
      headers = ['Mã NCC', 'Tên Nhà Cung Cấp / Chành', 'Đại Diện Liên Hệ', 'Hotline', 'Công Nợ Hiện Tại', 'Hạn Mức Tín Dụng', 'Trạng Thái'];
      break;
    case 'standards':
      catTitle = 'DANH MỤC TIÊU CHUẨN CƠ SỞ (TCCS) THÔNG TƯ 22/BKHCN';
      dataList = MASTER_DATA_STORE.standards;
      headers = ['Mã TCCS', 'Tên Tiêu Chuẩn', 'Dung Sai Khối Lượng', 'Hàm Lượng Au Tối Thiểu', 'Căn Cứ Pháp Lý', 'Hiệu Lực'];
      break;
    case 'trays':
      catTitle = 'DANH MỤC KHAY TRANG SỨC & TÍCH HỢP CHIP RFID';
      dataList = MASTER_DATA_STORE.trays;
      headers = ['Mã Khay', 'Tên Khay', 'Nhóm Khay', 'Quầy Trưng Bày', 'Mã Chip RFID UHF', 'Sức Chứa', 'Đang Chứa', 'Trạng Thái'];
      break;
    case 'tagTemplates':
      catTitle = 'DANH MỤC TEM & MẪU TEM BƯỚM THÔNG TƯ 22';
      dataList = MASTER_DATA_STORE.tagTemplates;
      headers = ['Mã Mẫu Tem', 'Tên Mẫu Tem', 'Dòng Máy In Hỗ Trợ', 'Chiều Dài Sải Cánh', 'Chuẩn Mã Vạch', 'Mặc Định'];
      break;
    case 'productSkus':
      catTitle = 'DANH MỤC MÃ HÀNG (SKU) & QUY CÁCH CHẾ TÁC';
      dataList = MASTER_DATA_STORE.productSkus;
      headers = ['Mã SKU', 'Tên Quy Cách Món', 'Nhóm Hàng', 'Loại Vàng', 'Tiền Công Chuẩn', 'TL Trung Bình (Chỉ)', 'Thao Tác'];
      break;
    case 'currencies':
      catTitle = 'DANH MỤC LOẠI TIỀN TỆ & TỶ GIÁ NGOẠI TỆ';
      dataList = MASTER_DATA_STORE.currencies;
      headers = ['Mã Tiền Tệ', 'Tên Ngoại Tệ', 'Ký Hiệu', 'Tỷ Giá Mua Vào (VND)', 'Tỷ Giá Bán Ra (VND)', 'Loại Tiền'];
      break;
    case 'bankAccounts':
      catTitle = 'TÀI KHOẢN GIAO DỊCH, SỔ QUỸ & VIETQR NGÂN HÀNG';
      dataList = MASTER_DATA_STORE.bankAccounts;
      headers = ['Mã Sổ / TK', 'Ngân Hàng / Két Sắt', 'Số Tài Khoản', 'Chủ Tài Khoản', 'Chi Nhánh', 'Số Dư Khả Dụng', 'VietQR', 'Thao Tác'];
      break;
    default:
      catTitle = 'DANH MỤC MASTER DATA';
  }

  if (titleEl) titleEl.innerText = catTitle;

  // Filter data
  let filtered = dataList;
  if (searchFilter) {
    filtered = dataList.filter(item => JSON.stringify(item).toLowerCase().includes(searchFilter));
  }
  if (countEl) countEl.innerText = `${filtered.length} bản ghi`;

  // Build Table HTML
  let theadHtml = '<thead class="bg-gradient-to-r from-slate-100 via-amber-50 to-slate-100 text-slate-800 font-bold border-b border-slate-200 text-xs uppercase sticky top-0 z-10"><tr>';
  headers.forEach(h => {
    theadHtml += `<th class="p-3 text-left whitespace-nowrap">${h}</th>`;
  });
  theadHtml += '</tr></thead>';

  let tbodyHtml = '<tbody class="divide-y divide-slate-100 font-medium text-xs">';
  if (filtered.length === 0) {
    tbodyHtml += `<tr><td colspan="${headers.length}" class="text-center py-8 text-slate-400">Không tìm thấy bản ghi nào phù hợp</td></tr>`;
  } else {
    filtered.forEach((item, index) => {
      tbodyHtml += '<tr class="hover:bg-amber-50/50 transition">';
      
      // Render columns based on entity
      if (currentMasterDataKey === 'customers') {
        tbodyHtml += `
          <td class="p-3 font-mono font-bold text-amber-700">${item.id}</td>
          <td class="p-3 font-bold text-slate-900">${item.name}</td>
          <td class="p-3 font-mono text-slate-700">${item.phone}</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${item.group.includes('Kim Cương') ? 'bg-purple-100 text-purple-800 border border-purple-300' : item.group.includes('Vàng') ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-slate-100 text-slate-700'}">${item.group}</span></td>
          <td class="p-3 text-right font-mono text-emerald-700 font-bold">${item.points.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-right font-mono font-bold ${item.debt > 0 ? 'text-red-600' : 'text-slate-400'}">${item.debt.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-slate-600">${item.address}</td>
          <td class="p-3 text-center">
            <button onclick="alert('Xem chi tiết khách hàng: ${item.name}')" class="text-amber-700 hover:text-amber-900 font-bold px-2 py-1 bg-amber-50 rounded">Sửa</button>
          </td>`;
      } else if (currentMasterDataKey === 'goldTypes') {
        tbodyHtml += `
          <td class="p-3 font-mono font-bold text-amber-800">${item.code}</td>
          <td class="p-3 font-bold text-slate-900">${item.name}</td>
          <td class="p-3 text-right font-mono font-bold text-amber-700">${item.purity.toFixed(2)}%</td>
          <td class="p-3 font-semibold text-slate-700">${item.age}</td>
          <td class="p-3 text-right font-mono font-bold text-emerald-700">${item.buyRate.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-right font-mono font-bold text-red-700">${item.sellRate.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-slate-600">${item.color}</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">${item.tt22Standard}</span></td>`;
      } else if (currentMasterDataKey === 'trays') {
        tbodyHtml += `
          <td class="p-3 font-mono font-bold text-amber-800">${item.code}</td>
          <td class="p-3 font-bold text-slate-900">${item.name}</td>
          <td class="p-3 text-slate-700">${item.group}</td>
          <td class="p-3 font-semibold text-blue-700">${item.counter}</td>
          <td class="p-3 font-mono text-purple-700 text-[11px] font-bold bg-purple-50 px-2 rounded">${item.rfidChip}</td>
          <td class="p-3 text-center font-mono">${item.capacity} món</td>
          <td class="p-3 text-center font-mono font-bold text-emerald-700">${item.currentQty} món</td>
          <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">${item.status}</span></td>`;
      } else if (currentMasterDataKey === 'bankAccounts') {
        tbodyHtml += `
          <td class="p-3 font-mono font-bold text-amber-800">${item.id}</td>
          <td class="p-3 font-bold text-slate-900">${item.bankName}</td>
          <td class="p-3 font-mono font-bold text-blue-800">${item.accountNo}</td>
          <td class="p-3 font-semibold text-slate-800">${item.accountHolder}</td>
          <td class="p-3 text-slate-600">${item.branch}</td>
          <td class="p-3 text-right font-mono font-extrabold text-emerald-700">${item.balance.toLocaleString('vi-VN')} đ</td>
          <td class="p-3 text-center">${item.isVietQR ? '<span class="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-bold text-[10px]">Tự sinh VietQR</span>' : '<span class="text-slate-400">Tiền mặt</span>'}</td>
          <td class="p-3 text-center"><button class="px-2 py-1 bg-amber-50 text-amber-800 font-bold rounded">Đối Soát</button></td>`;
      } else {
        // Generic renderer
        Object.values(item).forEach(val => {
          tbodyHtml += `<td class="p-3 text-slate-700 whitespace-nowrap">${typeof val === 'number' ? val.toLocaleString('vi-VN') : val}</td>`;
        });
      }

      tbodyHtml += '</tr>';
    });
  }
  tbodyHtml += '</tbody>';

  container.innerHTML = `<table class="w-full text-left border-collapse">${theadHtml}${tbodyHtml}</table>`;
}

// Export global function
window.MASTER_DATA_STORE = MASTER_DATA_STORE;
window.selectMasterDataCategory = selectMasterDataCategory;
window.searchMasterData = searchMasterData;
window.renderMasterDataTable = renderMasterDataTable;
