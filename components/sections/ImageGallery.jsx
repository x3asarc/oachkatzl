import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel'
import { Eye, Maximize, Image as ImageIcon } from 'lucide-react'

const ImageGallery = ({ propertyData }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const galleryImages = [
    {
      src: '/images/gallery/main-living-room.jpg',
      alt: 'Hauptwohnbereich mit Bergblick',
      category: 'Wohnbereich',
      featured: true
    },
    {
      src: '/images/gallery/bedroom-1.jpg',
      alt: 'Schlafzimmer 1 mit Doppelbett',
      category: 'Schlafzimmer'
    },
    {
      src: '/images/gallery/bedroom-2.jpg',
      alt: 'Schlafzimmer 2 mit Etagenbetten',
      category: 'Schlafzimmer'
    },
    {
      src: '/images/gallery/kitchen.jpg',
      alt: 'Vollausgestattete moderne Küche',
      category: 'Küche'
    },
    {
      src: '/images/gallery/bathroom.jpg',
      alt: 'Modernes Badezimmer',
      category: 'Bad'
    },
    {
      src: '/images/gallery/terrace-view.jpg',
      alt: 'Terrasse mit Panorama-Bergblick',
      category: 'Außenbereich'
    },
    {
      src: '/images/gallery/garden.jpg',
      alt: 'Privater Garten mit BBQ-Bereich',
      category: 'Außenbereich'
    },
    {
      src: '/images/gallery/mountain-view.jpg',
      alt: 'Atemberaubender Blick auf die Nordkette',
      category: 'Aussicht'
    }
  ]

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setIsDialogOpen(true)
  }

  const categories = [...new Set(galleryImages.map(img => img.category))]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entdecken Sie Ihr Zuhause auf Zeit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Moderne Ausstattung trifft auf traditionellen Charme - erleben Sie jeden Winkel 
            des Appartements 'Oachkatzl' mit spektakulärem Bergpanorama.
          </p>
        </div>

        {/* Featured Image + Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          {/* Main Featured Image */}
          <div className="lg:col-span-2 lg:row-span-2">
            <Card className="overflow-hidden h-full cursor-pointer group" 
                  onClick={() => handleImageClick(galleryImages[0])}>
              <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                <img 
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <Badge className="absolute top-4 left-4 bg-blue-600">
                  {galleryImages[0].category}
                </Badge>
                <div className="absolute bottom-4 right-4 opacity-70 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="bg-white/90 h-11 px-4 py-2">
                    <Maximize className="w-4 h-4 mr-2" />
                    Vergrößern
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Grid Images */}
          {galleryImages.slice(1, 5).map((image, index) => (
            <Card key={index} className="overflow-hidden cursor-pointer group" 
                  onClick={() => handleImageClick(image)}>
              <div className="relative h-48 lg:h-60">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <Badge className="absolute top-2 left-2 text-xs bg-blue-600">
                  {image.category}
                </Badge>
                <div className="absolute bottom-2 right-2 opacity-70 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="bg-white/90 h-11 w-11 p-2">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Category Carousel */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Alle Bereiche</h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.slice(5).map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden cursor-pointer group" 
                        onClick={() => handleImageClick(image)}>
                    <div className="relative h-64">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      <Badge className="absolute top-2 left-2 bg-blue-600">
                        {image.category}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <p className="font-medium text-gray-900">{image.alt}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* View All Images Button */}
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => handleImageClick(galleryImages[0])}
            className="group"
          >
            <ImageIcon className="w-5 h-5 mr-2" />
            Alle {galleryImages.length} Bilder ansehen
            <Eye className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Image Dialog/Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
          <div className="relative">
            {selectedImage && (
              <>
                <img 
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge className="mb-2">{selectedImage.category}</Badge>
                      <h4 className="text-xl font-semibold">{selectedImage.alt}</h4>
                    </div>
                    <div className="text-sm text-gray-500">
                      {galleryImages.findIndex(img => img === selectedImage) + 1} von {galleryImages.length}
                    </div>
                  </div>
                  
                  {/* Navigation to next/previous images */}
                  <div className="flex gap-2 mt-4">
                    {galleryImages.map((img, index) => (
                      <button
                        key={index}
                        className={`relative w-16 h-12 rounded overflow-hidden transition-opacity ${
                          img === selectedImage ? 'ring-2 ring-blue-600' : 'opacity-60 hover:opacity-100'
                        }`}
                        onClick={() => setSelectedImage(img)}
                      >
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default ImageGallery