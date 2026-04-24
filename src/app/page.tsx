"use client"

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ImageType = {
  id: number;
  name: string;
  href: string;
  username: string;
  imageSrc: string;
  category: string;
}

const images: ImageType[] = [
  {
    id: 1,
    name: 'Forest Mist',
    href: '#',
    username: '@jankolario',
    category: 'Nature',
    imageSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Mountain Lake',
    href: '#',
    username: '@iam_j_o_s_h',
    category: 'Travel',
    imageSrc: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Mountain Peak',
    href: '#',
    username: '@kalenemsley',
    category: 'Nature',
    imageSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'Desert Dunes',
    href: '#',
    username: '@neom',
    category: 'Travel',
    imageSrc: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    name: 'Starry Night',
    href: '#',
    username: '@vincentiu',
    category: 'Nature',
    imageSrc: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    name: 'Autumn Leaves',
    href: '#',
    username: '@jt_pohl',
    category: 'Nature',
    imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 7,
    name: 'Northern Lights',
    href: '#',
    username: '@iam_j_o_s_h',
    category: 'Nature',
    imageSrc: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 8,
    name: 'Tokyo Night',
    href: '#',
    username: '@itsthat_guy',
    category: 'City',
    imageSrc: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 9,
    name: 'Tropical Beach',
    href: '#',
    username: '@sean_oulashin',
    category: 'Travel',
    imageSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 10,
    name: 'Snowy Forest',
    href: '#',
    username: '@denis_muthig',
    category: 'Nature',
    imageSrc: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 11,
    name: 'Antelope Canyon',
    href: '#',
    username: '@ashim_d_silva',
    category: 'Travel',
    imageSrc: 'https://images.unsplash.com/photo-1505533542167-8c89838bb19e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 12,
    name: 'Lavender Fields',
    href: '#',
    username: '@jt_pohl',
    category: 'Nature',
    imageSrc: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Gallery() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 px-4 py-16 text-zinc-100 sm:px-6 sm:py-24 lg:px-8">
      {/* Dynamic Background Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[30%] -right-[5%] h-[50%] w-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] h-[40%] w-[40%] rounded-full bg-emerald-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <a
              href="https://github.com/rajjitlai/Image_Gallery_Template"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold tracking-tight sm:text-7xl"
          >
            Aesthetic <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-zinc-400"
          >
            A curated collection of nature&apos;s most beautiful moments.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((image, idx) => (
            <BlurImage key={image.id} image={image} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BlurImage({ image, index }: { image: ImageType; index: number }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1 }}
      className="group relative"
    >
      <div className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-3 transition-all duration-500 ease-out",
        "backdrop-blur-xl hover:border-white/20 hover:bg-zinc-800/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
        "group-hover:-translate-y-3"
      )}>
        <a href={image.href} className="block overflow-hidden rounded-2xl bg-zinc-800">
          <div className="aspect-h-1 aspect-w-1 relative w-full overflow-hidden transition-transform duration-700 group-hover:scale-110">
            <Image
              alt={image.name}
              src={image.imageSrc}
              fill
              priority={index < 4}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              style={{ objectFit: 'cover' }}
              className={cn(
                'duration-700 ease-in-out',
                isLoading
                  ? 'scale-110 blur-2xl grayscale'
                  : 'scale-100 blur-0 grayscale-0'
              )}
              onLoad={() => setLoading(false)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </a>

        <div className="mt-4 flex flex-col gap-1 px-2 pb-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
              {image.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400">
            {image.name}
          </h3>
          <p className="text-sm font-medium text-zinc-500">
            {image.username}
          </p>
        </div>
      </div>

      <div className="absolute -inset-2 -z-10 rounded-[2.5rem] bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 blur-2xl transition-all duration-500 group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:opacity-100" />
    </motion.div>
  );
}
