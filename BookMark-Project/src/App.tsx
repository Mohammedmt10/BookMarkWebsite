import { RecoilRoot } from 'recoil'
import { Extension } from './components/Extension'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { LandingPage } from './components/LandingPage'
import { Questions } from './components/Questions'

function App() {

  return <div className='max-w-screen overflow-x-hidden'>
    <RecoilRoot>
      <LandingPage />
      <Features />
      <Extension />
      <Questions />
      <Footer />
      
    </RecoilRoot>
  </div>
}

export default App
