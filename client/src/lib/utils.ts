import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  // Convert USD to INR (approximate exchange rate)
  const inrPrice = price * 83;  // Using approximate exchange rate of 1 USD = 83 INR
  
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,  // No decimal places for INR
  }).format(inrPrice);
}

export function formatDate(date: Date | string, formatString = "MMM d, yyyy"): string {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    return '';
  }
  return format(parsedDate, formatString);
}

export function formatDateWithTime(date: Date | string): string {
  return format(new Date(date), "d MMM yyyy 'at' h:mm a");
}

export function getInitials(name: string): string {
  const parts = name.split(" ");
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
}

export function getRatingColor(rating: number): string {
  if (rating >= 4.5) return "text-green-500";
  if (rating >= 4) return "text-blue-500";
  if (rating >= 3) return "text-yellow-500";
  return "text-gray-500";
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function getRandomId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export function calculateDiscountedPrice(originalPrice: number, discountPercentage: number): number {
  return originalPrice - (originalPrice * (discountPercentage / 100));
}

export function getDateRange(startDate: Date | string, endDate: Date | string): string {
  return `${formatDate(startDate, "MMM d")} - ${formatDate(endDate, "MMM d, yyyy")}`;
}

export function getDurationInDays(startDate: Date | string, endDate: Date | string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function formatDuration(days: number): string {
  const nights = days - 1;
  return `${days} Days, ${nights} Nights`;
}

export function getNightsFromDays(days: number): number {
  return days - 1;
}
