import Footer from './Footer';
import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <div style={{minHeight: "100%"}} className="d-flex flex-column text-center">
      <NavBar />
      <main className="mt-3">
      {children}
      </main>
      <Footer/>
    </div>
  );
}
export default Layout;
