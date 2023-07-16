import React from 'react';
import BookCarousel from './BookCarousel';

const TheBookWorld = () => {
    return (
        <section className="flex flex-col gap-3">
            <div className="text-center text-gray-600 mx-12 flex flex-col gap-4">
                <h3 className="text-2xl">The Book World</h3>
                <h2 className="text-4xl font-bold">Empower yourself</h2>
                <p className="">Here is your chance to educate yourself and your loved ones with authentic Islamic knowledge. Delve into the books written by Dr.Bilal Philips himself that are refreshing, cover a wide range of topics, and most importantly, are based on the Quran and sunnah. Written with different age groups in mind, you will find the books intriguing, exciting and immensely knowledgeable, helping you grasp various concepts about Islam with ease.</p>
            </div>
            <BookCarousel />
            <div className="flex justify-center">
                <button className="border-2 py-2 px-4 border-blue-500 hover:bg-blue-500 hover:text-white ">
                    VIEW PUBLICATIONS
                </button>
            </div>
        </section>
    );
};

export default TheBookWorld;