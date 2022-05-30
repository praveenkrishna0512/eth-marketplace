import '@styles/globals.css'

const NoLayout = ({children}) => <>{children}</>

function MyApp({ Component, pageProps }) {
  
  const Layout = Component.Layout ?? NoLayout
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
