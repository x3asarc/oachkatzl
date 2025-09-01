import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Badge } from '@/components/ui/badge'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '@/lib/validations/contact-form'
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form'
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Users, 
  Calendar as CalendarIcon,
  Clock,
  CheckCircle,
  Send,
  Globe,
  MapPin
} from 'lucide-react'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

const ContactForm = ({ propertyData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      guests: 2,
      message: ''
    }
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Telefon',
      value: '+43 123 456 789',
      description: 'Mo-Fr 9:00-18:00 Uhr',
      action: 'tel:+43123456789',
      actionText: 'Anrufen'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'E-Mail',
      value: 'info@oachkatzl.at',
      description: 'Antwort binnen 24h',
      action: 'mailto:info@oachkatzl.at',
      actionText: 'E-Mail senden'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Booking.com',
      value: 'Direkt buchen',
      description: 'Sofortige Bestätigung',
      action: 'https://www.booking.com/hotel/at/appartement-39-oachkatzl-39.de.html',
      actionText: 'Zu Booking.com'
    }
  ]

  if (isSubmitted) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="text-center border-green-200 bg-green-50">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vielen Dank für Ihre Anfrage!
              </h3>
              <p className="text-gray-600 mb-6">
                Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
                Sie erhalten in Kürze eine Bestätigungs-E-Mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300 min-h-[48px]"
                >
                  Weitere Anfrage senden
                </Button>
                <Button 
                  onClick={() => window.open('https://www.booking.com/hotel/at/appartement-39-oachkatzl-39.de.html', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Jetzt direkt buchen
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kontakt & Anfragen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Haben Sie Fragen zum Appartement 'Oachkatzl' oder möchten Sie eine 
            unverbindliche Anfrage senden? Wir helfen Ihnen gerne weiter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Kontaktmöglichkeiten</h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{method.title}</h4>
                      <p className="font-medium text-gray-800 mb-1">{method.value}</p>
                      <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                      <Button 
                        size="sm" 
                        className={`min-h-[44px] px-3 text-white ${
                          method.title === 'Booking.com' 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : method.title === 'Telefon'
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-purple-600 hover:bg-purple-700'
                        }`}
                        onClick={() => window.open(method.action, method.title === 'Booking.com' ? '_blank' : '_self')}
                      >
                        {method.actionText}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Property Info Card */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Schnelle Fakten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-600">Check-in:</span>
                    <p className="font-medium">{propertyData.policies.check_in.from}-{propertyData.policies.check_in.until}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Check-out:</span>
                    <p className="font-medium">{propertyData.policies.check_out.from}-{propertyData.policies.check_out.until}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Max. Gäste:</span>
                    <p className="font-medium">{propertyData.accommodation_details.max_guests}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Sprachen:</span>
                    <p className="font-medium">{propertyData.languages_spoken.join(', ')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  Unverbindliche Anfrage senden
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Ihr vollständiger Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-Mail Adresse *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="ihre@email.de" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefonnummer (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+49 123 456 789" {...field} />
                            </FormControl>
                            <FormDescription>
                              Für Rückfragen und schnelle Kommunikation
                            </FormDescription>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Anzahl Gäste *</FormLabel>
                            <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value?.toString()}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Gäste wählen" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">1 Gast</SelectItem>
                                <SelectItem value="2">2 Gäste</SelectItem>
                                <SelectItem value="3">3 Gäste</SelectItem>
                                <SelectItem value="4">4 Gäste</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Date Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="checkIn"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Gewünschtes Check-in Datum</FormLabel>
                            <div className="relative">
                              <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input 
                                type="date" 
                                className="pl-10"
                                onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : null)}
                              />
                            </div>
                            <FormDescription>
                              Check-in ab {propertyData.policies.check_in.from} Uhr
                            </FormDescription>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="checkOut"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Gewünschtes Check-out Datum</FormLabel>
                            <div className="relative">
                              <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input 
                                type="date" 
                                className="pl-10"
                                onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : null)}
                              />
                            </div>
                            <FormDescription>
                              Check-out bis {propertyData.policies.check_out.until} Uhr
                            </FormDescription>
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ihre Nachricht *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Teilen Sie uns Ihre Fragen oder besonderen Wünsche mit..."
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Mindestens 10 Zeichen. Erwähnen Sie gerne besondere Wünsche oder Fragen.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Additional Info */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Hilfreiche Informationen:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                        <div>• Haustiere: {propertyData.policies.pets.allowed ? `Erlaubt (${propertyData.policies.pets.fee})` : 'Nicht erlaubt'}</div>
                        <div>• Parken: Kostenlos vor Ort</div>
                        <div>• WLAN: {propertyData.amenities.internet.wifi_rating}/10</div>
                        <div>• Rauchen: {propertyData.policies.smoking ? 'Erlaubt' : 'Nicht gestattet'}</div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Anfrage senden
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zu Kontaktzwecken zu.
                      Wir antworten in der Regel innerhalb von 24 Stunden.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm