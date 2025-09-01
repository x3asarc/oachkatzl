import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, Home, MapPin, Calendar, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Gallery', href: '/galerie', icon: null },
    { 
      name: 'Local Guide', 
      href: '/local-guide',
      icon: MapPin,
      submenu: [
        { name: 'All Villages', href: '/local-guide' },
        { name: 'Volders', href: '/local-guide/volders' },
        { name: 'Wattens', href: '/local-guide/wattens' },
        { name: 'Hall in Tirol', href: '/local-guide/hall-in-tirol' },
        { name: 'Hiking Trails', href: '/local-guide/activities/hiking-trails' },
        { name: 'Swarovski Worlds', href: '/local-guide/attractions/swarovski-kristallwelten' },
      ]
    },
    { name: 'Availability', href: '/#availability', icon: Calendar },
    { name: 'Contact', href: '/#contact', icon: Phone },
  ]

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-md" 
          : "bg-white/80 backdrop-blur-md"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl md:text-2xl font-bold text-green-800">
              Oachkatzl
            </div>
            <span className="hidden md:inline text-sm text-gray-600">
              Vacation Rentals
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors py-2"
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white min-h-[44px] px-6"
            >
              <Link href="/#booking">
                Book Your Stay
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="min-h-[48px] min-w-[48px]"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-lg text-gray-700 hover:text-green-600 transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.name}</span>
                    </Link>
                    {item.submenu && (
                      <div className="ml-7 mt-2 space-y-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block text-sm text-gray-600 hover:text-green-600 transition-colors py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white min-h-[48px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/#booking">
                      Book Your Stay
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export default StickyHeader