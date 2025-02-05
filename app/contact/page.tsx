import {title} from "@/components/primitives";
import {Card, CardBody} from "@heroui/card";

// Моковые данные контактов
const contactsData = {
    offices: [
        {
            city: "Москва",
            address: "ул. Тверская, 12, офис 34",
            phone: "+7 (495) 123-45-67",
            email: "moscow@example.com",
            coords: [55.757994, 37.611848],
        },
    ],
    departments: [
        {
            name: "Отдел продаж",
            phone: "+7 (800) 555-35-35",
            email: "sales@example.com",
            workHours: "Пн-Пт: 9:00 - 19:00",
        },
        {
            name: "Техническая поддержка",
            phone: "+7 (800) 550-50-50",
            email: "support@example.com",
            workHours: "Круглосуточно",
        },
    ],
};

export default function ContactsPage() {
    return (
        <>
            <div>
                <h1 className={title()}>Контакты</h1>
            </div>

            <div className="w-full flex flex-col gap-6">
                <h2 className={`${title({size: "h3"})}`}>Наши офисы</h2>
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                    {contactsData.offices.map((office, index) => (
                        <Card key={index} shadow="sm" className={'p-3'}>
                            <CardBody className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold">{office.city}</h3>
                                <p className="text-default-600">{office.address}</p>
                                <div className="mt-4">
                                    <p>Телефон: {office.phone}</p>
                                    <p>Email: {office.email}</p>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="w-full flex flex-col gap-6">
                <h2 className={title({size: "h3"})}>Отделы компании</h2>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                    {contactsData.departments.map((department, index) => (
                        <Card key={index} shadow="sm" className={'p-3'}>
                            <CardBody className="flex flex-col gap-2">
                                <h3 className="text-lg font-semibold">{department.name}</h3>
                                <p>Телефон: {department.phone}</p>
                                <p>Email: {department.email}</p>
                                <p className="text-default-500">{department.workHours}</p>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}