import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  dynamicImport: {
    // 页面加载的loading
    loading: '@/Loading'
  }
})
