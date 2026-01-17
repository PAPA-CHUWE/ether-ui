import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full  py-20 px-4">
      <div className="max-w-6xl mx-auto rounded-3xl p-10 text-center">
        {/* Header */}
        <p className="uppercase tracking-widest text-sm text-gray-600">About Us</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          Unveiling Our Identity,<br /> Vision and Values
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          We're passionate about chemical innovation. With years of experience in the industry, we've established ourselves as leaders in providing high-quality chemical solutions.
        </p>

        {/* Values Card */}
        <div className="relative mt-12">
          <div className="mx-auto max-w-3xl bg-primary text-white rounded-2xl shadow-xl py-8 px-6 flex flex-wrap justify-around gap-6">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm">Safety</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm">Efficient</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm">Precision</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm">Innovation</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div>
            <h3 className="text-xl font-semibold text-primary">Vision</h3>
            <p className="mt-2 text-gray-600 max-w-sm text-justify">
              To lead the way in chemical manufacturing by delivering innovative, sustainable, and cost-effective solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">Mission</h3>
            <p className="mt-2 text-gray-600 max-w-sm text-justify">
              To leverage our expertise, resources, and technology to manufacture chemical products that exceed industry standards.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button className="bg-primary text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#094d3f] transition">
            Know More About Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default About