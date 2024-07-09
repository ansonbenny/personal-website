import { Link } from "../../renderer/Link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="border-b border-input md:border-b-[0] sticky bg-background top-0 left-0 w-full z-20">
      <div className="container flex flex-row items-center py-5 md:py-8">
        <h1 className="capitalize text-2xl text-rich-palette font-semibold">
          Anson Benny{" "}
          <span className="hidden md:inline-block uppercase text-lg font-[300]">
            / MERN Stack developer
          </span>
        </h1>

        <div className="ml-auto flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-0 flex gap-2 flex-col items-start justify-center">
              <span className="w-4 h-1 bg-rich-palette rounded-full" />
              <span className="w-9 h-1 bg-rich-palette rounded-full" />
              <span className="ml-auto w-4 h-1 bg-rich-palette rounded-full" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="md:hidden mr-[5px] px-3 py-4">
              {[
                { href: "/", label: "About me" },
                { href: "/resume", label: "resume" },
                { href: "/projects", label: "projects" },
              ].map((v, k) => (
                <DropdownMenuItem key={k}>
                  <Link
                    href={v.href}
                    className="text-sm uppercase font-[300] ease-in-out duration-500 hover:text-blue-600"
                  >
                    {v.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden ml-auto md:flex flex-row gap-5">
          {[
            { href: "/", label: "About me" },
            { href: "/resume", label: "resume" },
            { href: "/projects", label: "projects" },
          ].map((v, k) => (
            <Link
              key={k}
              href={v.href}
              className="text-sm uppercase font-[300] ease-in-out duration-500 hover:text-blue-600"
            >
              {v.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
