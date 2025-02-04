'use client'
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from '@heroui/table';
import {ProductType} from "@/types/productType";

const Characteristics = ({productData}: { productData: ProductType }) => {

    return <section className={'flex gap-5 flex-col'}>
        <Table hideHeader aria-label="Example static collection table">
            <TableHeader>
                <TableColumn> </TableColumn>
                <TableColumn> </TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key={'capacity'}>
                    <TableCell>{'Емкость'}</TableCell>
                    <TableCell>{productData.battery.capacity}</TableCell>
                </TableRow>
                <TableRow key={'energy'}>
                    <TableCell>{'Энергия'}</TableCell>
                    <TableCell>{productData.battery.energy}</TableCell>
                </TableRow>
                <TableRow key={'type'}>
                    <TableCell>{'Тип батареи'}</TableCell>
                    <TableCell>{productData.battery.type}</TableCell>
                </TableRow>
                <TableRow key={'inverter-power'}>
                    <TableCell>{'Мощность инвертора'}</TableCell>
                    <TableCell>{productData.inverter?.power}</TableCell>
                </TableRow>
                <TableRow key={'inverter-outputVoltage'}>
                    <TableCell>{'Выходное напряжение'}</TableCell>
                    <TableCell>{productData.inverter?.outputVoltage}</TableCell>
                </TableRow>
                <TableRow key={'inverter-frequency'}>
                    <TableCell>{'Частота'}</TableCell>
                    <TableCell>{productData.inverter?.frequency}</TableCell>
                </TableRow>
                <TableRow key={'outputs-dc'}>
                    <TableCell>{'DC'}</TableCell>
                    <TableCell>{productData.outputs.DC}</TableCell>
                </TableRow>
                <TableRow key={'discharge'}>
                    <TableCell>{'Время работы'}</TableCell>
                    <TableCell>{productData.discharge.time} при нагрузке {productData.discharge.load}</TableCell>
                </TableRow>
                <TableRow key={'charging-solarInput'}>
                    <TableCell>{'Световая панель'}</TableCell>
                    <TableCell>{productData.charging.solarInput}/{productData.charging.ACInput}/{productData.charging.current}</TableCell>
                </TableRow>
                <TableRow key={'packaging-giftBoxSize'}>
                    <TableCell>{'Габариты'}</TableCell>
                    <TableCell>{productData.packaging.outerBoxSize}</TableCell>
                </TableRow>

            </TableBody>
        </Table>
        <div className={'flex flex-row gap-5'}>
        <Table hideHeader aria-label="Комлпектация">
            <TableHeader>
                <TableColumn> </TableColumn>
                <TableColumn> </TableColumn>
                <TableColumn> </TableColumn>
            </TableHeader>
            <TableBody>
                {productData.includes.map(item => {
                   return <TableRow key={`includes-${item.item}`}>
                        <TableCell>{item.item}</TableCell>
                        <TableCell>{item.spec}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
        <Table hideHeader aria-label="Габарите">
            <TableHeader>
                <TableColumn> </TableColumn>
                <TableColumn> </TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key={'packaging-unitWeight'}>
                    <TableCell>{'Вес'}</TableCell>
                    <TableCell>{productData.packaging.outerBoxWeight}</TableCell>
                </TableRow>
                <TableRow key={'warranty'}>
                    <TableCell>{'Гарантия'}</TableCell>
                    <TableCell>{productData.warranty}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </div>

    </section>
}

export default Characteristics;