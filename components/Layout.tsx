import Footer from './Footer';
import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="mt-5 container text-center">
      {children}
      </div>
      <Footer />
    </>
  );
}
export default Layout;
