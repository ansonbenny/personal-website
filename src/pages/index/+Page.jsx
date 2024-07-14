import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { P } from "../../components";
import { navigate } from "vike/client/router";
import profile from "../../assets/profile.png";

const Page = () => {
  return (
    <>
      <div className="hidden md:block fixed bg-foreground left-0 top-0 w-[43%] h-full" />
      <div className="container bg-foreground md:bg-[transparent] relative -mt-[3rem] md:!mt-auto md:mb-auto py-primary">
        <div className="grid md:grid-cols-[45%_55%] items-center max-w-primary mx-auto">
          <div className="mb-auto">
            <div className="block md:hidden absolute bg-background left-0 top-0 w-full h-[40%]"></div>
            <div className="shadow-sm bg-[#f5ece6] w-full flex flex-col relative">
              <div className="p-12 flex flex-col items-center justify-center gap-5">
                <img
                  src={profile}
                  alt="profile"
                  className="max-w-[12rem] rounded-full"
                />
                <h1 className="text-2xl text-rich-palette font-semibold capitalize">
                  Anson Benny
                </h1>
                <div className="bg-blue-600 h-[2px] w-12" />
                <h2 className="text-lg text-rich-palette font-[300] capitalize">
                  MERN Stack developer
                </h2>
              </div>
              <div className="p-4 bg-background w-full flex flex-row gap-5 items-center justify-center">
                {[
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/anson-benny/",
                  },
                  { Icon: Mail, href: "mailto:ansonbenny166@gmail.com" },
                  { Icon: Github, href: "https://github.com/ansonbenny" },
                ].map((v, k) => (
                  <a
                    href={v.href}
                    className="group"
                    rel="noreferrer"
                    target="_blank"
                    key={k}
                  >
                    <v.Icon
                      size={"1.3rem"}
                      className="text-rich-palette group-hover:text-blue-600"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-12 md:pb-12 md:px-10 mb-auto flex flex-col gap-7">
            <h1 className="text-rich-palette text-5xl md:text-7xl font-semibold">
              Hello
            </h1>
            <h2 className="text-2xl text-rich-palette font-medium">
              Here{`'`}s who I am & what I do
            </h2>
            <div className="flex flex-row gap-5">
              <Button
                variant="secondary"
                size="sm"
                className="capitalize rounded-full px-7"
                onClick={() => navigate("/resume")}
              >
                Resume
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="capitalize rounded-full px-7"
                onClick={() => navigate("/projects")}
              >
                Projects
              </Button>
            </div>
            <P>
              {`Full Stack Developer with hands-on experience in developing and deploying web applications. Have a proven track record in crafting multiple highly-scalable applications using full stack.`}
              <br />
              {`I'm happiest when I'm creating, learning, exploring, and thinking about how to make things better. Always Eager to Adapt and Take on New Challenges!`}
            </P>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
