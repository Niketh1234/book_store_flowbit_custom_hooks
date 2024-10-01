import { Spinner } from "flowbite-react";

export default function LoadingButtonSpinner() {
  return (
    <div className="flex flex-row gap-3">
      <Spinner aria-label="Alternate spinner button example" size="xl" />
    </div>
  );
}
