"use client"
import {Image, Button, Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

import {title, subtitle} from "@/components/primitives";
import NextImage from 'next/image'

const data4: ({ title: string, description: string, height: number, image: string }[]) = [
    {
        title: 'Портативный Дизайн',
        description: 'Легкие и компактные, идеально подходят для использования как в помещении, так и на улице.',
        height: 300,
        image: '/images/human-charge.jpg'
    },
    {
        title: 'Батарея LiFePO4',
        description: 'Обеспечивает высокую безопасность и долговечность.',
        height: 600,
        image: '/images/energy-in.jpg'
    },
    {
        title: 'Длительный срок службы',
        description: 'Гарантия 2 года, срок службы более 2000 циклов.',
        height: 400,
        image: '/images/cl-68.jpg'
    },
    {
        title: 'Многофункциональные интерфейсы',
        description: 'DC, AC, USB порты для подключения различных устройств.',
        height: 500,
        image: '/images/cl-68.jpg'
    },
    {
        title: 'Высокая емкость',
        description: 'До 62000mAh для обеспечения энергией ваших мобильных устройств.',
        height: 500,
        image: '/images/cl-68.jpg'
    },
    {
        title: '2 способа зарядки',
        description: 'Солнечная панель и адаптер для сети',
        height: 400,
        image: '/images/cl-68.jpg'
    }
]
const sectionStyle = 'container m-auto max-w-[1280px] flex flex-col items-center px-6 py-10 md:py-15 gap-10'

export default function PricingPage() {
    return (<>
            {/*1. Hero*/}
            <section
                className={'relative container m-auto w-auto md:max-w-[1280px] px-6 flex flex-col items-center md:my-0 justify-center gap-10'}>
                <div
                    className={' flex flex-col gap-5 items-center justify-center z-10 h-full py-20 md:py-20 text-white'}>
                    <h1 className={`${title({size: 'h1'})} text-center`}>Энергия, Которая Всегда с Вами</h1>
                    <span className={`${subtitle()} text-center text-white`}>
                        Портативные системы NIKASS <br/> Ваш надежный источник энергии в любой ситуации
                    </span>
                    <Button variant={'shadow'} color={'warning'} size={'md'} radius="full">В каталог</Button>
                </div>
                <img src="/images/cl-68.jpg"
                     className="absolute t-0 l-0 b-0 r-0 z-0 inset-0 w-[95%] h-full object-cover filter blur-2xl scale-105 saturate-150 opacity-60  rounded-large"
                     aria-hidden="true"
                     alt={'blur'}/>
                <img
                    className={'absolute t-0 l-o b-0 r-0 z-9 z-9 object-cover rounded-large h-[100%] w-[95%]  dark:brightness-[0.7] brightness-[0.7] '}
                    src={'/images/cl-68.jpg'}
                    alt={'hero'}/>

            </section>
            {/*2. Портативные энергетические системы*/}
            <section className={sectionStyle}>
                <h2 className={`${title({size: 'h2'})} text-center`}>Портативные энергетические системы</h2>
                <p className={'text-center'}>
                    Мы предлагаем широкий ассортимент портативных энергетических систем, каждая из которых разработана
                    для удовлетворения различных потребностей. Найдите идеальную модель для вашего образа жизни.
                </p>
                <div className={'flex flex-row gap-10'}>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Array(3).fill(0).map((item, i) =>
                            <Card
                                className="h-[300px] bg-background"
                                isFooterBlurred
                                radius="lg"
                                shadow="md"
                                key={i}
                            >
                                <CardHeader
                                    className="absolute z-10 top-0 flex-col items-start bg-gradient-to-b from-40% from-[#0000009E] to-100% pb-10">
                                    <p className="text-xs dark:text-white/60 uppercase font-bold">
                                        Новинка
                                    </p>
                                    <h4 className="font-medium text-2xl">
                                        SL-66
                                    </h4>
                                </CardHeader>
                                <NextImage
                                    alt="Card example background"
                                    className="w-full h-full scale-125 -translate-y-10 object-cover z-1"
                                    src="/images/cl-68.jpg"
                                    width={300}
                                    height={400}
                                />
                                <CardFooter
                                    className="absolute bg-white/30 bottom-0 border-t border-slate-300 z-10 justify-between">
                                    <div>
                                        <p className="text-black text-xs">
                                            1000W/1024Wh
                                        </p>
                                        <p className="text-black text-xs">
                                            Solar Energy Storage System
                                        </p>
                                    </div>
                                    <Button
                                        color='warning'
                                        radius="full"
                                        size='md'
                                        variant='faded'
                                    >
                                        Купить
                                    </Button>
                                </CardFooter>
                            </Card>
                        )}
                    </div>
                </div>
            </section>
            {/*3. Энергия в числах*/}
            <section className={`${sectionStyle} grid md:grid-cols-2`}>
                <div className={' flex flex-col items-center gap-5'}>
                    <h2 className={title({size: 'h2'})}><span className={'text-amber-500'}>Энергия</span> в числах</h2>
                    <p className={'text-center'}>Каждая наша модель обладает уникальными характеристиками, которые
                        делают её
                        идеальной для различных сценариев использования.</p>
                </div>
                <div className={''}>
                    <Table aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn children={<></>}/>
                            <TableColumn>SL-68</TableColumn>
                            <TableColumn>SL-100</TableColumn>
                            <TableColumn>SL-150</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key="1">
                                <TableCell>Емкость батареи</TableCell>
                                <TableCell>24Ah</TableCell>
                                <TableCell>48Ah</TableCell>
                                <TableCell>72Ah</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Максимальная мощность</TableCell>
                                <TableCell>300W</TableCell>
                                <TableCell>500W</TableCell>
                                <TableCell>1000W</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Выходное напряжение</TableCell>
                                <TableCell>220V</TableCell>
                                <TableCell>220V</TableCell>
                                <TableCell>220V</TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Время зарядки</TableCell>
                                <TableCell>~8.5 часов</TableCell>
                                <TableCell>~10 часов</TableCell>
                                <TableCell>~12 часов</TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>Вес</TableCell>
                                <TableCell>4.5 кг</TableCell>
                                <TableCell>7 кг</TableCell>
                                <TableCell>10 кг</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </section>
            {/* 4. Превосходство в каждой детали */}
            <section className={sectionStyle}>
                <h2 className={`${title({size: 'h2'})} text-center`}>Превосходство в каждой детали</h2>
                <p className={'text-center'}>Каждая наша модель обладает уникальными характеристиками, которые делают её
                    идеальной для различных сценариев использования.</p>
                <div className={'md:columns-3 gap-5'}>
                    {data4.map((item) => {
                        return <Card
                            className={`w-full max-h-[${item.height}px] bg-zinc-100 dark:bg-zinc-100 mb-5`}
                            radius="lg"
                            shadow="md"
                            isFooterBlurred
                            key={item.title}
                        >
                            <CardHeader className="absolute z-10 pt-5
                                                    backdrop-blur-sm
                                                    bg-gradient-to-b from-40% from-[#ffffff9E] dark:from-[#0000009E] to-100%
                                                    ">
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-3xl font-medium text-dark dark:text-white">{item.title}</h4>
                                </div>
                            </CardHeader>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    alt="Card background"
                                    className="w-full object-cover h-full -z-1"
                                    src={item.image}
                                />
                            </CardBody>
                            <CardFooter
                                className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p className="text-sm pr-1.5 text-dark dark:text-white drop-shadow-xl shadow-white">{item.description}</p>
                            </CardFooter>
                        </Card>
                    })}
                </div>
            </section>
            {/* 5. Энергия для любых условий */}
            <section className={sectionStyle}>
                <h2 className={`${title({size: 'h2'})} text-center`}>Энергия для любых условий</h2>
                <div className={'md:columns-3 gap-5'}>

                    <Card
                        className="w-full h-[300px] bg-zinc-100 dark:bg-zinc-100 mb-5"
                        radius="lg"
                        shadow="md"
                    >
                        <CardHeader className="
                        absolute z-10 pt-5
                        backdrop-blur-sm
                        bg-gradient-to-b from-40% from-[#ffffff9E] dark:from-[#0000009E] to-100%
                        ">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-3xl font-medium text-dark dark:text-white">
                                    Пикник с семьей
                                </h4>
                            </div>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="w-full h-full object-cover z-9"
                            src="/images/human-charge.jpg"
                            removeWrapper
                        />
                        <CardFooter
                            className="absolute pb-3 bottom-0 z-10
                            backdrop-blur-sm  dark:backdrop-brightness-50
                            bg-gradient-to-b from-0% dark:from-40% from-[#ffffff00] to-[#ffffff9E] dark:to-[#0000009E] to-100%
                             ">
                            <p className="text-sm pr-1.5 text-dark dark:text-white">
                                Обеспечьте себя электричеством вдали от цивилизации.
                            </p>
                        </CardFooter>
                    </Card>
                    <Card
                        className="w-full h-[300px] bg-zinc-100 dark:bg-zinc-100 mb-5"
                        radius="lg"
                        shadow="md"
                    >
                        <CardHeader className="
                        absolute z-10 pt-5
                        backdrop-blur-sm
                        bg-gradient-to-b from-40% from-[#ffffff9E] dark:from-[#0000009E] to-100%
                        ">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-3xl font-medium text-dark dark:text-white">
                                    Аварийные ситуации
                                </h4>
                            </div>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="w-full h-full object-cover z-9"
                            src="/images/human-charge.jpg"
                            removeWrapper
                        />
                        <CardFooter
                            className="absolute pb-3 bottom-0 z-10
                            backdrop-blur-sm  dark:backdrop-brightness-50
                            bg-gradient-to-b from-0% dark:from-40% from-[#ffffff00] to-[#ffffff9E] dark:to-[#0000009E] to-100%
                             ">
                            <p className="text-sm pr-1.5 text-dark dark:text-white">
                                Будьте уверены в наличии энергии в любых непредвиденных обстоятельствах.
                            </p>
                        </CardFooter>
                    </Card>
                    <Card
                        className="w-full h-[300px] bg-zinc-100 dark:bg-zinc-100 mb-5"
                        radius="lg"
                        shadow="md"
                    >
                        <CardHeader className="
                        absolute z-10 pt-5
                        backdrop-blur-sm
                        bg-gradient-to-b from-40% from-[#ffffff9E] dark:from-[#0000009E] to-100%
                        ">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-3xl font-medium text-dark dark:text-white">
                                    Домашнее использование
                                </h4>
                            </div>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="w-full h-full object-cover z-9"
                            src="/images/human-charge.jpg"
                            removeWrapper
                        />
                        <CardFooter
                            className="absolute pb-3 bottom-0 z-10
                            backdrop-blur-sm  dark:backdrop-brightness-50
                            bg-gradient-to-b from-0% dark:from-40% from-[#ffffff00] to-[#ffffff9E] dark:to-[#0000009E] to-100%
                             ">
                            <p className="text-sm pr-1.5 text-dark dark:text-white">
                                Легко подключайте и заряжайте все необходимые устройства дома.
                            </p>
                        </CardFooter>
                    </Card>
                </div>
            </section>
            {/* 6. Отзывы */}
            <section className={'flex flex-col items-center py-20 md:py-20 gap-10 overflow-auto '}>
                <h2 className={title({size: 'h2'})}>Что говорят наши клиенты</h2>
                <div className={'snap-x flex flex-row overflow-x-auto w-full relative'}>
                    <Card className="w-[400px] m-5 snap-center shrink-0">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Иван И.</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p>Отличный продукт! Использую его для кемпинга, и он ни разу меня не подвел.
                                Рекомендую!</p>
                        </CardBody>
                    </Card>
                    <Card className="w-[400px] m-5 snap-center shrink-0">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Мария К.</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p>Идеальное решение для дачи. Теперь у меня всегда есть электричество, даже если вырубают
                                свет.</p>
                        </CardBody>
                    </Card>
                    <Card className="w-[400px] m-5 snap-center shrink-0">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Алексей П.</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p>Эта портативная станция стала незаменимым помощником в наших семейных поездках. Дети
                                могут заряжать свои гаджеты, а мы используем её для приготовления пищи.</p>
                        </CardBody>
                    </Card>
                    <Card className="w-[400px] m-5 snap-center shrink-0">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Екатерина С.</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p>Как фотограф, я часто нахожусь в отдаленных местах, и эта система обеспечивает мне
                                необходимую энергию для работы. Очень доволен покупкой!</p>
                        </CardBody>
                    </Card>
                    <Card className="w-[400px] m-5 snap-center shrink-0">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Сергей Н.</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p>После нескольких аварийных отключений электричества, я решил приобрести эту портативную
                                станцию. Теперь я спокоен за свой дом и семью.</p>
                        </CardBody>
                    </Card>
                    <Card className="w-[400px] m-5 snap-center shrink-0">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">Ольга В.</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p>Отличная вещь для любителей активного отдыха. Легкая, компактная и мощная – всё, что
                                нужно для комфортного кемпинга.</p>
                        </CardBody>
                    </Card>
                </div>
            </section>
        </>
    );
}
