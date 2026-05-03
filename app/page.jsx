import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function OfficeFitOutWebsite() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Office Design & Build London
        </motion.h1>
        <p className="text-lg mb-6 max-w-xl">
          Transforming workspaces across London with modern, functional and inspiring office designs.
        </p>
        <Button className="text-lg px-6 py-3">Get a Free Consultation</Button>
      </section>

      {/* Services */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Office Design", "Fit-Out & Refurbishment", "Project Management"].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p>
                  High-quality {service.toLowerCase()} tailored to your business needs across London.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Featured Project</h2>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">1 Whittington Avenue, London</h3>
              <p className="mb-4">
                Full office fit-out including design, build, and furnishing for a modern corporate workspace in central London.
              </p>
              <Button>View Project</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dedicated Project Page Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">1 Whittington Avenue, London</h2>
          <p className="mb-6">
            This project showcases a complete office transformation, delivering a high-end, functional workspace tailored to the client’s needs.
          </p>

          {/* Image Gallery Placeholder */}
          <div className="grid md:grid-cols-3 gap-4">
            {[1,2,3,4,5,6,7,8,9,10].map((img, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-sm text-gray-500">Project Image {img}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p className="mb-6">Ready to transform your office? Contact us today.</p>
        <div className="space-y-2">
          <p><strong>Email:</strong> hello@officedesignbuild.london</p>
          <p><strong>Phone:</strong> 0208 252 9789</p>
          <p><strong>Location:</strong> London, UK</p>
        </div>
        <Button className="mt-6 text-lg px-6 py-3">Request a Quote</Button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-gray-100">
        © {new Date().getFullYear()} Office Design & Build. All rights reserved.
      </footer>
    </div>
  );
}
