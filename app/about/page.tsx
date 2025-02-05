'use client'
import { title } from "@/components/primitives";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import NextImage from "next/image";

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className={title()}>О нас</h1>
            </div>

            <div className="flex flex-col gap-6">
                <h2 className={title({ size: "h3" })}>Наше производство</h2>
                <Card shadow="sm">
                    <CardBody className="flex flex-col gap-4">
                        <p>
                            Мы владеем производственной базой площадью 10 000 квадратных метров, что позволяет нам
                            иметь хорошо организованные производственные линии для создания качественной продукции.
                            Наше видение заключается в том, чтобы предоставить потребителям более безопасный,
                            портативный и удобный опыт использования электроэнергии в условиях работы на открытом
                            воздухе, домашнего энергоснабжения, путешествий, кемпинга и других видов деятельности.
                        </p>
                    </CardBody>
                </Card>
            </div>

            <div className="flex flex-col gap-6">
                <h2 className={title({ size: "h3" })}>О компании</h2>
                <Card shadow="sm">
                    <CardBody className="flex flex-col gap-4">
                        <p>
                            Мы — компания NIKASS, специализирующаяся на исследованиях,
                            разработке, производстве, продаже и предоставлении индивидуальных услуг в области
                            солнечных энергетических систем.
                        </p>
                        <p>
                            Мы предлагаем профессиональные решения для хранения солнечной энергии на открытом
                            воздухе, домашнего энергоснабжения, мобильных электростанций и портативных ламп.
                        </p>
                        <p>
                            Все наши продукты соответствуют стандарту системы управления качеством ISO9001:2015.
                            Они проходят тестирование и проверку на долговечность с использованием современного
                            автоматизированного оборудования. Благодаря сильной технической базе, взаимовыгодным
                            ценам, надежному качеству продукции и высокоэффективному послепродажному обслуживанию,
                            наши продукты продаются по всему миру и получили единодушное одобрение пользователей
                            из различных отраслей как внутри страны, так и за рубежом.
                        </p>
                    </CardBody>
                </Card>
            </div>

            <div className="flex flex-col gap-6">
                <h2 className={title({ size: "h3" })}>Наши достижения</h2>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                    <Card shadow="sm">
                        <CardBody className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">14+ лет опыта</h3>
                            <p className="text-default-600">
                                Более 14 лет опыта в разработке и производстве солнечных энергетических систем.
                            </p>
                        </CardBody>
                    </Card>
                    <Card shadow="sm">
                        <CardBody className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">100+ человек в R&D</h3>
                            <p className="text-default-600">
                                Команда из более чем 100 специалистов, занимающихся исследованиями и разработками.
                            </p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}