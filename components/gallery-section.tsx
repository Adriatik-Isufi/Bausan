"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useAssetPath } from "@/hooks/use-asset-path"

const projects = [
  {
    image: "/images/construction-work.jpg",
    title: "Structural Repair",
    description: "Complete ceiling restoration with reinforcement",
  },
  {
    image: "/images/balcony-finish.jpg",
    title: "Balcony Restoration",
    description: "Modern concrete balcony with protective coating",
  },
  {
    image: "/images/finished-garden.jpg",
    title: "Retaining Walls",
    description: "Decorative concrete walls with landscaping",
  },
  {
    image: "/images/pool-area.jpg",
    title: "Pool Restoration",
    description: "Pool coping repair and protective treatment",
  },
]

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { getAssetPath } = useAssetPath()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".gallery-item")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("fade-in-up")
              }, index * 150)
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

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful concrete repair and restoration projects across Switzerland.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="gallery-item opacity-0 group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={getAssetPath(project.image || "/placeholder.svg")}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
