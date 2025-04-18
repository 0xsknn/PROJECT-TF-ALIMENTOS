import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ProductImage {
  id: number;
  src: string;
  thumbnail: string;
  alt: string;
}

type ProductCategory = 'arroz' | 'soja' | 'milho';

const productImagesMap: Record<ProductCategory, ProductImage[]> = {
  arroz: [
    {
      id: 1,
      src: "/images/arroz1111.webp",
      thumbnail: "/images/arroz1111.webp",
      alt: "Arroz com Casca - Na Mão"
    },
    {
      id: 2,
      src: "/images/arroz222.webp",
      thumbnail: "/images/arroz222.webp",
      alt: "Arroz com Casca - Em Quantidade"
    },
    {
      id: 3,
      src: "/images/arroz3333.jpg",
      thumbnail: "/images/arroz3333.jpg",
      alt: "Arroz com Casca - Detalhe Próximo"
    }
  ],
  soja: [
    {
      id: 1,
      src: "/images/1maosoja.png",
      thumbnail: "/images/1maosoja.png",
      alt: "Soja Grão - Detalhe na Mão"
    },
    {
      id: 2,
      src: "/images/2maosoja.png",
      thumbnail: "/images/2maosoja.png", 
      alt: "Soja Grão - Na Mão no Armazém"
    },
    {
      id: 3,
      src: "/images/inteirosoja.png",
      thumbnail: "/images/inteirosoja.png",
      alt: "Soja Grão - Detalhe Grãos"
    }
  ],
  milho: [
    {
      id: 1,
      src: "/images/1mao.webp",
      thumbnail: "/images/1mao.webp",
      alt: "Milho - Na Mão em Armazém"
    },
    {
      id: 2,
      src: "/images/2mao.jpg",
      thumbnail: "/images/2mao.jpg",
      alt: "Milho - Amostra na Mão"
    },
    {
      id: 3,
      src: "/images/inteiro.webp",
      thumbnail: "/images/inteiro.webp",
      alt: "Milho - Grãos Armazenados"
    }
  ]
};

interface ProductGalleryProps {
  productName: string;
}

export const ProductGallery = ({ productName }: ProductGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Determine which category to use based on the product name
  const getProductCategory = () => {
    if (productName.toLowerCase().includes('arroz')) {
      return 'arroz';
    } else if (productName.toLowerCase().includes('soja')) {
      return 'soja';
    } else if (productName.toLowerCase().includes('milho')) {
      return 'milho';
    }
    return 'arroz'; // Default fallback
  };

  const productCategory = getProductCategory();
  const productImages = productImagesMap[productCategory];

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
