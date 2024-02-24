"use client";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopItemProps {
    barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    const router = useRouter();

    const handleBookingClick = () => {
        router.push(`/barbershops/${barbershop.id}`)
    }
    return (
        <Card className="min-w-[250px] max-w-[250px] rounded-2xl">
            <CardContent className="p-2">
                <Image alt={barbershop.name} src={barbershop.imageUrl} height={0} width={0} sizes="100vw" className="h-[159px] w-full rounded-2xl" />
                <div className="px-3 pb-3">
                    <h2 className=" mt-2 font-bold overflow-hidden text-allipsis text-nowrap">{barbershop.name}</h2>
                    <p className=" mt-2 text-sm text-gray-400 overflow-hidden text-allipsis text-nowrap">{barbershop.address}</p>
                    <Button className="w-full mt-3" variant={"secondary"} onClick={handleBookingClick}>Reservar</Button>
                </div>

            </CardContent>
        </Card>
    );
}

export default BarbershopItem;