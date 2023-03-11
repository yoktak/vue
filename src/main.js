// vueからCreateApp関数をインポート
import { createApp } from 'vue'
// App.vueからAppをインポート
import App from './App.vue'

import './assets/main.css'

// App.vueをid=appが指定されている場所に挿入
createApp(App).mount('#app')
