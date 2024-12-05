import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="relative md:sticky bg-background top-0 left-0 w-full z-20">
      <div className="container flex flex-row items-center h-[4.5rem] md:h-[5rem]">
        <a
          href="/"
          className="capitalize text-2xl !text-rich-palette font-semibold !no-underline"
        >
          Anson Benny{" "}
          <span className="hidden md:inline-block text-lg font-[300]">
            / MERN Stack developer
          </span>
        </a>

        <div className="ml-auto flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-0 flex gap-2 flex-col items-start justify-center">
              <span className="w-4 h-1 bg-blue-600 rounded-full" />
              <span className="w-9 h-1 bg-blue-600 rounded-full" />
              <span className="ml-auto w-4 h-1 bg-blue-600 rounded-full" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="md:hidden mr-[5px] px-3 py-4">
              {[
                { href: "/", label: "About me" },
                { href: "/resume", label: "resume" },
                { href: "/projects", label: "projects" },
              ].map((v, k) => (
                <DropdownMenuItem key={k}>
                  <a
                    href={v.href}
                    className="text-sm capitalize font-[300] ease-in-out duration-500 hover:text-blue-600"
                  >
                    {v.label}
                  </a>
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
            <a
              key={k}
              href={v.href}
              className="text-sm capitalize font-[300] ease-in-out duration-500 hover:text-blue-600"
            >
              {v.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
