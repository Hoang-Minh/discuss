import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import React from "react";
import HeaderAuth from "@/components/heaader-auth";

export default function Header() {  

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search"></Input>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end"><HeaderAuth></HeaderAuth></NavbarContent>
    </Navbar>
  );
}
