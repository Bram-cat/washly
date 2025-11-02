"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X, Sparkles, Droplets, Wind, Waves, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavigationProps {
  onGetQuote: () => void
}

export function Navigation({ onGetQuote }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const servicesDropdown = [
    { label: "Window Cleaning", href: "/services#window-cleaning", icon: Droplets },
    { label: "Gutter Cleaning", href: "/services#gutter-cleaning", icon: Wind },
    { label: "Pressure Washing", href: "/services#pressure-washing", icon: Waves },
    { label: "Roof Cleaning", href: "/services#roof-cleaning", icon: Home },
  ]

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-secondary" />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-primary">Washly</div>
                <div className="text-xs text-gray-600 -mt-1">Washing Services</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "font-medium transition-colors",
                            pathname === item.href
                              ? "text-primary bg-accent"
                              : "text-gray-700 hover:text-primary"
                          )}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}

                  {/* Services Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(
                      "font-medium transition-colors",
                      pathname.startsWith("/services")
                        ? "text-primary bg-accent"
                        : "text-gray-700 hover:text-primary"
                    )}>
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {servicesDropdown.map((service) => {
                          const Icon = service.icon
                          return (
                            <li key={service.href}>
                              <Link href={service.href} legacyBehavior passHref>
                                <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group">
                                  <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="text-sm font-medium leading-none">{service.label}</div>
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                                    Professional {service.label.toLowerCase()} services
                                  </p>
                                </NavigationMenuLink>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button
                onClick={onGetQuote}
                className="bg-primary hover:bg-primary/90 ml-2"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-white md:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-semibold hover:text-primary transition-colors ${
                    pathname === item.href ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <Button
                onClick={() => {
                  onGetQuote()
                  setIsMobileMenuOpen(false)
                }}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Get a Quote
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}
