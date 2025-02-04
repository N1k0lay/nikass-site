'use client'
import {Button} from "@heroui/button";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/table";
import productsData from "@/api/products.json";
import {ProductType} from "@/types/productType";
import Link from "next/link";
import NextImage from "next/image";

export default function TablePortAcc() {
    return <Table aria-label="Example empty table">
        <TableHeader>
            <TableColumn width={100}> </TableColumn>
            <TableColumn>Модель</TableColumn>
            <TableColumn>Емкость батареи</TableColumn>
            <TableColumn>Энергия</TableColumn>
            <TableColumn>Цена</TableColumn>
            <TableColumn width={100}> </TableColumn>
        </TableHeader>
        <TableBody>
            {productsData.models
                .filter(item => item.category === 'Портативные электростанции')
                .map((product: ProductType) => {
                    return <TableRow key={product.model}>
                        <TableCell>
                            <NextImage
                                alt={product.name}
                                className="rounded-small object-cover"
                                height={50}
                                width={75}
                                src={product.image}
                            />
                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.battery.capacity}</TableCell>
                        <TableCell>{product.battery.energy}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                            <Button as={Link} className={'text-right'} href={`/products/${product.model.toLowerCase()}`}
                                    color={'default'}>Перейти</Button>
                        </TableCell>
                    </TableRow>
                })
            }
        </TableBody>
    </Table>
}