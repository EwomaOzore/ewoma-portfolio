import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "next-themes";
import Button from "@/components/Button";
import { useToast, ToastContainer } from "use-toast-message";

const Contact = () => {
  const { theme } = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const { toasts, showSuccess, showError, removeToast } = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS config missing. Ensure NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY are set.");
      showError("Email service not configured. Please try again later.");
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then(
          () => {
            showSuccess("Message sent successfully!");
            // @ts-ignore
            form.current.reset();
          },
          (error) => {
            console.error("EmailJS send error:", error);
            showError("Failed to send message. Please try again later.");
          }
        );
    }
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center py-16">
      <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-400 mb-6">
        Get in touch
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`w-[90%] sm:w-[40%] h-full border border-gray-300 ${
          theme === "dark" ? "bg-[#1E201E]" : "bg-white"
        } rounded-lg p-10 flex flex-col items-center justify-between gap-5`}
      >
        <input type="hidden" name="to_name" value="Ewoma Ozore" />
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className={`mb-4 p-4 w-full rounded-md ${
            theme === "dark" ? "bg-black" : "bg-gray-100"
          }`}
          required
          aria-label="Your name"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className={`mb-4 p-4 w-full rounded-md ${
            theme === "dark" ? "bg-black" : "bg-gray-100"
          }`}
          required
          aria-label="Your email"
        />
        <textarea
          name="message"
          placeholder="Message"
          className={`mb-4 p-4 w-full rounded-md ${
            theme === "dark" ? "bg-black" : "bg-gray-100"
          }`}
          required
          aria-label="Your message"
        />
        <Button name="Send" isBeam containerClass="w-full" />
      </form>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </section>
  );
};

export default Contact;
