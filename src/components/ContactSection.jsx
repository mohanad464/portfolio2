import { Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Success",
            description: "Your message has been sent successfully!",
          });
          formRef.current.reset();
          setIsSubmitting(false);
        },
        () => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          If you have any questions or would like to work together, feel free to
          contact me.
        </p>

        {/* Contact Form only */}
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                placeholder="John Doe..."
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                placeholder="Hello, I would like to..."
                rows={5}
              />
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
