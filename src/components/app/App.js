import './App.css';
import YandexBound from '../yandexBound/YandexBound';
function App() {
  return (
    <>
    <section className="main">
        <div className="container">
        <h1>Проект был сделан специально для компании <span>Cофтер</span></h1>
       </div>
       <div className='yandex'>
       <YandexBound/>
       </div>
    </section>
  
  </>
  )
}

export default App;
