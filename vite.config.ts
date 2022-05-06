import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 3001,//本地前端服务启动端口
        open: true,//自动打开，
        base: '/',
        proxy: {
            '/api': {
                target: 'http://localhost:8082',
                changeOrigin: true,//开启
                rewrite: (path) => path.replace('/api', '')

            }

        }
    }
})
