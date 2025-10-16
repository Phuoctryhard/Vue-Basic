<script setup lang="ts">
import axios from 'axios'

const exportExcel = async () => {
  try {
    const params = {
      status: 'Đã duyệt',
      start_time: '2025-09-01',
      end_time: '2025-09-30',
      name: 'Hoàng Thị Dư',
      keyword: 'nghỉ',
    }

    const response = await axios.get('http://localhost:3333/orders/export-excel', {
      params,
      responseType: 'blob', // quan trọng!
    })

    // Tạo link tải file Excel
    const blob = new Blob([response.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url

    // Đặt tên file tải xuống
    link.download = `DonNghi_${new Date().toISOString().slice(0, 10)}.xlsx`
    link.click()
    window.URL.revokeObjectURL(url)
  } catch (err) {
    console.error('❌ Lỗi khi export:', err)
  }
}
</script>

<template>
  <button @click="exportExcel" class="px-3 py-2 bg-blue-600 text-white rounded-lg">
    ⬇️ Xuất Excel
  </button>
</template>
