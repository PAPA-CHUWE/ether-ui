"use client"

import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Mail, Phone, ArrowRight } from "lucide-react"

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out", once: true, offset: 80 })
  }, [])

  return (
    <section id="contact" className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Outer soft panel */}
        <div
          className="rounded-3xl bg-muted/40 border shadow-sm p-6 md:p-10"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left content */}
            <div data-aos="fade-right">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                We’re here to help you
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                Discuss Your{" "}
                <span className="text-primary">Chemical</span>
                <br />
                Solution Needs
              </h2>

              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Are you looking for top-quality chemical solutions tailored to your
                needs? Reach out to us.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="text-sm">
                    <p className="text-muted-foreground">E-mail</p>
                    <p className="font-medium">soluvent***@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="text-sm">
                    <p className="text-muted-foreground">Phone number</p>
                    <p className="font-medium">+123 - 456 - 7890</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form card */}
            <div className="flex justify-center lg:justify-end" data-aos="fade-left">
              <Card className="w-full max-w-md rounded-2xl shadow-lg">
                <CardContent className="p-6 md:p-7 space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Name</label>
                    <Input placeholder="Jane Smith" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Email</label>
                    <Input type="email" placeholder="jane@company.com" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Industry</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="pharma">Pharmaceutical</SelectItem>
                        <SelectItem value="agro">Agrochemical</SelectItem>
                        <SelectItem value="lab">Laboratory</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Message</label>
                    <Textarea placeholder="Type your message..." className="min-h-[120px]" />
                  </div>

                  <Button className="w-fit rounded-full px-5 gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    Get a Solution
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
