import './App.css'
import Review from './reviewsProject/Review'
import TourState from './tours/TourState'

function App() {

  return (
    <div className="App">
      {/* <TourState /> */}

      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </div>
  )
}

export default App
