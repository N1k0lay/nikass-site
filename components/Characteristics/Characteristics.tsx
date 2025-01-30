'use content'
import productType from "@/types/productType";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/react";

const Characteristics = ({data}: { data: productType }) => {

    return <section className={'flex gap-5 flex-col'}>
        <Table hideHeader aria-label="Example static collection table">
            <TableHeader>
                <TableColumn> </TableColumn>
                <TableColumn> </TableColumn>
            </TableHeader>
            <TableBody>
                <>{data.params.specification.map((item) =>
                    <TableRow key={item.label}>
                        <TableCell>{item.label}</TableCell>
                        <TableCell>{item.value}</TableCell>
                    </TableRow>
                )}
                </>
                <>{data.params.features.map((item) =>
                    <TableRow key={item.label}>
                        <TableCell>{item.label}</TableCell>
                        <TableCell>{item.value}</TableCell>
                    </TableRow>
                )}
                </>
                <>
                    {data.params.packingAndWeight.map((item) =>
                        <TableRow key={item.label}>
                            <TableCell>{item.label}</TableCell>
                            <TableCell>{item.value}</TableCell>
                        </TableRow>
                    )}</>
                <>
                    {data.params.packingList.map((item) =>
                        <TableRow key={item.label}>
                            <TableCell>{item.label}</TableCell>
                            <TableCell>{item.value}</TableCell>
                        </TableRow>
                    )}
                </>
            </TableBody>
        </Table>

    </section>
}

export default Characteristics;