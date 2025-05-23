const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />
      <main className="w-full overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
};