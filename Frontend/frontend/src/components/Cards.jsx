import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-80 h-[450px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border flex flex-col justify-between">
          <figure className="h-[200px] overflow-hidden flex items-center justify-center">
            <img
              src={item.image}
              alt="Book"
              className="object-contain max-h-full"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <div>
              <h2 className="card-title text-lg font-bold">
                {item.name}
                <div className="badge badge-secondary">{item.category}</div>
              </h2>
              <p className="text-sm mt-2">{item.title}</p>
            </div>
            <div className="card-actions justify-between items-center mt-4">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
