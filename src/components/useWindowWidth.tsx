import { useEffect, useState } from "react"

export const useWindowWidth = (): { width: number } => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const windowSizeHandler = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", windowSizeHandler)

        return () => {
            window.removeEventListener("resize", windowSizeHandler)
        }
    })

    return { width }
}
