import { Facebook, Instagram, Mail, MessageCircle, Users } from "lucide-react";

const channels = [
  {
    label: "Email",
    value: "toney010319@gmail.com",
    href: "mailto:toney010319@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "Teams",
    value: "toney010319@outlook.com",
    href: "mailto:toney010319@outlook.com",
    icon: Users,
    external: false,
  },
  {
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: "https://wa.me/639363491413",
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Facebook",
    value: "facebook.com/d4ydr34mer",
    href: "https://www.facebook.com/d4ydr34mer/",
    icon: Facebook,
    external: true,
  },
  {
    label: "Instagram",
    value: "instagram.com/toney010319",
    href: "https://www.instagram.com/toney010319/",
    icon: Instagram,
    external: true,
  },
] as const;

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-[#10131a] to-[#0f212c] px-4 py-16 md:py-20"
    >
      <div className="container mx-auto max-w-2xl">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="section-title mb-4">
            Get in <span className="text-[#2EB2D3]">Touch</span>
          </h2>
          <p className="body-copy mx-auto max-w-xl">
            Open to frontend and full-stack web roles, as well as project work on production React/Next.js and business
            applications. Reach out through any of the channels below.
          </p>
        </div>

        <ul className="mx-auto grid gap-3 sm:gap-4">
          {channels.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-4 rounded-xl border border-[rgba(46,178,211,0.35)] bg-[#0c1218]/80 px-4 py-3.5 transition-colors hover:border-[#2EB2D3] hover:bg-[#2eb2d315] sm:px-5 sm:py-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#2EB2D3]/50 bg-[#2eb2d320] text-[#2EB2D3]">
                  <Icon size={20} aria-hidden />
                </span>
                <span className="min-w-0 text-left">
                  <span className="block text-xs font-medium uppercase tracking-wide text-[#EFF0F2]/60 sm:text-sm">
                    {label}
                  </span>
                  <span className="mt-0.5 block truncate font-display text-sm font-semibold text-[#EFF0F2] sm:text-base">
                    {value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactUs;
