import React from "react";
import Image from "next/image";

const Testimonials = () => {
    return (
        <div className="z-10 mt-24 md:max-w-xl lg:max-w-7xl lg:w-full">
            <h3 className='text-3xl md:text-4xl text-center font-bold text-lime-700'>Yuk, Simak <span className="text-[#FF9D2A]">Apa Kata Alumni</span></h3>

            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mt-8 md:mt-10">
                <div className="lg:col-span-2 xl:col-auto rounded-xl shadow-md">
                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
                        <p className="text-2xl leading-normal ">
                            KEEP tempat les yang paling gak pelit ilmu. Coachnya selalu <Mark>menjawab</Mark> pertanyaan kita kalau lagi ada kesulitan.
                        </p>

                        <Avatar
                            image='https://kampunginggrisbandung.co.id/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-05-at-12.02.26-300x300.jpeg'
                            name="Sarah Steiner"
                            title="VP Sales at Google"
                        />
                    </div>
                </div>
                <div className="rounded-xl shadow-md">
                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
                        <p className="text-2xl leading-normal ">
                            KEEP adalah tempat yang nyaman untuk <Mark>meningkatkan</Mark> skill bahasa Inggris saya. Terimakasih KEEP.
                        </p>

                        <Avatar
                            image='https://kampunginggrisbandung.co.id/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-10-at-10.36.41-300x300.jpeg'
                            name="Dylan Ambrose"
                            title="Lead marketer at Netflix"
                        />
                    </div>
                </div>
                <div className="rounded-xl shadow-md">
                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
                        <p className="text-2xl leading-normal ">
                            Belajar di KEEP merupakan <Mark>pengalaman</Mark> yang berharga dan tidak terlupakan.
                        </p>

                        <Avatar
                            image='https://kampunginggrisbandung.co.id/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-29-at-2.29.00-PM-1.jpeg'
                            name="Gabrielle Winn"
                            title="Co-founder of Acme Inc"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Avatar(props: any) {
    return (
        <div className="flex items-center mt-8 space-x-3">
            <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                <Image
                    src={props.image}
                    width="40"
                    height="40"
                    alt="Avatar"
                // placeholder="blur"
                />
            </div>
            <div>
                <div className="text-lg font-medium">{props.name}</div>
                <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
            </div>
        </div>
    );
}

function Mark(props: any) {
    return (
        <>
            {" "}
            <mark className="text-lime-900 bg-lime-200 rounded-md ring-lime-200 ring-4">
                {props.children}
            </mark>{" "}
        </>
    );
}

export default Testimonials;