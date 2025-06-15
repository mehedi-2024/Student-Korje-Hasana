import React from 'react';
import enamul from '../../assets/TeamMember/enamul.jpg'
import husain from '../../assets/TeamMember/husain.jpg'
import shanto from '../../assets/TeamMember/shanto.jpg'

const AboutUs = () => {
    return (
        <div className="font-sans bg-gray-50">
            {/* Hero Section */}
            <section className="text-white flex flex-col justify-center items-center h-96 md:h-[400px] lg:h-[500px] text-center bg-cover bg-center bg-blend-overlay backdrop-blur-md relative"

                style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1683134050449-080429c850a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9hbiUyMGNoYXJpdHl8ZW58MHx8MHx8fDA%3D)' }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-green-900/60 backdrop-blur-sm" />

                {/* content  */}
                <div className="relative z-10 px-4">
                    <h1 className="text-4xl leading-[50px] md:text-6xl font-bold mb-4">আমাদের মিশন ও ইতিহাস</h1>
                    <p className="text-xl md:text-xl">আল্লাহর সন্তুষ্টি অর্জনের লক্ষ্যে সুদমুক্ত ঋণ প্রদান</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="max-w-4xl mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">আমাদের লক্ষ্য</h2>
                <p className="text-lg text-gray-700 mb-6 text-center">
                    আমরা বিশ্বাস করি যে সুদমুক্ত ঋণ গরিব মানুষের আর্থিক স্বাধীনতার চাবিকাঠি।
                    আমাদের লক্ষ্য বাংলাদেশের দরিদ্র মানুষদের আত্মনির্ভরশীল করে তোলা।
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {[
                        {
                            title: "সুদমুক্ত ঋণ",
                            desc: "ইসলামিক অর্থনীতির নীতিতে পরিচালিত"
                        },
                        {
                            title: "শিক্ষা ও প্রশিক্ষণ",
                            desc: "ঋণগ্রহীতাদের ব্যবসায়িক প্রশিক্ষণ প্রদান"
                        },
                        {
                            title: "স্থায়ী সমাধান",
                            desc: "দারিদ্র্য দূরীকরণে টেকসই পদক্ষেপ"
                        },
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="font-bold text-xl mb-4 text-green-700">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* History Section */}
            <section className="bg-green-100 py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">আমাদের উদ্দেশ্য </h2>
                    <div className="space-y-8">
                        {[
                            {
                                event: "অভাবী বা ঋণগ্রস্ত ব্যক্তিকে সাহায্য করা।"
                            },
                            {
                                event: "সুদবিহীন ঋণ প্রদানের মাধ্যমে সমাজের মানুষের প্রতি সহমর্মিতা ও সহযোগিতা করা।"
                            },
                            {
                                event: "আল্লাহর সন্তুষ্টি অর্জন করা।"
                            },
                            {
                                event: "একটি কল্যাণমূলক অর্থনৈতিক ব্যবস্থা প্রতিষ্ঠা করা।"
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center">
                                <div className="bg-green-700 rounded-full w-3 h-3 mr-6" />
                                <p className="text-lg text-gray-700 flex-1">{item.event}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="max-w-4xl mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-12">আমাদের টিম</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "এম , ডি এনামুল হক",
                            role: "প্রতিষ্ঠাতা ও চেয়ারম্যান",
                            bio: "EEE চুয়েট",
                            profile: enamul
                        },
                        {
                            name: "এম , ডি হুসাইন",
                            role: "সম্পাদক",
                            bio: "অধ্যায়নরত বরিশাল বিশ্ববিদ্যালয়",
                            profile: husain
                        },
                        {
                            name: "এস এম মেহেদি হাসান",
                            role: "অর্থ সম্পাদক",
                            bio: "ফ্রিলান্সার",
                            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s"
                        },
                        {
                            name: "আব্দুল্লা আল মামুন",
                            role: "ব্যবস্থাপনা পরিচালক",
                            bio: "অধ্যায়নরত ঢাকা কলেজ",
                            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s"
                        },
                        {
                            name: "শেখ মেহেদি হাসান",
                            role: "সহকারী পরিচালক",
                            bio: "অধ্যায়নরত",
                            profile: shanto
                        },
                    ].map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="h-32 w-32 mx-auto rounded-full mb-4 overflow-hidden">
                                <img className='w-full h-full' src={member.profile} alt="" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                            <p className="text-green-600 mb-3">{member.role}</p>
                            <p className="text-gray-600">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Islamic Values Section */}
            <section className="bg-green-50 py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">ইসলামিক নীতিমালা</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        "যারা সুদ খায়, তারা কিয়ামতের দিন উঠবে শয়তানের আঘাতে পাগল হয়ে।" (সূরা বাকারা ২:২৭৫)
                    </p>
                    <p className="text-gray-700">
                        আমরা কুরআন ও সুন্নাহর আলোকে সুদমুক্ত ঋণ প্রদান করি এবং স্বচ্ছতা বজায় রাখি।
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;