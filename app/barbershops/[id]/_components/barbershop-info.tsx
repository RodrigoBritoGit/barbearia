"use client"
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, MapPinIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
    barbershop : Barbershop;
}

const BarbershopInfo = ({barbershop}: BarbershopInfoProps) => {
    const router = useRouter();
    const handleBackClick = () => {
        router.back();
    };
    
    return (  
        <div>
            <div className="h-[250px] relative">
                <Button onClick={handleBackClick} size="icon" variant="outline" className="z-50 absolute">
                    <ChevronLeftIcon/>
                </Button>
                <Button size="icon" variant="outline" className="z-50 absolute right-0 inline-block">
                    <MenuIcon/>
                </Button>
                <Image 
                src={barbershop.imageUrl}
                fill
                alt={barbershop.name}
                style={{
                    objectFit: "cover",
                }}
                />    
            </div>
            <div className="px-5 py-3 pb-6 border-b border-solid border-secondary">
                <h1 className="text-xl font-bold">{barbershop.name}</h1>
                <div className="flex items center gap-1">
                    <MapPinIcon className="text-primary" size={18}/>
                    <p className="text-sm">{barbershop.address}</p>
                </div>
                
            </div>
        </div>
    );
}
 
export default BarbershopInfo;