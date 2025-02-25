import {subtitle, title} from "@/components/primitives";
import {Card, CardBody} from "@heroui/card";
import {CardHeader} from "@heroui/react";
import {Image} from "@heroui/image";

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className={title()}>О нас</h1>
                <span className={subtitle()}>Guangzhou Nikass Smart Selection Electronics Co., Ltd – Энергия
                    Будущего Уже Сегодня ⚡</span>
            </div>

            <div className="flex flex-col gap-6">
                <h2 className={title({size: "h3"})}>История компании</h2>
                <Card shadow="sm">
                    <CardBody className="flex flex-col gap-4">
                        <p>
                            Компания Guangzhou Nikass Smart Selection Electronics Co., Ltd была основана в Гуанчжоу,
                            Китай, как инновационное предприятие, специализирующееся на разработке и производстве
                            портативных источников питания и зарядных решений нового поколения. С момента основания
                            Nikass стремится обеспечить пользователей надежными, высокотехнологичными устройствами,
                            которые позволяют оставаться на связи в любой точке мира.
                        </p>
                        <p>
                            Начиная с небольшого стартапа, компания быстро завоевала доверие клиентов благодаря высокому
                            качеству продукции, современному дизайну и внедрению передовых технологий. Сегодня Nikass –
                            это международный бренд, чьи продукты востребованы в Европе, США, странах Азии и СНГ.
                        </p>
                    </CardBody>
                </Card>
            </div>

            <div className="flex flex-col gap-6">
                <h2 className={title({size: "h3"})}>Главные преимущества</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={'grid gap-4'}>
                        <Card className={'h-auto max-w-full rounded-lg'}>
                            <CardHeader className={title({size: 'h4'})}>Передовые технологии</CardHeader>
                            <CardBody>
                                Компания использует новейшие разработки в сфере литий-железо-фосфатных (LiFePO4) и
                                литий-ионных аккумуляторов, обеспечивая высокую емкость, стабильность и долговечность
                                своих
                                устройств.
                            </CardBody>
                        </Card>
                        <Card className={'h-auto max-w-full rounded-lg'}>
                            <CardHeader className={title({size: 'h4'})}>Экологичность и энергоэффективность</CardHeader>
                            <CardBody>
                                Nikass разрабатывает солнечные панели и гибридные зарядные устройства, позволяя
                                пользователям экономить энергию и снижать углеродный след.
                            </CardBody>
                        </Card>
                        <Card className={'h-auto max-w-full rounded-lg'}>
                            <CardHeader className={title({size: 'h4'})}>Безопасность – превыше всего</CardHeader>
                            <CardBody>
                                Компания придает первостепенное значение безопасности своих продуктов. Все устройства
                                проходят
                                строгие тесты и сертификации, чтобы соответствовать самым высоким стандартам качества и
                                надежности. Встроенные системы защиты предотвращают перегрев, короткое замыкание и
                                другие
                                потенциальные риски, обеспечивая безопасность пользователей и их имущества.
                            </CardBody>
                        </Card>
                    </div>
                    <div className={'grid gap-4'}>
                        <Card className={'h-auto max-w-full rounded-lg'}>
                            <CardHeader className={title({size: 'h4'})}>Современный и эргономичный дизайн</CardHeader>
                            <CardBody>
                                Компания делает ставку на стильный, компактный и удобный дизайн. Например, многие
                                устройства
                                снабжены интерактивными LED-дисплеями, встроенными кабелями и удобными ручками для
                                переноски.
                            </CardBody>
                        </Card>
                        <Card className={'h-auto max-w-full rounded-lg'}>
                            <CardHeader className={title({size: 'h4'})}>Максимальная мощность и
                                автономность</CardHeader>
                            <CardBody>
                                Продукты отличаются высокой мощностью и долгим временем автономной работы. Благодаря
                                использованию передовых технологий в области аккумуляторов, устройства обеспечивают
                                стабильную и
                                надежную работу в течение длительного времени. Высокая емкость батарей позволяет
                                пользователям
                                не беспокоиться о частых подзарядках, что особенно важно в условиях отсутствия доступа к
                                электрической сети. Устройства идеально подходят для использования в походных условиях,
                                на
                                пикниках или в ситуациях, когда требуется длительная автономная работа.
                            </CardBody>
                        </Card>
                        <Card className={'h-auto max-w-full rounded-lg'}>
                            <CardHeader className={title({size: 'h4'})}>Доступность и глобальный охват</CardHeader>
                            <CardBody>
                                Продукция компании представлена в крупнейших онлайн- и офлайн-магазинах по всему
                                миру,
                                обеспечивая быструю доставку и высококлассный сервис.
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6">

                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                    <Image src={'/images/about-us/about-us-next.jpg'}/>
                    <Card shadow="sm">
                        <CardHeader>
                            <h2 className={title({size: "h3"})}>Перспективы развития</h2>
                        </CardHeader>
                        <CardBody className="flex flex-col gap-2">
                            <p>Nikass Smart Selection Electronics не просто производит зарядные устройства – она
                                формирует будущее портативной энергетики.</p>
                            <p>В ближайшие 5 лет компания планирует:</p>
                            <ul>
                                <li>🔹 Разработку новых поколений суперёмких повербанков и электростанций на базе
                                    твердотельных аккумуляторов
                                </li>
                                <li> 🔹 Создание универсальных систем питания для умных городов, авто и мобильных
                                    домов
                                    (RV)
                                </li>
                                <li> 🔹 Выход на новые рынки и расширение международного партнёрства
                                </li>
                                <li> 🔹 Интеграцию AI и IoT в свои зарядные решения для умного управления энергией
                                </li>
                            </ul>

                            <p>Guangzhou Nikass Smart Selection Electronics Co., Ltd – это про уверенность,
                                автономность
                                и
                                энергию там, где она действительно нужна! ⚡</p>

                            <p>📢 Выбирайте мощность, проверенную временем!</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}