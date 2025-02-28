import dynamic from "next/dynamic"

const DynamicChatbot = dynamic(() => import("./chat"), { ssr: false })

export default DynamicChatbot

