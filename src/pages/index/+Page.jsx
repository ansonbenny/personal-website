import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { P } from "../../components";

const Page = () => {
  return (
    <>
      <div className="hidden md:block fixed bg-foreground left-0 top-0 w-[43%] h-full" />
      <div className="container bg-foreground md:bg-[transparent] relative py-primary my-auto">
        <div className="grid md:grid-cols-[45%_55%] items-center max-w-primary mx-auto">
          <div className="mb-auto">
            <div className="block md:hidden absolute bg-background left-0 top-0 w-full h-[40%]"></div>
            <div className="shadow-sm bg-[#f5ece6] w-full flex flex-col relative">
              <div className="p-12 flex flex-col items-center justify-center gap-5">
                <img
                  src="https://static.wixstatic.com/media/86f442ff0674441faadc2994b1b33e77.jpg/v1/crop/x_130,y_160,w_1320,h_1311/fill/w_496,h_488,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/86f442ff0674441faadc2994b1b33e77.jpg"
                  alt="profile"
                  className="max-w-[12rem] rounded-full"
                />
                <h1 className="text-2xl text-rich-palette font-semibold capitalize">
                  Anson
                  <br />
                  Benny
                </h1>
                <div className="bg-blue-600 h-[2px] w-12" />
                <h2 className="text-lg text-rich-palette font-[300] uppercase">
                  MERN Stack developer
                </h2>
              </div>
              <div className="p-4 bg-background w-full flex flex-row gap-5 items-center justify-center">
                <a href="" className="group">
                  <Linkedin
                    size={"1.3rem"}
                    className="text-rich-palette group-hover:text-blue-600"
                  />
                </a>
                <a href="" className="group">
                  <Github
                    className="text-rich-palette group-hover:text-blue-600"
                    size={"1.3rem"}
                  />
                </a>
                <a href="" className="group">
                  <Twitter
                    className="text-rich-palette group-hover:text-blue-600"
                    size={"1.3rem"}
                  />
                </a>
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
                className="uppercase rounded-full px-7"
              >
                Resume
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="uppercase rounded-full px-7"
              >
                Projects
              </Button>
            </div>
            <P>
              {`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`}
              <br />
              <br />
              {`I’m a great place for you to tell a story and let your users know a little more about you.`}
            </P>
          </div>
        </div>
      </div>
    </>
  );
};

export { Page };
