"use client"
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Header = () => {
    const { data, status } = useSession();
    const HandleLogoutClick = () => signOut();
    return (
        <Card>
            <CardContent className="p-6 justify-between items-center flex flex-row">
                <Image src="/Logo.png" alt="Logo Barbearia" height={22} width={120} />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <MenuIcon size={18} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        {data && data.user ? (
                            <div className="flex justify-between px-5 py-6 items-center">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={data.user.image ?? ''}></AvatarImage>
                                    </Avatar>

                                    <h2 className="font-bold">{data.user.name}</h2>
                                </div>
                                <Button variant="secondary" size="icon">
                                    <LogOutIcon onClick={HandleLogoutClick} />
                                </Button>
                            </div>
                        ) : (
                            <div className="flex flex-col px-5 py-6 gap-4">
                                <div className="flex items-center gap-3">
                                    <UserIcon size={32}/>
                                    <h2 className="font-bold">Olá, faça seu login!</h2>
                                </div>
                                <Button variant="secondary" className="w-full">
                                <LogInIcon className="mr-2" size={18}/>Fazer login
                                </Button>
                            </div>
                        )}


                    </SheetContent>
                </Sheet>

            </CardContent>

        </Card>
    );
}

export default Header;