/**
 * SMART TV DISPLAY & GOLD PRICE BOARD MODULE - HOÀNG HƯNG JEWELRY ERP PRO
 * Màn hình Fullscreen chuyên dụng cho Smart TV tiệm vàng và điều chỉnh bảng giá
 */

const SMART_TV_STATE = {
  isFullscreen: false,
  rates: [
    { name: 'VÀNG MIẾNG SJC 1L - 10L', purity: '99.99%', buy: 88500000, sell: 90500000, change: '+300K', trend: 'up' },
    { name: 'NHẪN TRƠN ÉP VỈ 999.9', purity: '99.99%', buy: 8720000, sell: 8870000, change: '+250K', trend: 'up' },
    { name: 'VÀNG NỮ TRANG 24K (99.9%)', purity: '99.90%', buy: 8650000, sell: 8820000, change: '+200K', trend: 'up' },
    { name: 'VÀNG Ý 750 (18K Ý CAO CẤP)', purity: '75.00%', buy: 6280000, sell: 6490000, change: '+30K', trend: 'up' },
    { name: 'VÀNG TÂY 610 (CHUẨN 15K SÀI GÒN)', purity: '61.00%', buy: 5110000, sell: 5320000, change: '+20K', trend: 'up' },
    { name: 'VÀNG TRẮNG 14K (585)', purity: '58.50%', buy: 4890000, sell: 5080000, change: '0', trend: 'same' },
    { name: 'VÀNG TÂY 10K (416)', purity: '41.60%', buy: 3450000, sell: 3680000, change: '-10K', trend: 'down' },
    { name: 'BẠCH KIM PLATINUM 950', purity: '95.00%', buy: 4950000, sell: 5250000, change: '+50K', trend: 'up' }
  ],
  marqueeText: 'CHÀO MỪNG QUÝ KHÁCH ĐẾN VỚI TIỆM VÀNG HOÀNG HƯNG • CAM KẾT CHUẨN ĐỘ TUỔI VÀNG THEO THÔNG TƯ 22/2013/TT-BKHCN • CÂN ĐIỆN TỬ ĐÃ KIỂM ĐỊNH ĐO LƯỜNG VIỆT NAM • HOTLINE: 0942 88 99 77'
};

function toggleSmartTvFullscreen() {
  const modal = document.getElementById('smart-tv-fullscreen-modal');
  if (!modal) return;

  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    // Try browser fullscreen
    const elem = modal;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {});
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
    renderSmartTvContent();
  } else {
    modal.classList.add('hidden');
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }
}

function renderSmartTvContent() {
  const tbody = document.getElementById('smart-tv-rates-tbody');
  const clockEl = document.getElementById('smart-tv-clock');
  const dateEl = document.getElementById('smart-tv-date');
  const marqueeEl = document.getElementById('smart-tv-marquee');

  if (clockEl) {
    const now = new Date();
    clockEl.innerText = now.toLocaleTimeString('vi-VN', { hour12: false });
    if (dateEl) dateEl.innerText = `Thứ Sáu, Ngày ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  }

  if (marqueeEl) {
    marqueeEl.innerText = SMART_TV_STATE.marqueeText;
  }

  if (tbody) {
    let html = '';
    SMART_TV_STATE.rates.forEach((r, idx) => {
      const isMillion = r.buy > 10000000;
      const unit = isMillion ? 'đ/Lượng' : 'đ/Chỉ';
      html += `
        <tr class="${idx % 2 === 0 ? 'bg-[#18040a]' : 'bg-[#20050e]'} border-b border-amber-500/20 text-lg md:text-xl font-bold">
          <td class="py-3 px-4 text-left font-serif tracking-wide text-amber-200">
            ${r.name}
          </td>
          <td class="py-3 px-3 text-center font-mono text-amber-400/90 text-sm md:text-base">
            ${r.purity}
          </td>
          <td class="py-3 px-4 text-right font-mono text-emerald-400 tracking-wider">
            ${r.buy.toLocaleString('vi-VN')} <span class="text-xs text-slate-400 font-normal">${unit}</span>
          </td>
          <td class="py-3 px-4 text-right font-mono text-rose-400 tracking-wider">
            ${r.sell.toLocaleString('vi-VN')} <span class="text-xs text-slate-400 font-normal">${unit}</span>
          </td>
          <td class="py-3 px-4 text-center font-mono text-sm">
            ${r.trend === 'up' ? `<span class="text-emerald-400">▲ ${r.change}</span>` : r.trend === 'down' ? `<span class="text-rose-400">▼ ${r.change}</span>` : `<span class="text-slate-400">— ${r.change}</span>`}
          </td>
        </tr>`;
    });
    tbody.innerHTML = html;
  }
}

// Start TV clock update
setInterval(() => {
  const clockEl = document.getElementById('smart-tv-clock');
  if (clockEl && !document.getElementById('smart-tv-fullscreen-modal').classList.contains('hidden')) {
    const now = new Date();
    clockEl.innerText = now.toLocaleTimeString('vi-VN', { hour12: false });
  }
}, 1000);

window.SMART_TV_STATE = SMART_TV_STATE;
window.toggleSmartTvFullscreen = toggleSmartTvFullscreen;
window.renderSmartTvContent = renderSmartTvContent;
