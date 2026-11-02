"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [inquiryData, setInquiryData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "inquiry", ...inquiryData }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setInquiryData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <main className="bg-white text-[#333] pt-32 pb-16 md:pt-40 md:pb-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: THE FORM */}
        <div className="flex flex-col">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease }}
            className="text-[2.25rem] sm:text-4xl md:text-[3.25rem] font-light tracking-tight leading-[1] text-[#222] mb-6 lg:whitespace-nowrap"
          >
            Let's start a conversation.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="text-[15px] md:text-[17px] font-light text-[#777] mb-10 max-w-[90%]"
          >
            Share a few details about your project and we will get back to you shortly.
          </motion.p>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            onSubmit={handleInquirySubmit} 
            className="flex flex-col gap-6 w-full max-w-[95%]"
          >
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#999]">Name</label>
              <input 
                type="text" 
                required
                value={inquiryData.name}
                onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})}
                className="w-full bg-transparent border-b border-[#ddd] py-1 text-[15px] font-light text-[#333] outline-none focus:border-[#C1A87D] transition-colors duration-300"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#999]">Email</label>
              <input 
                type="email" 
                required
                value={inquiryData.email}
                onChange={(e) => setInquiryData({...inquiryData, email: e.target.value})}
                className="w-full bg-transparent border-b border-[#ddd] py-1 text-[15px] font-light text-[#333] outline-none focus:border-[#C1A87D] transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#999]">Telephone</label>
              <input 
                type="tel" 
                value={inquiryData.phone}
                onChange={(e) => setInquiryData({...inquiryData, phone: e.target.value})}
                className="w-full bg-transparent border-b border-[#ddd] py-1 text-[15px] font-light text-[#333] outline-none focus:border-[#C1A87D] transition-colors duration-300"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#999]">Message</label>
              <textarea 
                rows={2}
                required
                value={inquiryData.message}
                onChange={(e) => setInquiryData({...inquiryData, message: e.target.value})}
                className="w-full bg-transparent border-b border-[#ddd] py-1 text-[15px] font-light text-[#333] outline-none focus:border-[#C1A87D] transition-colors duration-300 resize-none"
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease }}
              className="pt-2"
            >
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="relative z-10 overflow-hidden border border-[#ddd] hover:border-[#C1A87D] text-[#555] hover:text-white text-[11px] font-medium uppercase tracking-[0.2em] px-14 py-4 transition-colors duration-400 ease-out disabled:opacity-50
                           before:absolute before:top-0 before:bottom-0 before:right-0 before:left-auto before:w-0 before:bg-[#C1A87D] before:transition-[width] before:duration-500 before:ease-[cubic-bezier(0.16,1,0.3,1)] before:-z-10
                           hover:before:left-0 hover:before:right-auto hover:before:w-full w-fit"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>
              
              {submitStatus === "success" && <p className="text-[13px] text-green-600 mt-2 font-light">Message sent successfully.</p>}
              {submitStatus === "error" && <p className="text-[13px] text-red-600 mt-2 font-light">Something went wrong. Please try again.</p>}
            </motion.div>
          </motion.form>
        </div>


        {/* RIGHT COLUMN: THE DIRECTORY */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="pt-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] gap-x-8 gap-y-12">
            
            {/* INNER LEFT: Direct Contact Stack */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#999]">Direct Contact</span>
              
              <div className="flex flex-col gap-6">
                
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#999]">Email</span>
                  <a href="mailto:sma.hello.ngp@gmail.com" className="text-[15px] font-light text-[#555] hover:text-[#C1A87D] transition-colors duration-500 relative group overflow-hidden w-fit pb-1">
                    sma.hello.ngp@gmail.com
                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </a>
                </div>

                {/* FIXED: Renamed to Front Desk and added exact numbers requested */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#999]">Front Desk</span>
                  <div className="flex flex-col gap-1 text-[15px] font-light text-[#555]">
                    <a href="tel:+917122588900" className="hover:text-[#C1A87D] transition-colors duration-500 relative group overflow-hidden w-fit pb-0.5">
                      +91 712 2588900 / 901
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </a>
                    <a href="tel:+918484808929" className="hover:text-[#C1A87D] transition-colors duration-500 relative group overflow-hidden w-fit pb-0.5">
                      +91 8484808929
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#999]">WhatsApp</span>
                  <a href="https://wa.me/919370288018" className="text-[15px] font-light text-[#555] hover:text-[#C1A87D] transition-colors duration-500 relative group overflow-hidden w-fit pb-1">
                    +91 9370 288018
                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </a>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#999]">Address</span>
                  <address className="text-[15px] font-light text-[#555] not-italic leading-[1.6]">
                    301, P - 7/2, Krishna Style Homes<br />
                    Office B3, Byramji Town,<br />
                    Nagpur - 440013, India.
                  </address>
                </div>

              </div>
            </div>

            {/* INNER RIGHT: Office Hours & Careers Stack */}
            <div className="flex flex-col gap-10">
              
              <div className="flex flex-col gap-6">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#999]">Office Hours</span>
                <div className="text-[15px] font-light text-[#555] leading-[1.6]">
                  <p>Monday to Saturday</p>
                  <p>10:00 AM to 7:15 PM</p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#999]">Careers</span>
                <div className="flex flex-col gap-1 text-[15px] font-light text-[#555]">
                  <p>Interested in joining</p>
                  <p>Syed Mobin Architects?</p>
                  <a 
                    href="mailto:sma.jobs.ngp@gmail.com" 
                    className="text-[14px] text-[#333] border-b border-[#ddd] hover:text-[#C1A87D] hover:border-[#C1A87D] transition-colors duration-400 pb-0.5 w-fit mt-1"
                  >
                    Send your CV & portfolio
                  </a>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </main>
  );
}