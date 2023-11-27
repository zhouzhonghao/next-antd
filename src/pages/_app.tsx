import '@/styles/globals.css'
import { ConfigProvider, Layout, theme } from 'antd'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm
    }}>
      <Layout className="w-[100%] h-[100%]">
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  )
}
