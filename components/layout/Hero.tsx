"use client"

import React from "react"
import Spline from "@splinetool/react-spline"
import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <section className="w-full md:mt-0 mt-14">
            <div className="mx-auto max-w-6xl px-6 pt-10">
                <div className=" grid items-center gap-10 p-6 md:grid-cols-2 md:p-10">
                    {/* TEXT */}
                    <div className="space-y-5">
                        <p className="text-sm text-foreground/70">
                            EtherUI • Glassmorphism UI kit
                        </p>

                        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                            Build sleek glass interfaces with Next.js.
                        </h1>

                        <p className="text-foreground/75 leading-relaxed">
                            A modern starter with shadcn/ui components, smooth animations,
                            and a clean glass effect using #E5DFDF and #000066.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <Button className="glass text-[#000066] font-bold tracking-widest hover:bg-foreground/20 bg-secondary max-w-36 w-full">
                                Get Started
                            </Button>
                            <Button
                                variant="outline"
                                className="border-border bg-transparent text-foreground/85 hover:bg-foreground/10 hover:text-foreground max-w-36 w-full"
                            >
                                View Components
                            </Button>
                        </div>
                    </div>

                    {/* SPLINE */}
                    <div className="relative pointer-events-none">
                        <div className="overflow-hidden p-2">
                            <div className="h-[560px] w-full  bg-transparent">
                                <Spline scene="https://prod.spline.design/H-8IROft27FLMs7b/scene.splinecode" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
