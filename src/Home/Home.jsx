import React from 'react'
import CommonSlider from '../Components/Slider/CommonSlider'

const Home = () => {
  return (
    <div className='w-screen'>
      <CommonSlider />


      {/* ===== About Us ===== */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">আমাদের সম্পর্কে</h2>
        <p className="text-lg text-gray-700 text-center">
          আমরা সুদমুক্ত ঋণ প্রদান করি গরিব মানুষদের জন্য, যাতে তারা ছোট ব্যবসা শুরু করতে পারে,
          শিক্ষার খরচ বহন করতে পারে বা জরুরী প্রয়োজনে টাকা পায় — কোন ঋণের বোঝা ছাড়াই।
        </p>
      </section>

      {/* ===== How It Works ===== */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">কিভাবে কাজ করে</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { title: "আবেদন", desc: "সহজ ফর্ম পূরণ করতে হবে" },
            { title: "যাচাই", desc: "আমরা আবেদন পর্যালোচনা করবো" },
            { title: "প্রাপ্তি", desc: "সুদবিহীন টাকা " },
            { title: "পরিশোধ", desc: "নমনীয় কিস্তি পরিকল্পনা" },
          ].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-green-700 font-bold">{index + 1}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Impact Stories ===== */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">সাফল্যের গল্প</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "আব্দুর রহিম",
              story: "আমাদের ঋণ দিয়ে চিকিৎসা করেছেন",
              location: "কাটিপাড়া"
            },
            {
              name: "আব্দুস সামাদ",
              story: "মেয়ের শিক্ষার খরচ জুগিয়েছেন এই ঋণে।",
              location: "বাকা"
            },
          ].map((person, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">"{person.story}"</p>
              <p className="font-bold">— {person.name}, {person.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Donation CTA ===== */}
      <section className="bg-green-200 text-green-700 mb-32 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">আপনার সাহায্যই জীবন বদলে দেয় অন্যের</h2>
        <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
          এখনই দান করুন
        </button>
      </section>
    </div>
  )
}

export default Home