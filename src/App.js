import AlphabetFilter from "./components/AlphabetFilter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/Searchbar";
import Appointment from "./components/Appointment";


const App = () => {
  return(
    <div className="app">
      <div className="content-wrap">
        <Header />
        <Appointment />
        <SearchBar />
        <AlphabetFilter />
        <Footer />
      </div>
    </div>
  )
}

export default App;