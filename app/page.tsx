"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Users, Shield, MessageSquare, Info, ExternalLink, Menu, X, User } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  // Función para manejar el scroll y actualizar la sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "info", "normativas", "discord"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Función para manejar el scroll suave a las secciones
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  // URLs para los botones externos
  const discordUrl = "https://discord.gg/dRYyWAtgS2" // URL oficial del Discord de BlessedYork V2
  const normativaUrl = "https://normativa-la-17-york.gitbook.io/normativa-tbx" // URL de la normativa completa
  const vortexDevUrl = "https://1-portafolio1.vercel.app/" // URL del desarrollador

  // Colores para las siluetas de jugadores
  const playerColors = ["bg-[#5de0c5]", "bg-[#4bc5ad]", "bg-[#3aab95]", "bg-[#29917d]"]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#5de0c5]/20 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="h-10 w-10 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a58471c664f0eee7d4f8a8f514297966-TJHn9jgtdVMxJV10ErHPAP1LUBWnYk.webp"
                alt="Blessed York Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="font-bold text-2xl">
              <span className="text-[#5de0c5]">BLESSED</span>
              <span className="text-white">YORK</span>
            </div>
          </motion.div>

          {/* Navegación de escritorio */}
          <nav className="hidden md:flex gap-6">
            {[
              { id: "inicio", label: "INICIO" },
              { id: "info", label: "INFORMACIÓN" },
              { id: "normativas", label: "NORMATIVAS" },
              { id: "discord", label: "DISCORD" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id ? "text-[#5de0c5]" : "text-white hover:text-[#5de0c5]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#5de0c5] hover:bg-transparent"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Botón de unirse */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <Button
              onClick={() => window.open(discordUrl, "_blank")}
              className="bg-[#5de0c5] hover:bg-[#4bc5ad] text-black transition-all duration-300 hover:scale-105"
            >
              UNIRSE AHORA
            </Button>
          </motion.div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-[#5de0c5]/20"
          >
            <div className="container py-4 flex flex-col gap-4">
              {[
                { id: "inicio", label: "INICIO" },
                { id: "info", label: "INFORMACIÓN" },
                { id: "normativas", label: "NORMATIVAS" },
                { id: "discord", label: "DISCORD" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium text-left py-2 transition-colors ${
                    activeSection === item.id ? "text-[#5de0c5]" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => window.open(discordUrl, "_blank")}
                className="bg-[#5de0c5] hover:bg-[#4bc5ad] text-black w-full mt-2"
              >
                UNIRSE AHORA
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 md:py-32 overflow-hidden border-b border-[#5de0c5]/20">
        <div className="absolute inset-0 bg-[url('/hero-background.png')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/60"></div>
        <div className="container relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-3 py-1 border border-[#5de0c5] rounded-full text-sm font-medium text-[#5de0c5]"
          >
            SERVIDOR DE ROL
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 w-40 h-40 relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a58471c664f0eee7d4f8a8f514297966-TJHn9jgtdVMxJV10ErHPAP1LUBWnYk.webp"
              alt="Blessed York Logo"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl"
          >
            BIENVENIDO A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5de0c5] to-[#5de0c5]/70">
              BLESSED YORK
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-zinc-400 mb-8 text-lg"
          >
            Sumérgete en una experiencia de rol única donde podrás crear tu propia historia, formar alianzas y vivir
            aventuras inolvidables en la ciudad de Blessed York.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={() => window.open(discordUrl, "_blank")}
              className="bg-[#5de0c5] hover:bg-[#4bc5ad] text-black text-lg transition-all duration-300 hover:scale-105"
            >
              UNIRSE AHORA <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center gap-4 text-zinc-500"
          >
            <div className="flex -space-x-2">
              {playerColors.map((color, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  className={`w-8 h-8 rounded-full border border-black flex items-center justify-center ${color}`}
                >
                  <User className="h-5 w-5 text-black" />
                </motion.div>
              ))}
            </div>
            <p className="text-sm">+500 jugadores activos</p>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-20 border-b border-[#5de0c5]/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              INFORMACIÓN DEL <span className="text-[#5de0c5]">SERVIDOR</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Todo lo que necesitas saber sobre Blessed York y cómo comenzar tu aventura.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden border border-[#5de0c5]/20"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-soLruR5Zy6PddSU98G0mcGkUw8wNRB.png"
                alt="Mundo Abierto de Blessed York"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="inline-block px-3 py-1 bg-[#5de0c5] rounded-full text-sm font-medium text-black mb-3">
                  EXPERIENCIA INMERSIVA
                </div>
                <h3 className="text-2xl font-bold mb-2">MUNDO ABIERTO</h3>
                <p className="text-zinc-300">Explora una ciudad llena de oportunidades y desafíos</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-zinc-900 mb-2">
                  <TabsTrigger
                    value="about"
                    className="data-[state=active]:bg-[#5de0c5] data-[state=active]:text-black transition-all duration-300"
                  >
                    Sobre Nosotros
                  </TabsTrigger>
                  <TabsTrigger
                    value="features"
                    className="data-[state=active]:bg-[#5de0c5] data-[state=active]:text-black transition-all duration-300"
                  >
                    Características
                  </TabsTrigger>
                  <TabsTrigger
                    value="start"
                    className="data-[state=active]:bg-[#5de0c5] data-[state=active]:text-black transition-all duration-300"
                  >
                    Cómo Empezar
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  value="about"
                  className="p-4 border border-zinc-800 rounded-lg animate-in fade-in-50 duration-300"
                >
                  <h3 className="text-xl font-bold mb-3 text-[#5de0c5]">¿QUÉ ES BLESSED YORK?</h3>
                  <p className="text-zinc-400 mb-4">
                    Blessed York es un servidor de rol ambientado en una ciudad ficticia donde los jugadores pueden
                    crear sus propios personajes y vivir todo tipo de aventuras. Desde convertirte en un empresario
                    exitoso hasta liderar una banda criminal, las posibilidades son infinitas.
                  </p>
                  <p className="text-zinc-400">
                    Nuestro servidor cuenta con sistemas avanzados de economía, trabajos, propiedades y mucho más para
                    brindarte la experiencia de rol más completa y realista posible.
                  </p>
                </TabsContent>
                <TabsContent
                  value="features"
                  className="p-4 border border-zinc-800 rounded-lg animate-in fade-in-50 duration-300"
                >
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-[#5de0c5] mt-0.5" />
                      <div>
                        <h4 className="font-bold">Sistema de Facciones</h4>
                        <p className="text-zinc-400">Únete a facciones existentes o crea la tuya propia</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-[#5de0c5] mt-0.5" />
                      <div>
                        <h4 className="font-bold">Economía Realista</h4>
                        <p className="text-zinc-400">Sistema económico completo con trabajos, negocios e inversiones</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <MessageSquare className="h-5 w-5 text-[#5de0c5] mt-0.5" />
                      <div>
                        <h4 className="font-bold">Chat de Voz Inmersivo</h4>
                        <p className="text-zinc-400">Sistema de proximidad de voz para una experiencia más realista</p>
                      </div>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent
                  value="start"
                  className="p-4 border border-zinc-800 rounded-lg animate-in fade-in-50 duration-300"
                >
                  <ol className="space-y-3 list-decimal pl-5">
                    <li className="text-zinc-300">
                      <span className="font-bold">Únete a nuestro Discord</span>
                      <p className="text-zinc-400">Accede al servidor de Discord para conocer la comunidad</p>
                    </li>
                    <li className="text-zinc-300">
                      <span className="font-bold">Lee las normativas</span>
                      <p className="text-zinc-400">Familiarízate con las reglas del servidor</p>
                    </li>
                    <li className="text-zinc-300">
                      <span className="font-bold">Crea tu personaje</span>
                      <p className="text-zinc-400">Desarrolla la historia y personalidad de tu personaje</p>
                    </li>
                    <li className="text-zinc-300">
                      <span className="font-bold">¡Comienza tu aventura!</span>
                      <p className="text-zinc-400">Explora la ciudad y conoce a otros jugadores</p>
                    </li>
                  </ol>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Normativas Section */}
      <section id="normativas" className="py-20 border-b border-[#5de0c5]/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#5de0c5]">NORMATIVAS</span> DEL SERVIDOR
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Para garantizar una experiencia agradable para todos, es importante que conozcas y respetes las reglas del
              servidor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "REGLAS GENERALES",
                description:
                  "Normas básicas de convivencia y respeto que todos los jugadores deben seguir en todo momento.",
                rules: [
                  "Respeta a todos los jugadores y staff",
                  "No uses lenguaje ofensivo o discriminatorio",
                  "No hagas spam ni flood en los chats",
                  "No uses hacks, mods o cualquier software que dé ventajas",
                ],
              },
              {
                title: "REGLAS DE ROL",
                description:
                  "Directrices para mantener una experiencia de rol inmersiva y agradable para todos los jugadores.",
                rules: [
                  "Mantén el rol en todo momento (No Metagaming)",
                  "No hagas PowerGaming",
                  "Respeta el valor de la vida de tu personaje",
                  "No interrumpas el rol de otros jugadores",
                ],
              },
              {
                title: "SANCIONES",
                description:
                  "Consecuencias por incumplir las normativas del servidor según la gravedad de la infracción.",
                rules: [
                  "Advertencia verbal o escrita",
                  "Expulsión temporal del servidor",
                  "Baneo permanente",
                  "Eliminación del personaje",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 border border-[#5de0c5]/20 rounded-lg p-6 hover:border-[#5de0c5]/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(93,224,197,0.15)]"
              >
                <h3 className="text-xl font-bold mb-3 text-[#5de0c5]">{category.title}</h3>
                <p className="text-zinc-400 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-[#5de0c5]/20 flex items-center justify-center mt-0.5">
                        <span className="text-[#5de0c5] text-xs">{ruleIndex + 1}</span>
                      </div>
                      <span className="text-zinc-300">{rule}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => window.open(normativaUrl, "_blank")}
                    className="text-[#5de0c5] text-sm flex items-center hover:underline transition-all duration-300"
                  >
                    Ver reglas completas <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-zinc-400 mb-4">
              Estas son solo algunas de las reglas principales. Para conocer todas las normativas en detalle, visita
              nuestra documentación oficial.
            </p>
            <Button
              onClick={() => window.open(normativaUrl, "_blank")}
              className="bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 hover:scale-105"
            >
              VER NORMATIVAS COMPLETAS <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Discord Section */}
      <section id="discord" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-[#5de0c5]/20"
          >
            <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9cSrqiIcrrG3F3Tx3bqBVId2FQqxJ1.png')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col items-center">
              <div className="w-40 h-40 relative mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a58471c664f0eee7d4f8a8f514297966-TJHn9jgtdVMxJV10ErHPAP1LUBWnYk.webp"
                  alt="Blessed York Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ÚNETE A NUESTRA COMUNIDAD EN{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5de0c5] to-[#5de0c5]/70">
                    DISCORD
                  </span>
                </h2>
                <p className="text-zinc-400 mb-8 text-lg">
                  Conéctate con otros jugadores, mantente al día con las últimas noticias y actualizaciones, y recibe
                  soporte directo de nuestro equipo.
                </p>
                <div>
                  <Button
                    onClick={() => window.open(discordUrl, "_blank")}
                    className="bg-[#5de0c5] hover:bg-[#4bc5ad] text-black transition-all duration-300 hover:scale-105"
                  >
                    UNIRSE AL DISCORD <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <Info className="h-5 w-5 text-[#5de0c5] mt-0.5" />
                    <div>
                      <h4 className="font-bold">Soporte 24/7</h4>
                      <p className="text-zinc-400 text-sm">Equipo de moderadores disponible todo el día</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <Users className="h-5 w-5 text-[#5de0c5] mt-0.5" />
                    <div>
                      <h4 className="font-bold">Comunidad Activa</h4>
                      <p className="text-zinc-400 text-sm">+246 miembros en nuestro Discord</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#5de0c5]/20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4 md:mb-0"
            >
              <div className="h-10 w-10 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a58471c664f0eee7d4f8a8f514297966-TJHn9jgtdVMxJV10ErHPAP1LUBWnYk.webp"
                  alt="Blessed York Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="font-bold text-2xl">
                <span className="text-[#5de0c5]">BLESSED</span>
                <span className="text-white">YORK</span>
              </div>
            </motion.div>
            <div className="flex gap-6">
              {[
                { id: "inicio", label: "INICIO" },
                { id: "info", label: "INFORMACIÓN" },
                { id: "normativas", label: "NORMATIVAS" },
                { id: "discord", label: "DISCORD" },
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-[#5de0c5] transition-colors duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>&copy; 2025 Blessed York RP. Todos los derechos reservados.</div>
              <div className="text-xs mt-2 md:mt-0">
                Página desarrollada por{" "}
                <a
                  href={vortexDevUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5de0c5] hover:underline transition-colors duration-300"
                >
                  VortexDev
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
