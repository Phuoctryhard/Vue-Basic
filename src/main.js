// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'   // 👈 Thêm dòng này (nếu bạn đặt tên là index.css)
// import 'primeicons/primeicons.css'
// import router from './router'   // import router
// import Toast from 'vue-toastification'
// import 'vue-toastification/dist/index.css'

// app.use(Toast, {
//   // optional options
//   position: "top-right",
//   timeout: 3000,
// })
// createApp(App)
//  .use(router)   // <-- bắt buộc
// .mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'primeicons/primeicons.css'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)   // 👉 tạo app trước

app.use(router)              // dùng router
app.use(Toast, {             // dùng Toast
  position: "bottom-right",
  timeout: 3000,
})

app.mount('#app')            // mount app
