import Nav from './Nav';
import Meta from './Meta';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className='container'>
        <main className='main'>
          <Header />
          {children}
        </main>
      </div>
      <footer className='footer'>Testerino</footer>
    </>
  );
};

export default Layout;
