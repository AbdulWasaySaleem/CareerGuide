import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 px-4 py-6 max-w-7xl mx-auto w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
