import { Skeleton } from "../ui/skeleton";

const DeliveryAddressSkeleton = () => {
  return (
    <div>
      <div className="h-16 w-16 flex justify-center items-center ">
        <Skeleton className="h-16 w-16 rounded-xl" />
      </div>
      <div className="flex flex-col">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-20" />
      </div>
    </div>
  );
}

export default DeliveryAddressSkeleton;