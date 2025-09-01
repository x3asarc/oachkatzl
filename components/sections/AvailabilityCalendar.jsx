import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar } from '@/components/ui/calendar'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Euro, 
  Users, 
  CheckCircle,
  AlertCircle,
  Info,
  Shield,
  CreditCard
} from 'lucide-react'
import { format, addDays, isSameDay, isAfter, isBefore, startOfWeek } from 'date-fns'
import { de } from 'date-fns/locale'

const AvailabilityCalendar = ({ propertyData }) => {
  const [selectedDates, setSelectedDates] = useState({
    checkIn: null,
    checkOut: null
  })
  const [hoveredDate, setHoveredDate] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Mock availability data - in a real app this would come from an API
  const mockAvailability = {
    available: [
      new Date(2024, 8, 5),  // Sept 5
      new Date(2024, 8, 6),  // Sept 6
      new Date(2024, 8, 7),  // Sept 7
      new Date(2024, 8, 12), // Sept 12
      new Date(2024, 8, 13), // Sept 13
      new Date(2024, 8, 19), // Sept 19
      new Date(2024, 8, 20), // Sept 20
      new Date(2024, 8, 25), // Sept 25
      new Date(2024, 8, 26), // Sept 26
      new Date(2024, 8, 27), // Sept 27
    ],
    booked: [
      new Date(2024, 8, 8),  // Sept 8
      new Date(2024, 8, 9),  // Sept 9
      new Date(2024, 8, 14), // Sept 14
      new Date(2024, 8, 15), // Sept 15
      new Date(2024, 8, 21), // Sept 21
      new Date(2024, 8, 22), // Sept 22
    ],
    maintenance: [
      new Date(2024, 8, 10), // Sept 10
      new Date(2024, 8, 11), // Sept 11
    ]
  }

  const pricingInfo = {
    basePrice: 139,
    weekendSurcharge: 15,
    cleaningFee: 25,
    taxRate: 0.10
  }

  const handleDateSelect = (date) => {
    if (!selectedDates.checkIn || (selectedDates.checkIn && selectedDates.checkOut)) {
      // Start new selection
      setSelectedDates({ checkIn: date, checkOut: null })
    } else if (selectedDates.checkIn && !selectedDates.checkOut) {
      // Complete the range
      if (isAfter(date, selectedDates.checkIn)) {
        setSelectedDates(prev => ({ ...prev, checkOut: date }))
      } else {
        setSelectedDates({ checkIn: date, checkOut: null })
      }
    }
  }

  const getDateStatus = (date) => {
    if (mockAvailability.booked.some(d => isSameDay(d, date))) return 'booked'
    if (mockAvailability.maintenance.some(d => isSameDay(d, date))) return 'maintenance'
    if (mockAvailability.available.some(d => isSameDay(d, date))) return 'available'
    return 'unavailable'
  }

  const isDateInRange = (date) => {
    if (!selectedDates.checkIn || !selectedDates.checkOut) return false
    return isAfter(date, selectedDates.checkIn) && isBefore(date, selectedDates.checkOut)
  }

  const isDateSelected = (date) => {
    return (selectedDates.checkIn && isSameDay(date, selectedDates.checkIn)) ||
           (selectedDates.checkOut && isSameDay(date, selectedDates.checkOut))
  }

  const calculateStayDetails = () => {
    if (!selectedDates.checkIn || !selectedDates.checkOut) return null

    const nights = Math.ceil((selectedDates.checkOut - selectedDates.checkIn) / (1000 * 60 * 60 * 24))
    const baseTotal = nights * pricingInfo.basePrice
    const taxes = baseTotal * pricingInfo.taxRate
    const total = baseTotal + pricingInfo.cleaningFee + taxes

    return {
      nights,
      baseTotal,
      cleaningFee: pricingInfo.cleaningFee,
      taxes,
      total
    }
  }

  const stayDetails = calculateStayDetails()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Verfügbarkeit & Preise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wählen Sie Ihre Reisedaten und sehen Sie sofort die Verfügbarkeit 
            und Preise für das Appartement 'Oachkatzl'.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-6 h-6" />
                  Verfügbarkeitskalender
                </CardTitle>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded" />
                    <span>Verfügbar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded" />
                    <span>Gebucht</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded" />
                    <span>Wartung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded" />
                    <span>Nicht verfügbar</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDates.checkIn}
                  onSelect={handleDateSelect}
                  className="rounded-md border touch-manipulation"
                  month={currentMonth}
                  onMonthChange={setCurrentMonth}
                  locale={de}
                  weekStartsOn={1}
                  disabled={(date) => {
                    const status = getDateStatus(date)
                    return status === 'booked' || status === 'maintenance' || 
                           isBefore(date, new Date()) ||
                           status === 'unavailable'
                  }}
                  modifiers={{
                    available: (date) => getDateStatus(date) === 'available',
                    booked: (date) => getDateStatus(date) === 'booked',
                    maintenance: (date) => getDateStatus(date) === 'maintenance',
                    selected: isDateSelected,
                    inRange: isDateInRange
                  }}
                  modifiersStyles={{
                    available: { 
                      backgroundColor: '#10B981', 
                      color: 'white',
                      minHeight: '44px',
                      minWidth: '44px'
                    },
                    booked: { 
                      backgroundColor: '#EF4444', 
                      color: 'white',
                      minHeight: '44px',
                      minWidth: '44px'
                    },
                    maintenance: { 
                      backgroundColor: '#F59E0B', 
                      color: 'white',
                      minHeight: '44px',
                      minWidth: '44px'
                    },
                    selected: { 
                      backgroundColor: '#3B82F6', 
                      color: 'white', 
                      fontWeight: 'bold',
                      minHeight: '44px',
                      minWidth: '44px'
                    },
                    inRange: { 
                      backgroundColor: '#DBEAFE', 
                      color: '#1E40AF',
                      minHeight: '44px',
                      minWidth: '44px'
                    }
                  }}
                />

                {selectedDates.checkIn && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Gewählte Daten:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Check-in:</span>
                        <p className="font-medium">{format(selectedDates.checkIn, 'dd. MMMM yyyy', { locale: de })}</p>
                        <p className="text-xs text-gray-500">ab {propertyData.policies.check_in.from} Uhr</p>
                      </div>
                      {selectedDates.checkOut && (
                        <div>
                          <span className="text-gray-600">Check-out:</span>
                          <p className="font-medium">{format(selectedDates.checkOut, 'dd. MMMM yyyy', { locale: de })}</p>
                          <p className="text-xs text-gray-500">bis {propertyData.policies.check_out.until} Uhr</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Euro className="w-6 h-6" />
                  Preisinformation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    €{pricingInfo.basePrice}
                  </div>
                  <div className="text-sm text-gray-600">pro Nacht</div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Grundpreis:</span>
                    <span>€{pricingInfo.basePrice}/Nacht</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reinigungsgebühr:</span>
                    <span>€{pricingInfo.cleaningFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kurtaxe:</span>
                    <span>{(pricingInfo.taxRate * 100).toFixed(0)}%</span>
                  </div>
                </div>

                {stayDetails && (
                  <>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-3">Buchungsübersicht</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>{stayDetails.nights} Nächte × €{pricingInfo.basePrice}</span>
                          <span>€{stayDetails.baseTotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Reinigungsgebühr</span>
                          <span>€{stayDetails.cleaningFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Steuern & Gebühren</span>
                          <span>€{stayDetails.taxes.toFixed(2)}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                          <span>Gesamtpreis</span>
                          <span>€{stayDetails.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 min-h-[48px] touch-manipulation"
                        onClick={() => window.open('https://www.booking.com/hotel/at/appartement-39-oachkatzl-39.de.html', '_blank')}
                      >
                        <Shield className="w-4 h-4 mr-2" />
                        Jetzt buchen
                      </Button>
                      
                      <div className="flex items-center justify-center gap-3 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <CreditCard className="w-3 h-3 text-blue-600" />
                          <span>PayPal akzeptiert</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3 text-green-600" />
                          <span>SEPA möglich</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Kostenlose Stornierung bis 24h vor Anreise</p>
                  <p>• Keine Kreditkarte erforderlich</p>
                  <p>• Sofortige Buchungsbestätigung</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-6 h-6" />
                  Buchungshinweise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Mindestaufenthalt</p>
                    <p className="text-gray-600">2 Nächte (3 Nächte an Feiertagen)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Check-in/Check-out</p>
                    <p className="text-gray-600">
                      {propertyData.policies.check_in.from}-{propertyData.policies.check_in.until} / 
                      {propertyData.policies.check_out.from}-{propertyData.policies.check_out.until}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Maximale Gästezahl</p>
                    <p className="text-gray-600">{propertyData.accommodation_details.max_guests} Personen</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Wichtiger Hinweis</p>
                    <p className="text-gray-600">
                      {propertyData.special_features.access_note.substring(0, 50)}...
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Offers */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <Badge className="bg-green-600 mb-3">🎉 Sonderangebot</Badge>
                  <h4 className="font-bold mb-2">Frühbucher-Rabatt</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Buchen Sie 60 Tage im Voraus und sparen Sie 10% auf den Grundpreis.
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-green-600 hover:bg-green-700 text-white min-h-[44px] px-4 text-sm">
                        Details erfahren
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Sonderangebote & Rabatte</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-green-700">Frühbucher-Rabatt</h4>
                          <p className="text-sm text-gray-600">10% Rabatt bei Buchung 60 Tage im Voraus</p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-blue-700">Langzeitaufenthalt</h4>
                          <p className="text-sm text-gray-600">15% Rabatt ab 7 Nächten</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                          <h4 className="font-semibold text-purple-700">Wiederholer-Bonus</h4>
                          <p className="text-sm text-gray-600">5% Rabatt für wiederkehrende Gäste</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AvailabilityCalendar