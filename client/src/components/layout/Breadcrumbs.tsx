import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="bg-gray-100 py-2 md:py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center text-xs md:text-sm overflow-x-auto whitespace-nowrap">
          {items.map((item, index) => {
            // Check if it's the last item
            const isLast = index === items.length - 1;
            
            // If it's the last item, render as text, otherwise as a link
            if (isLast) {
              return (
                <span key={index} className="text-gray-900 font-semibold flex items-center">
                  {index > 0 && <ChevronRight className="mx-1 md:mx-2 h-3 w-3 md:h-4 md:w-4 text-gray-500 flex-shrink-0" />}
                  <span className="truncate">{item.label}</span>
                </span>
              );
            }
            
            return (
              <div key={index} className="flex items-center text-gray-600">
                {index > 0 && <ChevronRight className="mx-1 md:mx-2 h-3 w-3 md:h-4 md:w-4 text-gray-500 flex-shrink-0" />}
                <Link href={item.href || "#"} className="hover:text-primary truncate">
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
