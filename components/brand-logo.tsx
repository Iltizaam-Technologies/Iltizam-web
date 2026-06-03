import Image from "next/image"
import Link from "next/link"

export const LOGO_PATH = "/Iltizaam-logo.png"
export const HOME_SCREEN_PATH = "/iltizam-home-screen.PNG"

type BrandLogoProps = {
  /** Pixel height/width of the logo mark (square container). */
  size?: number
  showText?: boolean
  label?: string
  textClassName?: string
  className?: string
  href?: string | null
  priority?: boolean
}

export function BrandLogo({
  size = 36,
  showText = true,
  label = "ILTIZAAM AI",
  textClassName = "font-bold text-xl text-foreground",
  className = "",
  href = "/",
  priority = false,
}: BrandLogoProps) {
  const content = (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={LOGO_PATH}
        alt="ILTIZAAM"
        width={size}
        height={size}
        className="object-contain shrink-0"
        priority={priority}
      />
      {showText ? <span className={textClassName}>{label}</span> : null}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center hover:opacity-90 transition-opacity">
        {content}
      </Link>
    )
  }

  return content
}
