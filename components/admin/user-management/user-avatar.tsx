interface UserAvatarProps {
  initials: string
}

export function UserAvatar({ initials }: UserAvatarProps) {
  const colors = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-cyan-500",
    "bg-indigo-500",
    "bg-rose-500",
  ]

  const colorIndex = initials.charCodeAt(0) % colors.length
  const bgColor = colors[colorIndex]

  return (
    <div
      className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center text-white text-sm font-semibold`}
    >
      {initials}
    </div>
  )
}
