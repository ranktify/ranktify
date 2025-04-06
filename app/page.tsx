import Image from "next/image"
import Link from "next/link"
import { Download, Music, Share2, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import AppPreview from "@/components/app-preview"
import TestimonialCard from "@/components/testimonial-card"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                <Music className="absolute inset-0 m-auto h-5 w-5 text-white" />
              </div>
              <span className="inline-block font-bold">Ranktify</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="#benefits" className="text-sm font-medium transition-colors hover:text-primary">
                Benefits
              </Link>
              <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
                Testimonials
              </Link>
              <Button size="sm" className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                Download
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Rank Your Music.
                    <br />
                    <span className="text-purple-600">Share Your Taste.</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create personalized rankings of your favorite songs, albums, and artists. Share with friends and
                    discover new music based on your preferences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download for iOS
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download for Android
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[600px] w-[300px] overflow-hidden rounded-xl border-8 border-foreground/10 bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    width={300}
                    height={600}
                    alt="Ranktify app screenshot"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-xs font-medium">Your Top Albums</p>
                      <h3 className="text-lg font-bold">April 2025</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to rank your music
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Ranktify gives you powerful tools to organize, share, and discover music in a whole new way.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <FeatureCard
                icon={<Star className="h-10 w-10 text-purple-600" />}
                title="Create Rankings"
                description="Easily rank your favorite songs, albums, and artists with our intuitive drag-and-drop interface."
              />
              <FeatureCard
                icon={<Share2 className="h-10 w-10 text-purple-600" />}
                title="Share With Friends"
                description="Share your rankings on social media or directly with friends to spark conversations."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-purple-600" />}
                title="Discover New Music"
                description="Get personalized recommendations based on your rankings and preferences."
              />
            </div>
          </div>
        </section>

        <section id="app-preview" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">See Ranktify in action</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our beautiful, intuitive interface makes ranking your music a joy.
                </p>
              </div>
            </div>
            <div className="mx-auto py-12">
              <AppPreview />
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center order-last lg:order-first">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                      <div className="rounded-lg bg-white p-4 dark:bg-black">
                        <h3 className="font-bold text-purple-600">Top Albums</h3>
                        <ol className="mt-2 text-sm">
                          <li className="py-1">1. Album Name</li>
                          <li className="py-1">2. Album Name</li>
                          <li className="py-1">3. Album Name</li>
                        </ol>
                      </div>
                    </div>
                    <div className="rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                      <div className="rounded-lg bg-white p-4 dark:bg-black">
                        <h3 className="font-bold text-purple-600">Top Artists</h3>
                        <ol className="mt-2 text-sm">
                          <li className="py-1">1. Artist Name</li>
                          <li className="py-1">2. Artist Name</li>
                          <li className="py-1">3. Artist Name</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 mt-8">
                    <div className="rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                      <div className="rounded-lg bg-white p-4 dark:bg-black">
                        <h3 className="font-bold text-purple-600">Top Songs</h3>
                        <ol className="mt-2 text-sm">
                          <li className="py-1">1. Song Name</li>
                          <li className="py-1">2. Song Name</li>
                          <li className="py-1">3. Song Name</li>
                        </ol>
                      </div>
                    </div>
                    <div className="rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                      <div className="rounded-lg bg-white p-4 dark:bg-black">
                        <h3 className="font-bold text-purple-600">Genres</h3>
                        <div className="mt-2 flex flex-wrap gap-1 text-xs">
                          <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-600">Rock</span>
                          <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-600">Pop</span>
                          <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-600">Hip-Hop</span>
                          <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-600">Jazz</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                    Benefits
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Why music lovers choose Ranktify
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Ranktify helps you organize your music preferences, discover new tracks, and connect with a
                    community of music enthusiasts.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-purple-100 p-1">
                      <Check className="h-4 w-4 text-purple-600" />
                    </div>
                    <span>Organize your music library with personalized rankings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-purple-100 p-1">
                      <Check className="h-4 w-4 text-purple-600" />
                    </div>
                    <span>Discover new music based on your taste and preferences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-purple-100 p-1">
                      <Check className="h-4 w-4 text-purple-600" />
                    </div>
                    <span>Connect with friends and share your musical journey</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-purple-100 p-1">
                      <Check className="h-4 w-4 text-purple-600" />
                    </div>
                    <span>Track your listening habits and see how they evolve over time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by music enthusiasts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  See what our users are saying about their experience with Ranktify.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <TestimonialCard
                quote="Ranktify has completely changed how I organize my music. I love being able to rank my favorite albums and share them with friends."
                author="Alex Johnson"
                title="Music Blogger"
              />
              <TestimonialCard
                quote="The recommendation engine is spot on! I've discovered so many new artists that match my taste perfectly."
                author="Sarah Williams"
                title="Podcast Host"
              />
              <TestimonialCard
                quote="As a DJ, I use Ranktify to keep track of my top tracks and share playlists with my audience. It's become an essential tool."
                author="Marcus Chen"
                title="Professional DJ"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to rank your music?</h2>
                <p className="max-w-[600px] md:text-xl">
                  Download Ranktify today and start organizing your music collection like never before.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  <Download className="mr-2 h-4 w-4" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Download className="mr-2 h-4 w-4" />
                  Download for Android
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function Check(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
