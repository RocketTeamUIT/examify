import Header from './components/Header';

function HeaderLayout({ children }) {
  return (
    <div className="bg-bg_light_gray min-h-screen">
      <Header />
      {children}
    </div>
  );
}

export default HeaderLayout;
