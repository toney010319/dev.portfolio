import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Users } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (_data: FormData) => {
    setIsSubmitting(true);
    setSubmitMessage("");
    // Client-side form only; wire to a backend when available.
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="flex items-center justify-center bg-gradient-to-r from-[#10131a] to-[#0f212c] px-4 py-16 md:py-20">
      <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
        <div className="mb-8 text-center md:mb-10">
          <h1 className="section-title mb-4">
            Get in <span className="text-[#2EB2D3]">Touch</span>
          </h1>
          <p className="body-copy mx-auto max-w-2xl">
            Open to frontend and full-stack web roles, as well as project work on production React/Next.js and business
            applications. Reach out by email, Teams, WhatsApp, or the form below.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:w-1/3">
            <h2 className="mb-6 font-display text-2xl font-bold text-[#2EB2D3]">Contact Information</h2>
            <div className="space-y-4">
              <a
                href="mailto:toney010319@gmail.com"
                className="flex items-center space-x-3 text-[#EFF0F2] transition-colors hover:text-[#2EB2D3]"
              >
                <Mail className="shrink-0 text-[#2EB2D3]" aria-hidden />
                <span>toney010319@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3">
                <Users className="mt-0.5 shrink-0 text-[#2EB2D3]" aria-hidden />
                <div>
                  <p className="text-sm text-[#EFF0F2]/70">Teams</p>
                  <a
                    href="mailto:toney010319@outlook.com"
                    className="text-[#EFF0F2] transition-colors hover:text-[#2EB2D3]"
                  >
                    toney010319@outlook.com
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/639363491413"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-[#EFF0F2] transition-colors hover:text-[#2EB2D3]"
              >
                <MessageCircle className="shrink-0 text-[#2EB2D3]" aria-hidden />
                <span>WhatsApp · 09363491413</span>
              </a>
            </div>
          </div>

          <div className="p-8 md:w-2/3">
            <h2 className="mb-6 font-display text-2xl font-bold text-[#2EB2D3]">Send a message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className="border-[rgba(46,178,211,0.45)] bg-transparent text-[#EFF0F2]"
                />
                {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
              </div>
              <div>
                <Input
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="border-[rgba(46,178,211,0.45)] bg-transparent text-[#EFF0F2]"
                />
                {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  {...register("message", { required: "Message is required" })}
                  className="border-[rgba(46,178,211,0.45)] bg-transparent text-[#EFF0F2]"
                  rows={4}
                />
                {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
              </div>
              <Button
                type="submit"
                className="bg-[#2EB2D3] text-white transition-colors hover:bg-[#2095B3]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitMessage && (
                <p
                  className={`text-sm ${submitMessage.includes("successfully") ? "text-green-500" : "text-red-500"}`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
