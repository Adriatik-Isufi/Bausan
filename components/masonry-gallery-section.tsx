"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MasonryGallerySectionProps {
  language: "de" | "en"
}

export function MasonryGallerySection({ language }: MasonryGallerySectionProps) {
  const content = {
    de: {
      title: "Galerie Beschreibung",
      description:
        "Hier finden Sie eine umfassende Sammlung unserer Betonsanierungs- und Restaurierungsprojekte. Jedes Bild zeigt die Qualität und Präzision unserer Arbeit bei verschiedenen Arten von Betonreparaturen, Gebäudeschutz und Fassadensanierungen.",
      viewMore: "Mehr anzeigen",
    },
    en: {
      title: "Gallery Description",
      description:
        "Here you will find a comprehensive collection of our concrete repair and restoration projects. Each image showcases the quality and precision of our work across various types of concrete repairs, building protection, and facade renovations.",
      viewMore: "View More",
    },
  }

  const sectionRef = useRef<HTMLElement>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Array of images with different aspect ratios for masonry effect
  const images = [
    { src: "/images/construction-work.jpg", height: "h-64" },
    { src: "/images/damaged-concrete.jpg", height: "h-48" },
    { src: "/images/finished-garden.jpg", height: "h-48" },
    { src: "/images/ceiling-repair.jpg", height: "h-80" },
    { src: "/images/balcony-finish.jpg", height: "h-56" },
    { src: "/images/modern-wall.jpg", height: "h-52" },
    { src: "/images/pool-area.jpg", height: "h-52" },
    { src: "/images/hero-wall.jpg", height: "h-72" },
    { src: "/images/construction-work.jpg", height: "h-48" },
    { src: "/images/damaged-concrete.jpg", height: "h-60" },
    { src: "/images/finished-garden.jpg", height: "h-60" },
    { src: "/images/ceiling-repair.jpg", height: "h-56" },
    { src: "/images/balcony-finish.jpg", height: "h-64" },
    { src: "/images/modern-wall.jpg", height: "h-60" },
    { src: "/images/pool-area.jpg", height: "h-60" },
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen || selectedImageIndex === null) return

      if (e.key === "ArrowLeft") {
        e.preventDefault()
        setSelectedImageIndex((prev) => (prev === null ? 0 : prev > 0 ? prev - 1 : images.length - 1))
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        setSelectedImageIndex((prev) => (prev === null ? 0 : prev < images.length - 1 ? prev + 1 : 0))
      } else if (e.key === "Escape") {
        setIsModalOpen(false)
        setSelectedImageIndex(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, selectedImageIndex, images.length])

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0)
    }
    if (isRightSwipe && selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1)
    }
  }

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImageIndex(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImageIndex === null) return

    if (direction === "prev") {
      setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1)
    } else {
      setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".masonry-item")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("fade-in-up")
              }, index * 50)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getColumnImages = () => {
    // Column 1: text (h-80 = 320px) + 3 images = 320 + 256 + 192 + 192 = 960px total
    const col1 = [
      { ...images[0], height: "h-64" }, // 256px
      { ...images[1], height: "h-48" }, // 192px
      { ...images[2], height: "h-48" }, // 192px
    ]

    const col2 = [
      { ...images[3], height: "h-80" }, // 320px
      { ...images[4], height: "h-56" }, // 224px
      { ...images[5], height: "h-52" }, // 208px
      { ...images[6], height: "h-52" }, // 208px
    ]

    const col3 = [
      { ...images[7], height: "h-72" }, // 288px
      { ...images[8], height: "h-48" }, // 192px
      { ...images[9], height: "h-60" }, // 240px
      { ...images[10], height: "h-60" }, // 240px
    ]

    const col4 = [
      { ...images[11], height: "h-56" }, // 224px
      { ...images[12], height: "h-64" }, // 256px
      { ...images[13], height: "h-60" }, // 240px
      { ...images[14], height: "h-60" }, // 240px
    ]

    return { col1, col2, col3, col4 }
  }

  return (
    <>
      <section ref={sectionRef} className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="hidden lg:grid lg:grid-cols-4 gap-4">
            {/* First Column - starts with text description */}
            <div className="flex flex-col gap-4">
              <div className="masonry-item opacity-0 bg-muted/30 p-8 rounded-lg h-80 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-red-600 mb-4">{content[language].title}</h2>
                <p className="text-muted-foreground leading-relaxed text-sm text-justify">
                  {content[language].description}
                </p>
              </div>
              {getColumnImages().col1.map((image, index) => (
                <div
                  key={`col1-${index}`}
                  className={`masonry-item opacity-0 group cursor-pointer overflow-hidden rounded-lg shadow-lg ${image.height}`}
                  onClick={() => openModal(index)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`Gallery image col1-${index}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-4">
              {getColumnImages().col2.map((image, index) => (
                <div
                  key={`col2-${index}`}
                  className={`masonry-item opacity-0 group cursor-pointer overflow-hidden rounded-lg shadow-lg ${image.height}`}
                  onClick={() => openModal(index + 3)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`Gallery image col2-${index}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Third Column */}
            <div className="flex flex-col gap-4">
              {getColumnImages().col3.map((image, index) => (
                <div
                  key={`col3-${index}`}
                  className={`masonry-item opacity-0 group cursor-pointer overflow-hidden rounded-lg shadow-lg ${image.height}`}
                  onClick={() => openModal(index + 7)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`Gallery image col3-${index}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Fourth Column */}
            <div className="flex flex-col gap-4">
              {getColumnImages().col4.map((image, index) => (
                <div
                  key={`col4-${index}`}
                  className={`masonry-item opacity-0 group cursor-pointer overflow-hidden rounded-lg shadow-lg ${image.height}`}
                  onClick={() => openModal(index + 11)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`Gallery image col4-${index}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden">
            <div className="bg-muted/30 p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-bold text-red-600 mb-4">{content[language].title}</h2>
              <p className="text-muted-foreground leading-relaxed text-justify">{content[language].description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Left column - total height: 480px + 192px = 672px */}
              <div className="flex flex-col gap-4">
                <div
                  className="masonry-item opacity-0 group cursor-pointer overflow-hidden rounded-lg shadow-lg h-60"
                  onClick={() => openModal(0)}
                >
                  <Image
                    src={images[0].src || "/placeholder.svg"}
                    alt="Gallery image 0"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div
                  className="masonry-item opacity-0 group cursor-pointer overflow-hidden rounded-lg shadow-lg h-48"
                  onClick={() => openModal(2)}
                >
                  <Image
                    src={images[2].src || "/placeholder.svg"}
                    alt="Gallery image 2"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div
                  className="masonry-item opacity-0 group cursor-pointer overflow-hidden rounded-lg shadow-lg h-56"
                  onClick={() => openModal(4)}
                >
                  <Image
                    src={images[4].src || "/placeholder.svg"}
                    alt="Gallery image 4"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div
                  className="masonry-item opacity-0 group cursor-pointer overflow-hidden rounded-lg shadow-lg h-44"
                  onClick={() => openModal(6)}
                >
                  <Image
                    src={images[6].src || "/placeholder.svg"}
                    alt="Gallery image 6"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Right column - total height: 320px + 240px + 160px + 112px = 832px */}
              <div className="flex flex-col gap-4">
                <div
                  className="masonry-item opacity-0 group cursor-pointer overflow-hidden rounded-lg shadow-lg h-80"
                  onClick={() => openModal(1)}
                >
                  <Image
                    src={images[1].src || "/placeholder.svg"}
                    alt="Gallery image 1"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div
                  className="masonry-item opacity-0 group cursor-pointer overflow-hidden rounded-lg shadow-lg h-60"
                  onClick={() => openModal(3)}
                >
                  <Image
                    src={images[3].src || "/placeholder.svg"}
                    alt="Gallery image 3"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div
                  className="masonry-item opacity-0 group cursor-pointer overflow-hidden rounded-lg shadow-lg h-40"
                  onClick={() => openModal(5)}
                >
                  <Image
                    src={images[5].src || "/placeholder.svg"}
                    alt="Gallery image 5"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div
                  className="masonry-item opacity-0 group cursor-pointer overflow-hidden rounded-lg shadow-lg h-28"
                  onClick={() => openModal(7)}
                >
                  <Image
                    src={images[7].src || "/placeholder.svg"}
                    alt="Gallery image 7"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors bg-transparent"
              onClick={() => openModal(0)}
            >
              {content[language].viewMore}
            </Button>
          </div>
        </div>
      </section>

      {isModalOpen && selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Previous button */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next button */}
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={images[selectedImageIndex]?.src || "/placeholder.svg"}
                alt={`Gallery image ${selectedImageIndex}`}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                priority
              />
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
