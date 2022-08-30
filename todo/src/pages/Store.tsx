import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export const Store = () => {
  return (
    <div className="flex flex-col">
      <h1 className="">Store</h1>
      <div className="flex justify-center gap-6 flex-wrap m-8">
        {storeItems.map((item) => (
          <StoreItem {...item} />
        ))}
      </div>
    </div>
  );
};
