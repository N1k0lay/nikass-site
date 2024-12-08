"use client"
import {Image} from "@nextui-org/react";
import {title, subtitle} from "@/components/primitives";


export default function PricingPage() {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <h1 className={title()}>Энергия, Которая Всегда с Вами</h1>
                <span className={`${subtitle()}, text-center`}>Портативные системы <span
                    className={''}>NIKASS</span> <br/> Ваш надежный источник энергии в любой ситуации
                </span>

                <Image
                    isBlurred
                    className="m-5"
                    alt="NextUI hero Image"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                />

            </section>
        </>
    );
}
