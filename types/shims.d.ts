// Minimal shims to satisfy TypeScript in environments without node_modules installed.
// These are development-time fallbacks and should be removed once dependencies are installed.

declare module "react" {
  const React: any
  export default React
  export type ReactNode = any
  export function useState<T = any>(initial?: T): [T, (v: T | ((prev: T) => T)) => void]
  export function useEffect(...args: any[]): void
  export function useMemo<T = any>(factory: () => T, deps?: any[]): T
  export function useCallback<T extends (...args: any[]) => any>(cb: T, deps?: any[]): T
  export function useRef<T = any>(initial?: T): { current: T }
  export function useContext<T = any>(ctx: any): T
  export function useId(): string
  export namespace JSX {}
}

declare module "next/link" {
  const Link: any
  export default Link
}

declare module "lucide-react" {
  export const Menu: any
  export const X: any
  export const Leaf: any
  export const Cloud: any
  export const TrendingUp: any
  export const Gauge: any
  export const Wheat: any
  export const Sun: any
  export const Droplets: any
  export const Thermometer: any
  export const CloudRain: any
  export const Check: any
  export const Star: any
  export const Users: any
  export const Shield: any
  export const Phone: any
  export const Mail: any
  export const MapPin: any
  export const Clock: any
  export const MessageCircle: any
  export const Calendar: any
  export const User: any
  export const ArrowRight: any
  export const Target: any
  export const Award: any
  export const Heart: any
  export const PanelLeftIcon: any
  export const Quote: any
  export const Facebook: any
  export const Twitter: any
  export const Instagram: any
  export const Youtube: any
  const Default: any
  export default Default
}

declare module "embla-carousel-react" {
  export type UseEmblaCarouselType = any
  const useEmblaCarousel: any
  export default useEmblaCarousel
}

declare module "recharts" {
  export const Tooltip: any
  export const Legend: any
  export const ResponsiveContainer: any
  export type LegendProps = any
}

declare module "next-themes" {
  export type ThemeProviderProps = any
  export const ThemeProvider: any
  export default any
}

declare module "cmdk" { const anyExport: any; export = anyExport }

declare module "react-hook-form" { const anyExport: any; export = anyExport }

declare module "react-day-picker" { const anyExport: any; export = anyExport }

// Radix UI packages (group shim)
declare module "@radix-ui/*" { const anyExport: any; export = anyExport }

// Allow any JSX intrinsic elements to avoid missing JSX namespace errors.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}
