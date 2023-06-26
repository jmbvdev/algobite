import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar"
import RestaurantCardList from "./components/RestaurantCardList/RestaurantCardList";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar/>
        <main>
          <Header/>
         <RestaurantCardList/>
        </main>
      </main>
    </main>
  );
}
