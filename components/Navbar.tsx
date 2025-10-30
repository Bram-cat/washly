'use client';

// Navbar with shadcn NavigationMenu component - Updated 2025
import * as React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Window Cleaning',
    href: '/services/window-cleaning',
    description: 'Crystal clear windows that shine bright, inside and out.',
  },
  {
    title: 'Gutter Cleaning',
    href: '/services/gutter-cleaning',
    description: 'Keep your gutters flowing freely and prevent water damage.',
  },
  {
    title: 'Pressure Washing',
    href: '/services/pressure-washing',
    description: 'Remove dirt, grime, and stains from any surface.',
  },
  {
    title: 'Soft Washing',
    href: '/services/soft-washing',
    description: 'Gentle yet effective cleaning for delicate surfaces.',
  },
  {
    title: 'Roof Cleaning',
    href: '/services/roof-cleaning',
    description: 'Extend your roof life with professional cleaning.',
  },
];

const solutions = [
  {
    title: 'Residential Services',
    href: '/residential',
    description: 'Professional washing services for homeowners and property managers.',
  },
  {
    title: 'Commercial Services',
    href: '/commercial',
    description: 'Comprehensive cleaning solutions for businesses and commercial properties.',
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]',
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-between">
            <div className="text-base font-semibold leading-none bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
              {title}
            </div>
            <ChevronRight className="h-4 w-4 text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-600 group-hover:text-slate-700 transition-colors duration-300 mt-2">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'glass-effect shadow-xl shadow-blue-500/5 border-b border-blue-100/20'
          : 'bg-white/90 backdrop-blur-lg'
      )}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-blue-600 group-hover:to-blue-700 transition-all duration-300 tracking-tight">
              WASHLY
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium transition-all duration-300 rounded-full px-5 py-2.5'
                    )}
                  >
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 data-[state=open]:bg-blue-50/50 data-[state=open]:text-blue-600 font-medium transition-all duration-300 rounded-full px-5 py-2.5">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-blue-100/50 shadow-2xl shadow-blue-500/10">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 data-[state=open]:bg-blue-50/50 data-[state=open]:text-blue-600 font-medium transition-all duration-300 rounded-full px-5 py-2.5">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-6 bg-white/95 backdrop-blur-xl rounded-2xl border border-blue-100/50 shadow-2xl shadow-blue-500/10">
                      {solutions.map((solution) => (
                        <ListItem
                          key={solution.title}
                          title={solution.title}
                          href={solution.href}
                        >
                          {solution.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium transition-all duration-300 rounded-full px-5 py-2.5'
                    )}
                  >
                    <Link href="/about">About Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium transition-all duration-300 rounded-full px-5 py-2.5'
                    )}
                  >
                    <Link href="/testimonials">Testimonials</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium transition-all duration-300 rounded-full px-5 py-2.5'
                    )}
                  >
                    <Link href="/faq">FAQ</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium transition-all duration-300 rounded-full px-5 py-2.5'
                    )}
                  >
                    <Link href="/blog">Blog</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              asChild
              size="lg"
              className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 rounded-full font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl bg-blue-50/50 hover:bg-blue-100/50 text-blue-600 transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-blue-100/20 shadow-2xl shadow-blue-500/10 animate-in slide-in-from-top-5 duration-300">
          <div className="container mx-auto px-6 py-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <Link
              href="/"
              className="block py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="py-2">
              <div className="text-blue-600 text-xs font-bold uppercase mb-3 px-4 tracking-wider">
                Services
              </div>
              <div className="space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block py-3 px-4 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-300 border-l-2 border-transparent hover:border-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="font-medium mb-1">{service.title}</div>
                    <div className="text-xs text-slate-500">{service.description}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-2">
              <div className="text-blue-600 text-xs font-bold uppercase mb-3 px-4 tracking-wider">
                Solutions
              </div>
              <div className="space-y-1">
                {solutions.map((solution) => (
                  <Link
                    key={solution.title}
                    href={solution.href}
                    className="block py-3 px-4 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-300 border-l-2 border-transparent hover:border-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="font-medium mb-1">{solution.title}</div>
                    <div className="text-xs text-slate-500">{solution.description}</div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="block py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              href="/testimonials"
              className="block py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>

            <Link
              href="/faq"
              className="block py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            <Link
              href="/blog"
              className="block py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <div className="pt-4 border-t border-blue-100/50">
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-6 rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>

            <div className="pt-4 space-y-3 border-t border-blue-100/50">
              <a
                href="tel:705-822-8605"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-300 group"
              >
                <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Pathik</div>
                  <div className="font-medium">705-822-8605</div>
                </div>
              </a>

              <a
                href="tel:705-970-4920"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-300 group"
              >
                <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Atmiya</div>
                  <div className="font-medium">705-970-4920</div>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/h6oEPLfpaS2BJ6gPA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-300 group"
              >
                <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={16} className="text-white" />
                </div>
                <div className="font-medium">View on Google Maps</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
