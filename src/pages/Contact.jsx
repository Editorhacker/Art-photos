import React, { useState } from 'react';
import { mockPortfolioData } from '../mock/data';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { contact } = mockPortfolioData;
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // ← ADD THIS LINE


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const payload = {
    access_key: "1ad1f3ac-6069-4ced-a190-38776d09c19b",
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    service: formData.service,
    message: formData.message,
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } else {
      toast({ title: "Submission Failed", description: "Please try again later." });
    }
  } catch (error) {
    toast({ title: "Error", description: "Something went wrong." });
  } finally {
    setIsSubmitting(false);
  }


    
    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-extralight mb-6">Contact Me</h1>
            <p className="text-xl lg:text-2xl font-light text-gray-300 max-w-3xl mx-auto">
              Ready to capture your special moments? Let's discuss your photography needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-extralight mb-8">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  >
                    <option value="">Select Service Type</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="commercial">Commercial Photography</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="event">Event Photography</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gray-900 hover:bg-gray-800">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12">
              <h2 className="text-3xl font-extralight mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-light mb-2">Email</h3>
                  <p className="text-gray-600">{contact.email}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-light mb-2">Phone</h3>
                  <p className="text-gray-600">{contact.phone}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-light mb-2">Address</h3>
                  <p className="text-gray-600">{contact.address}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-light mb-2">Follow Me</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">Instagram: {contact.socialMedia.instagram}</p>
                    {/* <p className="text-gray-600">Facebook: {contact.socialMedia.facebook}</p>
                    <p className="text-gray-600">LinkedIn: {contact.socialMedia.linkedin}</p> */}
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-light mb-4">Response Time</h3>
                <p className="text-gray-600 mb-4">
                  I typically respond to inquiries within 24 hours. For urgent requests, 
                  please call directly.
                </p>
                
                <h3 className="text-lg font-light mb-4">Booking Timeline</h3>
                <p className="text-gray-600">
                  I recommend booking at least 2-3 weeks in advance for regular sessions, 
                  and 2-3 months for weddings and large events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;