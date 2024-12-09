
interface WallcroLogoProps {
  width?: number
  height?: number
  color?: string
  className?: string
}

export default function WallcroLogo({ width = 200, height = 60, color = '#3B82F6', className = '' }: WallcroLogoProps = {}) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 50L30 10L50 50H10Z" stroke={color} strokeWidth="8" />
      <path d="M50 50L70 10L90 50H50Z" stroke={color} strokeWidth="8" />
      <circle cx="95" cy="30" r="15" stroke={color} strokeWidth="8" />
      {/* <text x="100" y="40" fontFamily="Arial, sans-serif" fontSize="24" fill={color}>Wallcro</text> */}
    </svg>
  )
}