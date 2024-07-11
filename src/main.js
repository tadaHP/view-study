import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 사용자 정의 디렉티브
app.directive('focus-on', {
    mounted(el, binding) {
      const focusElement = document.querySelector(binding.value)
      console.log(focusElement)
      el.addEventListener('click', () => {
        if (focusElement) {
          focusElement.focus()
        }
      })
    }
  })
  

  app.config.globalProperties.$apiBaseUrl = 'https://api.example.com'
  app.config.globalProperties.$appName = 'My Vue Test App'
  app.config.globalProperties.$appVersion = '1.0.0'
// mount 전에 추가적인 정보를 넣어야 함 이후에 넣으면 spring security 권한관리마냥 막힘
  app.mount('#app')