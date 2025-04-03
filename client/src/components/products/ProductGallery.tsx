import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const productImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    alt: "Arroz Beneficiado - Vista 1"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1455480045400-8068e1c49228?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1455480045400-8068e1c49228?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    alt: "Arroz Beneficiado - Vista 2"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1604709378632-83e1580fae47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1604709378632-83e1580fae47?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    alt: "Arroz Beneficiado - Vista 3"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
    thumbnail: "https://images.unsplash.com/photo-1550828520-4cb496926fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    alt: "Arroz Beneficiado - Embalagem"
  }
];

interface ProductGalleryProps {
  productName: string;
}

export const ProductGallery = ({ productName }: ProductGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  return (
    <div>
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogTrigger asChild>
            <div className="relative cursor-zoom-in h-[400px]">
              <img 
                src={productImages[currentImage].src} 
                alt={productImages[currentImage].alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                <div className="opacity-0 hover:opacity-100 transition-opacity">
                  <ZoomIn className="text-white h-8 w-8" />
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <div className="relative w-full">
              <img 
                src={productImages[lightboxIndex].src} 
                alt={productImages[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] mx-auto"
              />
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightboxImage();
                }}
                className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 flex items-center justify-center z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightboxImage();
                }}
                className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 flex items-center justify-center z-10"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {productImages.map((image, index) => (
          <div 
            key={image.id}
            className={`bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition ${
              index === currentImage ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img 
              src={image.thumbnail} 
              alt={image.alt}
              className="w-full h-24 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
