import '../styles/globals.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
 
//comnponents
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="layout-page">
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
