'use client'
import {Button, Image, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/react";
import productsData from "@/api/products.json";
import productType, {Specification} from "@/types/productType";
import Link from "next/link";

export default function TablePortAcc() {

    return <Table aria-label="Example empty table">
        <TableHeader>
            <TableColumn width={100}> </TableColumn>
            <TableColumn>Модель</TableColumn>
            <TableColumn>Емкость батареи</TableColumn>
            <TableColumn>Цена</TableColumn>
            <TableColumn width={100}> </TableColumn>
        </TableHeader>
        <TableBody>
            {productsData.data
                .filter(item => item.category === 'Портативные аккумуляторные электростанции')
                .map((product: productType) => {
                    return <TableRow key={product.name}>
                        <TableCell>
                            <Image
                                alt={product.name}
                                className="object-cover"
                                radius={'md'}
                                shadow="sm"
                                height={50}
                                src={product.image}
                            />
                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.params.specification
                            .find((item: Specification) => item.label === 'Емкость батареи')?.value}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                            <Link className={'text-right'} href={`/products/${product.name.toLowerCase()}`}>
                                <Button color={'default'}>Перейти</Button>
                            </Link>
                        </TableCell>
                    </TableRow>
                })
            }
        </TableBody>
    </Table>
}