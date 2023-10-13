import Header from './components/Header'
import Summarizer from './components/Summarizer'
import "./App.css";

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Header />
        <Summarizer />
      </div>

    </main>
  )
}

export default App