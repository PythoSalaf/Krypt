import { Footer, Navbar, Services, Transaction, Welcome } from "./components";

function App() {
  return (
    <div className="w-full flex flex-col h-screen relative">
      <div className="w-full fixed z-40">
        <Navbar />
      </div>
      <div className="flex-grow pt-[3.5rem]">
        <Welcome />
        <Services />
        <Transaction />
      </div>
      <Footer />
    </div>
  );
}

export default App;
