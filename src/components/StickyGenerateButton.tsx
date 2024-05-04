import { Icon } from "@iconify/react";
import { useEffect, useState } from "preact/hooks";
import Prism from "prismjs";
import { socials } from "../constants";
import { EToolkitType } from "../enums/share.enum";
import { useGenerateMd } from "../hooks";
import { useAppStore } from "../store/app.store";
import CustomTabs from "./common/CustomTabs";
import DevSocialPreview from "./toolkits/DevSocial/ui/Preview";
import IconPreview from "./toolkits/Icon/ui/Preview";
import ImagePreview from "./toolkits/Image/ui/Preview";
import QuotePreview from "./toolkits/Quote/ui/Preview";
import StatsPreview from "./toolkits/Stats/ui/Preview";
import TextPreview from "./toolkits/Text/ui/Preview";
import ViewsPreview from "./toolkits/Views/ui/Preview";

export const StickyGenerateButton = () => {
  const [openPreview, setOpenPreview] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const { sections } = useAppStore();

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div
      class={`fixed inset-0 z-20 duration-500 ease-out ${
        openPreview ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <p
        class={`absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded px-2 py-1 pointer-events-none bg-white text-black text-sm duration-200 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        <Icon icon="lets-icons:check-fill" height={22} color="#22c55e" />
        Copied to clipboard
      </p>
      <div class="bg-primary p-4 h-screen">
        <div class="max-w-5xl mx-auto">
          <button
            class="flex items-center ml-auto gap-2.5 rounded border border-white/20 px-3 py-1 mb-2.5"
            onClick={() => setOpenPreview(false)}
          >
            <Icon icon="zondicons:close-solid" />
            Close
          </button>
          {sections.length ? (
            <CustomTabs
              items={[
                {
                  key: "preview",
                  label: "Preview",
                  icon: "iconoir:view-structure-down",
                  children: <Preview />,
                },
                {
                  key: "markdown",
                  label: "Markdown",
                  icon: "ph:markdown-logo-fill",
                  children: <Markdown onCopied={() => setCopied(true)} />,
                },
              ]}
            />
          ) : (
            <h3 class="text-3xl text-white/80 text-center mt-8 font-medium h-[calc(100vh_-_140px)]">
              Nothing here
            </h3>
          )}
        </div>
        <Footer />
      </div>
      <button
        class="absolute -bottom-[29px] left-1/2 -translate-x-1/2 border border-white/20 rounded rounded-t-none border-t-0 py-1 px-3 bg-primary text-cyan-500"
        onClick={() => setOpenPreview(true)}
      >
        <Icon
          icon="streamline:ai-generate-portrait-image-spark-solid"
          height={20}
        />
      </button>
    </div>
  );
};

const Preview = () => {
  const { sections } = useAppStore();

  return (
    <div class="grid gap-2.5 border border-white/20 rounded-md p-5 overflow-auto max-h-[calc(100vh_-_164px)]">
      {sections.map((section) => (
        <div>
          {section.type === EToolkitType.TEXT && (
            <TextPreview id={section.id} />
          )}
          {section.type === EToolkitType.TECH && (
            <IconPreview id={section.id} />
          )}
          {section.type === EToolkitType.SOCIAL && (
            <IconPreview id={section.id} />
          )}
          {section.type === EToolkitType.STATS && (
            <StatsPreview id={section.id} />
          )}
          {section.type === EToolkitType.VIEWS && (
            <ViewsPreview id={section.id} />
          )}
          {section.type === EToolkitType.IMAGE && (
            <ImagePreview id={section.id} />
          )}{" "}
          {section.type === EToolkitType.MEME && (
            <ImagePreview id={section.id} />
          )}
          {section.type === EToolkitType.QUOTE && (
            <QuotePreview id={section.id} />
          )}
          {section.type === EToolkitType.DEV_SOCIAL && (
            <DevSocialPreview id={section.id} />
          )}
        </div>
      ))}
    </div>
  );
};

const Markdown = ({ onCopied }: { onCopied: () => void }) => {
  const { sections } = useAppStore();
  const text: string = useGenerateMd(sections);

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(text);
    onCopied();
  };

  return (
    <div class="border border-white/20 rounded-md text-sm relative max-h-[calc(100vh_-_164px)] overflow-auto">
      <div class="overflow-auto p-5">
        <pre class="language-html !p-0 !m-0">
          <code
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(text, Prism.languages.html, "html"),
            }}
          />
        </pre>
      </div>
      <button
        class="rounded-full p-2 border border-white/20 absolute top-3 right-3 text-white/75 hover:text-emerald-300 hover:border-emerald-300 duration-100 bg-primary"
        onClick={handleCopyMarkdown}
      >
        <Icon icon="octicon:copy-24" height={16} />
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer class="flex items-center justify-between py-2.5 px-4">
      <p class="text-white/80 font-medium text-xs">
        &#169; {new Date().getFullYear()} AWESOME.md
      </p>
      <a
        href="https://github.com/pth-1641/AWESOME.md"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[#238636] hover:bg-[#29903b] rounded-md px-3 py-1 flex items-center gap-1 font-medium text-sm"
      >
        <Icon icon="ic:round-star" height={22} />
        Give a star
      </a>
      <ul class="items-center gap-2.5 hidden sm:flex">
        {socials.map((social) => (
          <li>
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              <Icon icon={social.iconName} height={24} color="#fff" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
