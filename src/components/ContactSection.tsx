import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { emailJSConfig } from "@/config/emailjs";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        emailJSConfig.serviceID,
        emailJSConfig.templateID,
        {
          name: formData.name,      // matches {{name}} in template
          email: formData.email,    // matches {{email}} in template
          message: formData.message, // matches {{message}} in template
          to_name: "Deepak",
        },
        emailJSConfig.publicKey
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Failed to Send Message",
        description:
          "Sorry, there was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            If you have a question or would like to connect, please use the form
            below or reach out via social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-slide-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <div
            className="animate-slide-in"
            style={{ animationDelay: "200ms" }}
          >
            <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8 h-full shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-blue-800 dark:text-blue-400">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                    <Mail className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      Email
                    </h4>
                    <a
                      href="mailto:mottandeepak47@gmail.com"
                      className="text-blue-500 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      mottandeepak47@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                    <Phone className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      Phone
                    </h4>
                    <a
                      href="tel:+919729567273"
                      className="text-blue-500 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      +91 9729567273
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    Connect With Me
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Deepak0880"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/deepak-yadav-242b412a9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
