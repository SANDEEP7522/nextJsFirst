
export const Header = () => {
     return (
          <nav className="container flex items-center justify-between mx-auto h-12">
          <h1 className="text-3xl font-bold cursor-pointer">Home</h1>
          <div className="flex space-x-4 gap-2">
            <div className="cursor-pointer">Performance</div>
            <div className="cursor-pointer">Reliability</div>
          </div>
        </nav>
     );
}