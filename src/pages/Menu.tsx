import { menu } from "../data/MenuItems";

export default function Menu() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <h1 className="dark-red font-bold text-2xl mb-6">OUR MENU</h1>
      <div className="max-w-4xl w-full space-y-12">
        {menu.categories.map((category) => (
          <div key={category.name}>
            <h2 className="uppercase font-bold dark-red mb-2">
              {category.name}
            </h2>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between font-semibold">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm w-3/4">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-4 mt-12">
        <button className="border border-dark-red dark-red px-4 py-2 uppercase hover:bg-red-50">
          OUR WINE
        </button>
        <button className="border border-dark-red dark-red px-4 py-2 uppercase hover:bg-red-50">
          OUR LIQUOR
        </button>
      </div>
    </div>
  );
}
