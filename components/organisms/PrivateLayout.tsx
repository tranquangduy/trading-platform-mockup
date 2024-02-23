import LayoutMenu from './LayoutMenu';

type PrivateLayoutProps = {
  heading?: string;
  children?: React.ReactNode;
};

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ heading, children }) => {
  return (
    <>
      <div className="min-h-full">
        <LayoutMenu />
        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                {heading}
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};
export default PrivateLayout;
