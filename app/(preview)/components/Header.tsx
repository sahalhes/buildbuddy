import Image from "next/image";
import { GitHubIcon, HelpIcon, VercelIcon } from "@/components/icons";


export function Header() {
  return (
    <header className="w-full pt-4 px-4 md:px-0 flex-none">
      <div className="flex items-center justify-center max-w-[800px] mx-auto w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <a href="https://picaos.com" target="_blank">
              <Image
                src="/logo-white.svg"
                alt="Pica Logo"
                width={80}
                height={20}
              />
            </a>
           
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/picahq/pica"
              target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors text-xs"
            >
              <GitHubIcon size={16} />
              <span>picahq/pica</span>
            </a>
            <div className="h-4 w-px bg-green-800/20" />
            <a
              href="https://docs.picaos.com/sdk/vercel-ai"
              target="_blank"
              className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors text-xs bg-green-900/20 px-2 py-1 rounded-md border border-green-800 hover:bg-green-900/40"
            >
              <HelpIcon size={14} />
              <span>Docs</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto w-full mt-4">
        <div className="h-px w-full bg-green-800/20" />
        <div className="flex items-center justify-between mt-3 px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Join our community of</span>
            <a
              href="https://www.picaos.com/community"
              target="_blank"
              className="text-xs font-medium text-green-500 hover:underline"
            >
              passionate developers
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Used with</span>
            <a
              href="https://sdk.vercel.ai"
              target="_blank"
              className="flex items-center gap-1.5 text-gray-400 hover:text-green-500 transition-colors"
            >
              <VercelIcon size={13} />
              <span className="text-xs">AI SDK</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
