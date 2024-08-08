"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {ComboboxDemo} from "@/components/ui/combo-box";
import Image from "next/image";
import {ReviewCard} from "@/components/component/review-card";
import CursorTracker from "@/components/animata/container/cursor-tracker";
import { motion } from "framer-motion";

const randomMovement = {
  x: [0, 20, -20, 0],
  y: [0, 20, -20, 5],
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut" as const,
  },
};

const randomMovement1 = {
  x: [-10, 15, -25, 5],
  y: [10, -15, 20, -5],
  transition: {
    duration: 8,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut" as const,
  },
};



export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex items-center justify-between px-4 lg:px-6 h-16">
        <Link href="#" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden lg:flex gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Page d&apos;accueil
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            A propos de nous
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Voyageurs
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Colis
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Comment ca marche ?
          </Link>
        </nav>
        <div className="hidden lg:flex gap-2">
          <Button variant="outline">Créer un compte</Button>
          <Button>Se connecter</Button>
        </div>
      </header>
      <main className="flex items-center justify-center w-full">
        <section className="py-12 w-[80%] sm:py-10 md:py-16 lg:py-24 xl:py-32">
          <div className="container grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transport de colis entre <span className="text-primary">particuliers</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Un transport rapide et sécurisé de main à main.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <ComboboxDemo placeholder="Ville de depart" searchholder="Rechercher une ville" nonefoundholder="Aucun ville trouvé" />
                <ComboboxDemo placeholder="Ville d'arrivée" searchholder="Rechercher une ville" nonefoundholder="Aucun ville trouvé" />
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pb-10">
                <Button className="flex-1">J&apos;expédie</Button>
                <Button variant="outline" className="flex-1">
                  Je transporte
                </Button>
              </div>
            </div>
            <CursorTracker>
              <div className={"relative sm:w-full aspect-square"}>
                <svg className={"absolute -top-20 right-0 left-0 z-10"} transform="scale(-1, 1)" height="120%" width="120%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="hsla(136, 71%, 80%, 70%)" d="M32.8,-52.6C39.7,-40,40.7,-26.8,47.5,-13.6C54.4,-0.4,67,12.7,68.3,26.3C69.6,39.9,59.5,54,46.3,62.7C33,71.4,16.5,74.6,4.5,68.5C-7.5,62.3,-15.1,46.7,-26.7,37.5C-38.3,28.3,-54,25.5,-60.7,16.8C-67.5,8.2,-65.4,-6.2,-62.4,-21.8C-59.4,-37.3,-55.4,-54.1,-44.9,-65.5C-34.3,-77,-17.2,-83.1,-2.1,-80.2C12.9,-77.3,25.8,-65.3,32.8,-52.6Z" transform="translate(100 100)" />
                </svg>
                <Image
                    src="/hero-section-guy.png"
                    width="550"
                    height="550"
                    alt="Hero"
                    className="absolute mx-auto overflow-hidden object-cover sm:w-full aspect-square z-30"
                />
                <motion.div animate={randomMovement1} className={"hidden md:block absolute top-40 -right-20 z-20"}>
                  <ReviewCard name={"Malika"} review={"Le service client est exceptionnel."} image={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80"}/>
                </motion.div>
                  <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                      height="85"
                      width="85"
                      alt="portrait"
                      className="absolute right-0 z-50 rounded-full border-4 border-border overflow-hidden object-cover aspect-square"
                  />
                <motion.div animate={randomMovement} className={"absolute -bottom-5 md:right-58 z-50"}>
                  <ReviewCard name={"Abdelhafid"} review={"Je suis très satisfait de ce service, Mon colis est dans le bon état"} image={"https://images.unsplash.com/photo-1715454000430-4b5109c29060"}/>
                </motion.div>

                <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                    height="85"
                    width="85"
                    alt="portrait"
                    className="absolute bottom-40 left-10 z-20 rounded-full border-4 border-border overflow-hidden object-cover aspect-square"
                />
              </div>
            </CursorTracker>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
