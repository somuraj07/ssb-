import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, MessageSquare, GraduationCap, Calendar, FileText, Loader2 } from 'lucide-react';

const inquiryTypes = [
  { value: 'admission', label: 'Start Admission', icon: GraduationCap },
  { value: 'schedule-visit', label: 'Schedule Visit', icon: Calendar },
  { value: 'contact', label: 'General Enquiry', icon: MessageSquare },
  { value: 'explore', label: 'Explore Programs', icon: FileText },
  { value: 'fee', label: 'Fee & Payment', icon: FileText },
  { value: 'other', label: 'Other', icon: MessageSquare }
];

const programs = ['BBA', 'MBA', 'PGDM'];
const qualifications = ['10+2 / Intermediate', 'Graduation', 'Post Graduation', 'Other'];

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    programInterest: '',
    inquiryType: 'admission',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const payload = {
      timestamp: new Date().toISOString(),
      inquiryType: formData.inquiryType,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      qualification: formData.qualification,
      programInterest: formData.programInterest,
      subject: formData.subject,
      message: formData.message
    };

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    try {
      if (scriptUrl) {
        // Use form POST (avoids CORS) - submit to hidden iframe
        const form = document.getElementById('inquiry-gsheet-form');
        if (form) {
          const inputs = form.querySelectorAll('input[data-field]');
          inputs.forEach((input) => {
            const key = input.getAttribute('data-field');
            if (payload[key] !== undefined) input.value = payload[key];
          });
          form.submit();
          // Assume success after form submit (no CORS to read response)
          setSubmitStatus('success');
          setFormData({ name: '', email: '', phone: '', qualification: '', programInterest: '', inquiryType: 'admission', subject: '', message: '' });
        } else {
          // Fallback: try fetch (works if script returns CORS headers)
          const res = await fetch(scriptUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          if (res.ok) {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', qualification: '', programInterest: '', inquiryType: 'admission', subject: '', message: '' });
          } else throw new Error('Submit failed');
        }
      } else {
        // No URL - dev mode: log and show success
        console.log('Form data (add VITE_GOOGLE_SCRIPT_URL to .env for Google Sheets):', payload);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', qualification: '', programInterest: '', inquiryType: 'admission', subject: '', message: '' });
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

  return (
    <div className="main-content min-h-screen">
      {/* Hidden form for Google Sheets (avoids CORS) */}
      {scriptUrl && (
        <>
          <iframe name="inquiry-gsheet-frame" title="Form submit" className="hidden w-0 h-0 border-0" aria-hidden="true" />
          <form
            id="inquiry-gsheet-form"
            method="POST"
            action={scriptUrl}
            target="inquiry-gsheet-frame"
            className="hidden"
          >
            <input type="hidden" name="timestamp" data-field="timestamp" />
            <input type="hidden" name="inquiryType" data-field="inquiryType" />
            <input type="hidden" name="name" data-field="name" />
            <input type="hidden" name="email" data-field="email" />
            <input type="hidden" name="phone" data-field="phone" />
            <input type="hidden" name="qualification" data-field="qualification" />
            <input type="hidden" name="programInterest" data-field="programInterest" />
            <input type="hidden" name="subject" data-field="subject" />
            <input type="hidden" name="message" data-field="message" />
          </form>
        </>
      )}
      <div className="section-spacing">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              Admission & Enquiry Form
            </h1>
            <p className="text-xl text-[var(--text-soft)] max-w-2xl mx-auto">
              One form for admission, schedule visit, contact, and all enquiries. We will respond within 24-48 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{
                  background: 'linear-gradient(145deg, rgba(246,248,250,0.08) 0%, rgba(246,248,250,0.04) 100%)',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 20px 60px -15px rgba(0,0,0,0.3)'
                }}
              >
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/40 text-green-600 dark:text-green-400">
                    Thank you! Your enquiry has been submitted. We will get back to you within 24-48 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-600 dark:text-red-400">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">I want to *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {inquiryTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all border ${
                            formData.inquiryType === type.value
                              ? 'bg-[var(--brand)]/20 border-[var(--brand)] text-[var(--brand)]'
                              : 'bg-[var(--surface-1)] border-[var(--border-light)] hover:border-[var(--border-medium)]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={formData.inquiryType === type.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <type.icon className="w-5 h-5 flex-shrink-0" />
                          <span className="text-sm font-medium truncate">{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Qualification</label>
                      <select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                      >
                        <option value="">Select</option>
                        {qualifications.map((q) => (
                          <option key={q} value={q}>{q}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Program of Interest</label>
                    <select
                      name="programInterest"
                      value={formData.programInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                    >
                      <option value="">Select program (optional)</option>
                      {programs.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief subject"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[var(--brand)]/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, var(--surface-1) 0%, var(--surface-2) 100%)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <h3 className="font-bold text-[var(--text)] mb-4">Campus Address</h3>
                <div className="flex items-start gap-3 text-[var(--text-soft)]">
                  <MapPin className="w-5 h-5 text-[var(--brand)] flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Sanskrithi School of Business<br />Puttaparthi, Anantapur<br />Andhra Pradesh, India</p>
                </div>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, var(--surface-1) 0%, var(--surface-2) 100%)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <h3 className="font-bold text-[var(--text)] mb-4">Quick Contact</h3>
                <div className="space-y-3 text-sm text-[var(--text-soft)]">
                  <a href="mailto:admissions.director@sanskrithibschool.com" className="flex items-center gap-3 hover:text-[var(--brand)] transition-colors">
                    <Mail className="w-5 h-5 text-[var(--brand)]" />
                    admissions.director@sanskrithibschool.com
                  </a>
                  <a href="tel:+919100064545" className="flex items-center gap-3 hover:text-[var(--brand)] transition-colors">
                    <Phone className="w-5 h-5 text-[var(--brand)]" />
                    +91 9100064545
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--brand)]/10 to-[var(--accent)]/10 border border-[var(--brand)]/20">
                <p className="text-sm text-[var(--text-soft)]">
                  <strong className="text-[var(--text)]">Response time:</strong> We typically respond within 24-48 hours on working days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
