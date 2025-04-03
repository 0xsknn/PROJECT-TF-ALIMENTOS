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
    <div className="bg-gray-100 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center text-sm">
          {items.map((item, index) => {
            // Check if it's the last item
            const isLast = index === items.length - 1;
            
            // If it's the last item, render as text, otherwise as a link
            if (isLast) {
              return (
                <span key={index} className="text-gray-900 font-semibold flex items-center">
                  {index > 0 && <ChevronRight className="mx-2 h-4 w-4 text-gray-500" />}
                  {item.label}
                </span>
              );
            }
            
            return (
              <div key={index} className="flex items-center text-gray-600">
                {index > 0 && <ChevronRight className="mx-2 h-4 w-4 text-gray-500" />}
                <Link href={item.href || "#"} className="hover:text-primary">
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
