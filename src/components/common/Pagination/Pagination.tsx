import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Pagination = {
  currentPage: number;
  onChangePageNumber: (page: number) => void;
};

const Pagination = ({ currentPage, onChangePageNumber }: Pagination) => {
  const navigate = useNavigate();

  const paginationDate = {
    pageNumber: currentPage,
    totalPages: 10,
  };

  const handleUpdatePageNumber = (page: number) => {
    onChangePageNumber(page);
    navigate(`?page=${page}`);
  };

  return (
    <div className="flex gap-2 items-center">
      <Button
        size={"sm"}
        className="text-xl py-0 px-1 bg-transparent text-black border border-gray-400 h-8 hover:bg-gray-300"
        disabled={currentPage === 0}
      >
        <ChevronLeft size={"1.5rem"} />
      </Button>
      {Array.from(
        { length: paginationDate.totalPages },
        (_, index) => index
      ).map((pageNumber) => (
        <button
          key={pageNumber}
          className={cn(
            pageNumber === paginationDate.pageNumber
              ? "bg-gray-200 outline outline-1 border-gray-600"
              : "bg-white",
            "border border-gray-400 py-1 px-3 text-sm font-bold rounded-sm h-8"
          )}
          onClick={() => handleUpdatePageNumber(pageNumber)}
        >
          {pageNumber + 1}
        </button>
      ))}
      <Button
        size={"sm"}
        className="text-xl py-0 px-1 bg-transparent text-black border border-gray-400 h-8 hover:bg-gray-300"
        disabled={paginationDate.pageNumber === paginationDate.totalPages - 1}
      >
        <ChevronRight size={"1.5rem"} />
      </Button>
    </div>
  );
};

export default Pagination;
