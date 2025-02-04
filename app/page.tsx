"use client"
import {Button, Card, CardHeader, CardFooter} from "@heroui/react";

import {title, sectionStyle} from "@/components/primitives";
import NextImage from 'next/image'
import Link from "next/link";

export default function PricingPage() {
    return (<>
            {/*1. Hero*/}
            <section
                className={'relative container m-auto w-auto md:max-w-[1280px] px-6 flex flex-col items-center md:my-0 justify-center gap-10'}>
                <div
                    className={' flex flex-col gap-5 items-center justify-center z-10 h-full py-20 md:py-20 text-white'}>
                    <h1 className={`${title({size: 'h1'})} text-center`}>Энергия, Которая Всегда с Вами</h1>
                    <span className={` text-center light:text-white`}>
                        Портативные системы NIKASS <br/> Ваш надежный источник энергии в любой ситуации
                    </span>
                    <Button as={Link} href={'/products'} variant={'shadow'} color={'warning'} size={'md'} radius="full">
                        В каталог
                    </Button>
                </div>
                <NextImage src={"/products/SL-68/sl-68.jpeg"}
                           className="absolute t-0 l-0 b-0 r-0 z-0 inset-0 w-[95%] h-full object-cover filter blur-2xl scale-105 saturate-150 opacity-60  rounded-large"
                           aria-hidden="true"
                           alt={'blur'}
                           width={1920}
                           height={600}
                           quality={30}
                           priority={false}
                />
                <NextImage
                    className={'absolute t-0 l-o b-0 r-0 z-9 object-cover rounded-large h-[100%] w-[95%]  dark:brightness-[0.7] brightness-[0.7] '}
                    src={"/products/SL-68/sl-68.jpeg"}
                    alt={'hero'}
                    width={900}
                    height={300}
                    quality={50}
                    priority={false}
                />

            </section>
            {/*2. Каталог*/}
            <section className={sectionStyle}>
                <h2 className={`${title({size: 'h2'})} text-center`}>Портативные энергетические системы</h2>
                <p className={'text-center'}>
                    Мы предлагаем широкий ассортимент портативных энергетических систем, каждая из которых разработана
                    для удовлетворения различных потребностей. Найдите идеальную модель для вашего образа жизни.
                </p>
                <div className={'flex flex-row gap-10'}>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card
                            className="h-[300px] bg-background"
                            isFooterBlurred
                            radius="lg"
                            shadow="md"
                        >
                            <CardHeader
                                className="absolute z-10 top-0 flex-col items-start bg-gradient-to-b from-40% from-[#0000009E] to-100% pb-10">
                                <p className="text-xs text-white/60 uppercase font-bold">
                                    800-1000Вт
                                </p>
                                <h4 className="font-medium text-2xl text-white">
                                    Портативные аккумуляторные электростанции
                                </h4>
                            </CardHeader>
                            <NextImage
                                alt="Card example background"
                                className="w-full h-full scale-125 -translate-y-10 object-cover z-1"
                                src={'/products/SL-68/sl-68.jpg'}
                                width={300}
                                height={400}
                            />
                            <CardFooter
                                className="absolute bg-white/30 bottom-0 border-t border-slate-300 z-10 justify-between">
                                <div>
                                    <p className="text-black text-xs">
                                        Портативность и многофункциональность
                                    </p>
                                    <p className="text-black text-xs">
                                        Мощность доступная в полном объёме
                                    </p>
                                </div>
                                <Button
                                    color='default'
                                    radius="full"
                                    size='md'
                                    variant='faded'
                                    className={'px-3'}
                                    as={Link}
                                    href={'/products'}
                                >
                                    Подробнее
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card
                            className="h-[300px] bg-background"
                            isFooterBlurred
                            radius="lg"
                            shadow="md"
                        >
                            <CardHeader
                                className="absolute z-10 top-0 flex-col items-start bg-gradient-to-b from-40% from-[#0000009E] to-100% pb-10">
                                <p className="text-xs text-white/60 uppercase font-bold">
                                    Моноклисталлические
                                </p>
                                <h4 className="font-medium text-2xl text-white">
                                    Солнечные панели
                                </h4>
                            </CardHeader>
                            <NextImage
                                alt="Card example background"
                                className="w-full h-full scale-125 -translate-y-10 object-cover z-1"
                                src="/images/solar_battery.jpg"
                                width={300}
                                height={400}
                            />
                            <CardFooter
                                className="absolute bg-white/30 bottom-0 border-t border-slate-300 z-10 justify-between">
                                <div>
                                    <p className="text-black text-xs">
                                        Низкий коэффициент затухания.
                                    </p>
                                    <p className="text-black text-xs">
                                        Защитный слой PPF. Батареи А класса.
                                    </p>
                                </div>
                                <Button
                                    color='default'
                                    radius="full"
                                    size='md'
                                    variant='faded'
                                    as={Link}
                                    href={'/products'}
                                >
                                    Подробнее
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card
                            className="h-[300px] bg-background"
                            isFooterBlurred
                            radius="lg"
                            shadow="md"
                        >
                            <CardHeader
                                className="absolute z-10 top-0 flex-col items-start bg-gradient-to-b from-40% from-[#0000009E] to-100% pb-10">
                                <p className="text-xs text-white/60 uppercase font-bold">
                                    А класс
                                </p>
                                <h4 className="font-medium text-2xl text-white">
                                    LiFePo4 Аккумуляторы
                                </h4>
                            </CardHeader>
                            <NextImage
                                alt="Card example background"
                                className="w-full h-full scale-125 -translate-y-10 object-cover z-1"
                                src="/images/lifepo4_battery_2.jpg"
                                width={300}
                                height={400}
                            />
                            <CardFooter
                                className="absolute bg-white/30 bottom-0 border-t border-slate-300 z-10 justify-between">
                                <div>
                                    <p className="text-black text-xs">
                                        Новое поколение LiFePO4 батарей А класса
                                    </p>
                                    <p className="text-black text-xs">
                                        Мощность доступная в полном объёме
                                    </p>
                                </div>
                                <Button
                                    color='default'
                                    radius="full"
                                    size='md'
                                    variant='faded'
                                    as={Link}
                                    href={'/products'}
                                >
                                    Подробнее
                                </Button>
                            </CardFooter>
                        </Card>

                    </div>
                </div>
            </section>

        </>
    );
}
