import { Heading, P } from "../../components";
import { Button } from "@/components/ui/button";
import softchat from "../../assets/projects/softchat.png";
import store263 from "../../assets/projects/store263.png";
import chatgpt from "../../assets/projects/chatgpt.png";
import musicon from "../../assets/projects/musicon.png";

const Page = () => {
  const data = [
    {
      name: "Store263 - E-commerce",
      subname: "MERN, Typescript, Paystack",
      description: `The multi-vendor e-commerce platform serves as a dynamic marketplace where both vendors and administrators can list products for sale.`,
      thumbnail: store263,
      href: "https://store263.com/",
    },
    {
      name: "Social Media WebApp",
      subname: "MERN, WebRTC, Socket.IO",
      description: `
      This project is a Social Media platform, 
      It's made for live private/group chat & Video/Audio Call, 
      project allow to share stories. Socket.io/WebSocket used for live chat , 
      WebRTC / PeerJs (for peer 2 peer) used for live Video/Audio Calls.
     `,
      thumbnail: softchat,
      href: "https://github.com/ansonbenny/Social-Media",
    },
    {
      name: "Music Streamer",
      subname: "MERN, Spotify",
      description: `
      This project is a digital music platform, It's
made for listening to music and making your favorite music
collection. Spotify API is used to get tracks and albums,
artists. Spotify API provides millions of music data. This
project is made in the MERN stack.`,
      thumbnail: musicon,
      href: "https://github.com/ansonbenny/Music-Streamer",
    },
    {
      name: "ChatGPT Clone",
      subname: "MERN, OpenAi",
      description: `
      This project
is clone of chatGPT , chatGPT an AI . It's allows you to have
human-like conversations.`,
      thumbnail: chatgpt,
      href: "https://github.com/ansonbenny/ChatGPT",
    },
  ];

  return (
    <div className="bg-foreground py-primary flex">
      <div className="container flex flex-col gap-[3rem] md:gap-[4rem]">
        <div className="flex flex-col gap-[2rem]">
          <Heading>Projects</Heading>
          <div className="max-w-primary mx-auto text-center">
            <P>
              {`Explore my web development projects, where creativity meets technical expertise. Each project demonstrates my ability to build responsive, user-friendly websites and web-applications, showcasing my skills in front-end and back-end development.`}
            </P>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[2rem] mx-auto max-w-primary">
          {data.map((v, k) => (
            <div
              key={k}
              className="shadow-sm bg-background flex flex-col-reverse md:grid md:grid-cols-[auto_15rem] justify-between md:gap-10"
            >
              <div className="flex flex-col gap-5 py-12">
                <div className="relative px-10 md:pr-0 flex flex-col gap-2">
                  <div className="border-l-[5px] border-blue-600 absolute left-0 h-full" />
                  <h3 className="capitalize font-medium text-xl text-blue-600">
                    {v.name}
                  </h3>
                  <h4 className="capitalize font-[300] text-lg text-rich-palette">
                    {v.subname}
                  </h4>
                </div>
                <div className="px-10 md:pr-0">
                  <P>{v.description}</P>
                  <Button
                    variant="outline"
                    size="sm"
                    className="capitalize px-7 rounded-full mt-3"
                    asChild
                  >
                    <a href={v.href} target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
              <img
                src={v.thumbnail}
                alt="thumbnail"
                className="w-full h-[15rem] object-center object-cover md:h-full  md:min-h-[15rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
