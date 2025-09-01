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
      src: '/images/gallery/wohnbereich.jpg',
      alt: 'Gemütlicher Wohnbereich mit Kamin und Sitzecke',
      category: 'Wohnbereich',
      featured: true
    },
    {
      src: '/images/gallery/Kamin & Sitzecke.webp',
      alt: 'Kamin und gemütliche Sitzecke im Wohnzimmer',
      category: 'Wohnbereich'
    },
    {
      src: '/images/gallery/schlafzimmer-eltern-8.webp',
      alt: 'Elternschlafzimmer mit Doppelbett und Bergblick',
      category: 'Schlafzimmer'
    },
    {
      src: '/images/gallery/Kueche 1.webp',
      alt: 'Moderne, vollausgestattete Küche',
      category: 'Küche'
    },
    {
      src: '/images/gallery/Badezimmer.webp',
      alt: 'Modernes Badezimmer mit Dusche',
      category: 'Bad'
    },
    {
      src: '/images/gallery/Balkon.webp',
      alt: 'Balkon mit atemberaubendem Bergpanorama',
      category: 'Außenbereich'
    },
    {
      src: '/images/gallery/Blick vom Haus.webp',
      alt: 'Spektakulärer Blick vom Haus auf die Berge',
      category: 'Aussicht'
    },
    {
      src: '/images/gallery/ausblick-5.webp',
      alt: 'Panoramablick auf die Tiroler Berglandschaft',
      category: 'Aussicht'
    },
    {
      src: '/images/gallery/schlafzimmer-kinder-4.webp',
      alt: 'Kinderschlafzimmer mit Stockbetten',
      category: 'Schlafzimmer'
    },
    {
      src: '/images/gallery/Kueche 2.webp',
      alt: 'Küchenbereich mit Essplatz und Ausstattung',
      category: 'Küche'
    },
    {
      src: '/images/gallery/Eingang mit grillplatz.webp',
      alt: 'Eingangsbereich mit privatem Grillplatz',
      category: 'Außenbereich'
    },
    {
      src: '/images/gallery/Eingagnsbereich sitzbank.webp',
      alt: 'Eingangsbereich mit gemütlicher Sitzbank',
      category: 'Eingang'
    },
    {
      src: '/images/gallery/Badezimmer 2.webp',
      alt: 'Badezimmer mit moderner Einrichtung',
      category: 'Bad'
    },
    {
      src: '/images/gallery/Kafeemachine.webp',
      alt: 'Kaffeemaschine und Küchenausstattung',
      category: 'Küche'
    },
    {
      src: '/images/gallery/Blick auf wiese.webp',
      alt: 'Wunderschöner Blick auf grüne Wiesen',
      category: 'Aussicht'
    },
    {
      src: '/images/gallery/Sitzecke.webp',
      alt: 'Gemütliche Sitzecke zum Entspannen',
      category: 'Wohnbereich'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {/* Main Featured Image */}
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <Card className="overflow-hidden h-full cursor-pointer group touch-manipulation" 
                  onClick={() => handleImageClick(galleryImages[0])}>
              <div className="relative h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                <img 
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-blue-600 text-xs sm:text-sm">
                  {galleryImages[0].category}
                </Badge>
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="bg-white/90 min-h-[44px] px-3 py-2 text-xs sm:text-sm">
                    <Maximize className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Vergrößern</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Grid Images */}
          {galleryImages.slice(1, 7).map((image, index) => (
            <Card key={index} className="overflow-hidden cursor-pointer group touch-manipulation" 
                  onClick={() => handleImageClick(image)}>
              <div className="relative h-40 sm:h-48 lg:h-60">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <Badge className="absolute top-2 left-2 text-xs bg-blue-600">
                  {image.category}
                </Badge>
                <div className="absolute bottom-2 right-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="bg-white/90 min-h-[44px] min-w-[44px] p-2">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Category Carousel */}
        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center">Alle Bereiche</h3>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 sm:-ml-4">
              {galleryImages.slice(7).map((image, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden cursor-pointer group touch-manipulation" 
                        onClick={() => handleImageClick(image)}>
                    <div className="relative h-48 sm:h-56 lg:h-64">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      <Badge className="absolute top-2 left-2 bg-blue-600 text-xs">
                        {image.category}
                      </Badge>
                    </div>
                    <CardContent className="p-3 sm:p-4">
                      <p className="font-medium text-gray-900 text-sm sm:text-base line-clamp-2">{image.alt}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-12" />
            <CarouselNext className="right-0 sm:-right-12" />
          </Carousel>
        </div>

        {/* View All Images Button */}
        <div className="text-center mt-6 sm:mt-8">
          <Button 
            className="group min-h-[48px] px-6 py-3 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => handleImageClick(galleryImages[0])}
          >
            <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base">Alle {galleryImages.length} Bilder ansehen</span>
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Image Dialog/Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[95vh] overflow-hidden p-0 m-2">
          <div className="relative">
            {selectedImage && (
              <>
                <img 
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[60vh] sm:max-h-[70vh] object-contain bg-gray-50"
                />
                <div className="p-3 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <Badge className="mb-2 text-xs">{selectedImage.category}</Badge>
                      <h4 className="text-base sm:text-xl font-semibold truncate">{selectedImage.alt}</h4>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 ml-2 flex-shrink-0">
                      {galleryImages.findIndex(img => img === selectedImage) + 1} / {galleryImages.length}
                    </div>
                  </div>
                  
                  {/* Navigation to next/previous images */}
                  <div className="flex gap-1 sm:gap-2 mt-4 overflow-x-auto pb-2">
                    {galleryImages.map((img, index) => (
                      <button
                        key={index}
                        className={`relative w-12 h-9 sm:w-16 sm:h-12 rounded overflow-hidden transition-opacity flex-shrink-0 touch-manipulation ${
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