import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const Nav = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "darkgray",
      }}
      shouldHideOnScroll
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">Hotel Galaxy</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 text-white text-base"
        justify="center"
      >
        <NavbarItem>
          <Link
            className="p-0 text-base bg-transparent data-[hover=true]:bg-secondaryColor text-white font-medium"
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent text-white font-medium"
            href="/bookings"
          >
            Bookings
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent text-white font-medium"
            href="/contacts"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
