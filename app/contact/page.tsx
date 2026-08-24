"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function ContactPage() {
  const ease = [0.16, 1, 0.3, 1] as const;

  const [activeTab, setActiveTab] = useState<"inquiry" | "career">("inquiry");

  const [inquiryData, setInquiryData] = useState({ name: "", email: "", phone: "", message: "" });
  const [careerData, setCareerData] = useState({ name: "", email: "", phone: "", role: "", portfolio: "", message: "" });

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

  const handleCareerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "career", ...careerData }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setCareerData({ name: "", email: "", phone: "", role: "", portfolio: "", message: "" });
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

  // Flawless Pseudo-3D Extrusion Shadow (Prevents iframe bleeding)
  const isometricShadow = `
    -1px 1px 0 #e5e5e5, -2px 2px 0 #e5e5e5, -3px 3px 0 #e5e5e5, 
    -4px 4px 0 #e5e5e5, -5px 5px 0 #e5e5e5, -6px 6px 0 #e5e5e5, 
    -7px 7px 0 #d4d4d4, -8px 8px 0 #d4d4d4, -9px 9px 0 #d4d4d4, 
    -10px 10px 0 #c4c4c4, -20px 20px 30px rgba(0,0,0,0.15)
  `;

  return (
    // Removed pb-32 and min-h-screen to kill the bottom gap
    <main className="bg-white text-black selection:bg-black selection:text-white pb-16 overflow-hidden">
      
      {/* PAGE HEADER */}
      <section className="pt-28 md:pt-32 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease }}
            className="mb-4"
          >
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-400 font-bold">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5vw] font-medium tracking-tight uppercase leading-[0.9] serif"
          >
            Contact <br/> The Studio
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5, delay: 0.4, ease }}
          className="max-w-sm lg:pb-2 hidden md:block"
        >
          <p className="text-sm font-light text-gray-500 leading-relaxed">
            Whether you are planning a visionary commercial complex, a bespoke residential space, or seeking expert structural consultancy, our team is ready to bring your blueprint to reality.
          </p>
        </motion.div>
      </section>

      {/* TWO COLUMN LAYOUT (FORMS) */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-black/20 pt-8 md:pt-10">
          
          {/* LEFT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3, ease }}
            className="lg:col-span-5 flex flex-col gap-8 md:gap-10"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-medium uppercase tracking-tight serif">
                A Collaborative Process
              </h2>
              <p className="text-base font-light leading-relaxed text-black/80">
                Every great project begins with a conversation. We work closely with our clients—from initial sketches to final execution—ensuring every spatial, environmental, and aesthetic requirement is not just met, but exceeded.
              </p>
            </div>

            <div className="pt-6 border-t border-black/10">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">
                Nagpur Studio
              </h3>
              <address className="not-italic text-sm md:text-base font-light leading-relaxed text-black">
                301, P - 7/2, Krishna Style Homes <br />
                Behind Kadence International PreSchool <br />
                Chitnavis Layout, Byramji Town <br />
                Nagpur - 440013, Maharashtra, India
              </address>
            </div>

            <div className="pt-6 border-t border-black/10">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">
                Call Us
              </h3>
              <div className="flex flex-col gap-1 text-sm md:text-base font-light text-black">
                <a href="tel:+917122588900" className="hover:text-gray-500 transition-colors">+91 712 2588900 / 901</a>
                <a href="tel:+919370288018" className="hover:text-gray-500 transition-colors">+91 9370 288018</a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-black/10">
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">
                  Email
                </h3>
                <div className="flex flex-col gap-1 text-sm font-light text-black">
                  <a href="mailto:sma.hello.ngp@gmail.com" className="hover:text-gray-500 transition-colors">sma.hello.ngp@gmail.com</a>
                  <a href="mailto:sma.jobs.ngp@gmail.com" className="hover:text-gray-500 transition-colors">sma.jobs.ngp@gmail.com</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">
                  Hours
                </h3>
                <div className="flex flex-col gap-1 text-sm font-light text-black">
                  <span>Mon – Sat</span>
                  <span>10:00 AM to 7:15 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5, ease }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex gap-8 md:gap-12 border-b border-black/20 mb-8">
              <button 
                onClick={() => setActiveTab("inquiry")}
                className={`pb-4 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold transition-all duration-300 relative ${activeTab === "inquiry" ? "text-black" : "text-gray-400 hover:text-black/70"}`}
              >
                Project Inquiry
                {activeTab === "inquiry" && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
                )}
              </button>
              
              <button 
                onClick={() => setActiveTab("career")}
                className={`pb-4 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold transition-all duration-300 relative ${activeTab === "career" ? "text-black" : "text-gray-400 hover:text-black/70"}`}
              >
                Careers
                {activeTab === "career" && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
                )}
              </button>
            </div>

            {/* Removed min-h-[420px] which was forcing empty space */}
            <div className="relative">
              <AnimatePresence mode="wait">
                
                {/* FORM 1: INQUIRY */}
                {activeTab === "inquiry" && (
                  <motion.form 
                    key="inquiry"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease }}
                    className="flex flex-col gap-8 md:gap-10"
                    onSubmit={handleInquirySubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      <input 
                        type="text" 
                        placeholder="Your Name *"
                        required
                        value={inquiryData.name}
                        onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-black/20 py-3 text-base font-light text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors"
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address *"
                        required
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({...inquiryData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-black/20 py-3 text-base font-light text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number (Optional)"
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({...inquiryData, phone: e.target.value})}
                      className="w-full bg-transparent border-b border-black/20 py-3 text-base font-light text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors"
                    />
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your project or inquiry *"
                      required
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({...inquiryData, message: e.target.value})}
                      className="w-full bg-transparent border-b border-black/20 py-3 text-base font-light text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors resize-none"
                    />
                    <div className="pt-2 flex flex-col gap-3 justify-start">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="group flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-fit"
                      >
                        <span className="border-b-2 border-black group-hover:border-gray-500 transition-colors pb-1">
                          {isSubmitting ? "Sending..." : "Send Inquiry"}
                        </span>
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      {submitStatus === "success" && <span className="text-xs text-green-600 font-medium">Message sent successfully!</span>}
                      {submitStatus === "error" && <span className="text-xs text-red-600 font-medium">Something went wrong. Please try again.</span>}
                    </div>
                  </motion.form>
                )}

                {/* FORM 2: CAREERS */}
                {activeTab === "career" && (
                  <motion.form 
                    key="career"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease }}
                    className="flex flex-col gap-8 md:gap-10"
                    onSubmit={handleCareerSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      <input 
                        type="text" 
                        placeholder="Your Name *"
                        required
                        value={careerData.name}
                        onChange={(e) => setCareerData({...careerData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-black/20 py-3 text-base font-light text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors"
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address *"
                        required
                        value={careerData.email}
                        onChange={(e) => setCareerData({...careerData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-black/20 py-3 text-base font-light text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      <input 
                        type="text" 
                        placeholder="Desired Role (e.g. Junior Architect) *"
                        required
                        value={careerData.role}
                        onChange={(e) => setCareerData({...careerData, role: e.target.value})}
                        className="w-full bg-transparent border-b border-black/20 py-3 text-base font-light text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors"
                      />
                      <input 
                        type="url" 
                        placeholder="Portfolio Link (Drive, Behance, etc.) *"
                        required
                        value={careerData.portfolio}
                        onChange={(e) => setCareerData({...careerData, portfolio: e.target.value})}
                        className="w-full bg-transparent border-b border-black/20 py-3 text-base font-light text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <textarea 
                      rows={3}
                      placeholder="Brief Cover Letter / Message *"
                      required
                      value={careerData.message}
                      onChange={(e) => setCareerData({...careerData, message: e.target.value})}
                      className="w-full bg-transparent border-b border-black/20 py-3 text-base font-light text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors resize-none"
                    />
                    <div className="pt-2 flex flex-col gap-3 justify-start">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="group flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-fit"
                      >
                        <span className="border-b-2 border-black group-hover:border-gray-500 transition-colors pb-1">
                          {isSubmitting ? "Sending..." : "Submit Application"}
                        </span>
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      {submitStatus === "success" && <span className="text-xs text-green-600 font-medium">Application sent successfully!</span>}
                      {submitStatus === "error" && <span className="text-xs text-red-600 font-medium">Something went wrong. Please try again.</span>}
                    </div>
                  </motion.form>
                )}
                
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION: 3D ISOMETRIC ARCHITECTURAL MAP */}
      {/* Tightly bound section with zero extra margin */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mt-12 border-t border-black/20 pt-12 md:pt-16 mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* MAP INFO */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gray-400 font-bold mb-4 block">
              03 // Global HQ
            </span>
            <h2 className="text-4xl md:text-5xl uppercase tracking-tight serif text-black mb-6">Nagpur, India</h2>
            <p className="text-base font-light text-black/70 leading-relaxed mb-8 max-w-sm">
              Visit our central design studio to explore materials, view physical models, and discuss the blueprint for your next architectural endeavor.
            </p>
            <a 
              href="https://maps.google.com/maps?q=Syed+Mobin+Architects,+Byramji+Town,+Nagpur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors duration-300"
            >
              <span className="border-b-2 border-black group-hover:border-gray-500 transition-colors pb-1">Get Directions</span>
              <MapPin size={16} className="transform group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* 3D MAP MODEL */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center py-8">
            
            {/* The Wrapper applies the Isometric Rotation */}
            <motion.a 
              href="https://maps.google.com/maps?q=Syed+Mobin+Architects,+Byramji+Town,+Nagpur"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, rotateX: 60, rotateZ: -45, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateX: 60, rotateZ: -45, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ boxShadow: isometricShadow }}
              className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] bg-white border border-black/20 group cursor-pointer block"
            >
              
              {/* Perfectly Clipped Map Surface */}
              <div className="absolute inset-0 overflow-hidden bg-[#e0e0e0]">
                <iframe
                  src="https://maps.google.com/maps?q=21.1458,79.0882&t=m&z=15&output=embed&iwloc=near"
                  className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 grayscale contrast-125 opacity-70 mix-blend-multiply pointer-events-none"
                  title="Architectural Site Map"
                ></iframe>
              </div>

              {/* 
                 TRUE 3D ARCHITECTURAL PIN 
                 We perfectly counter-rotate it so it physically stands straight up relative to your screen.
              */}
              <div 
                className="absolute top-[45%] left-[55%] z-20 pointer-events-none flex flex-col items-center justify-end"
                style={{
                  transform: "translate(-50%, -100%) rotateZ(45deg) rotateX(-60deg)",
                  transformOrigin: "bottom center"
                }}
              >
                {/* Glowing Marker Head */}
                <div className="w-7 h-7 bg-black rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-[3px] border-white relative flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                  <div className="absolute inset-0 rounded-full animate-ping bg-black/40"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                {/* Vertical Steel Pole */}
                <div className="w-[3px] h-12 bg-gradient-to-b from-black to-transparent"></div>
              </div>

            </motion.a>

          </div>
        </div>
      </section>

    </main>
  );
}