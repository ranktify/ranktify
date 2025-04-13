import Image from "next/image"
import { getImagePath } from "@/lib/utils"

export default function AppPreview() {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row gap-8">
      <div className="relative h-[500px] w-[250px] overflow-hidden rounded-xl border-8 border-foreground/10 bg-background shadow-xl">
        <Image
          src={getImagePath("/placeholder-logo.svg")}
          width={250}
          height={500}
          alt="Ranktify app screenshot - ranking interface"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p className="text-xs font-medium">Create Rankings</p>
            <h3 className="text-lg font-bold">Drag & Drop Interface</h3>
          </div>
        </div>
      </div>

      <div className="relative h-[500px] w-[250px] overflow-hidden rounded-xl border-8 border-foreground/10 bg-background shadow-xl">
        <Image
          src={getImagePath("/placeholder-logo.svg")}
          width={250}
          height={500}
          alt="Ranktify app screenshot - sharing interface"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p className="text-xs font-medium">Share Rankings</p>
            <h3 className="text-lg font-bold">Social Sharing</h3>
          </div>
        </div>
      </div>

      <div className="relative h-[500px] w-[250px] overflow-hidden rounded-xl border-8 border-foreground/10 bg-background shadow-xl">
        <Image
          src={getImagePath("/placeholder-logo.svg")}
          width={250}
          height={500}
          alt="Ranktify app screenshot - discovery interface"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p className="text-xs font-medium">Discover Music</p>
            <h3 className="text-lg font-bold">Recommendations</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

