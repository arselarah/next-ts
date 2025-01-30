import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <main className=''>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
