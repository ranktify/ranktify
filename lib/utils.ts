import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  // In development or if path is already absolute with protocol, return as is
  if (process.env.NODE_ENV !== 'production' || path.startsWith('http')) {
    return path
  }
  // In production, prefix with basePath
  return `/ranktify${path}`
}
