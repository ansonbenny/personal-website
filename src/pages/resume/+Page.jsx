import { Button } from "@/components/ui/button";
import { Heading, P } from "../../components";
import resume from "../../assets/resume.pdf";

const Page = () => {
  const data = [
    {
      title: "Experience",
      items: [
        {
          start: "Feb 2024",
          end: "Present",
          position: "Software Engineer",
          company: "Micro.company",
          description: `
          I have extensively utilized a diverse array of technologies to drive successful project outcomes.
          Enhancing user experience through meticulous attention to design and functionality.
          Troubleshooting and resolving complex technical issues to ensure system reliability and performance.
          My role has been instrumental in continuously advancing my software development skills, enabling me to remain at the cutting edge of technological advancements.
          `,
        },
        {
          start: "Dec 2022",
          end: "Jan 2024",
          position: "Full stack developer",
          company: "Freelancing",
          description: `
          Architecting web applications using technologies like Node.js, Express.js, MongoDB, React, Redux, Next.Js, HTML5 and CSS.
          Successfully developed a variety of websites, including multi-vendor e-commerce platforms for clients in Zimbabwe, Africa.
          Implemented SEO best practices for optimizing website performance and visibility on search engines.
          Received positive feedback from clients.
          `,
        },
      ],
    },
    {
      title: "Professional skillset",
      list: true,
      items: [
        [
          "Javascript",
          "Typescript",
          "React",
          "Next.js",
          "Node.js",
          "MongoDB",
          "Express.js",
          "Git & GitHub",
          "HTML5 & CSS",
          "Redux",
          "React-Hook-Form",
          "WebRTC",
          "Socket.IO",
        ],
      ],
    },
    {
      title: "Languages",
      list: true,
      items: [["English", "Malayalam"]],
    },
  ];

  return (
    <div className="bg-foreground py-primary flex">
      <div className="container flex flex-col gap-[3rem] md:gap-[4rem]">
        <Heading>Resume</Heading>
        <div className="w-full flex flex-col gap-[2rem] mx-auto max-w-primary">
          {data.map((parent, key) => (
            <div className="flex flex-col gap-[2rem]" key={key}>
              <div className="flex flex-row gap-5 justify-between items-end">
                <h2 className="text-rich-palette text-2xl font-medium">
                  {parent.title}
                </h2>
                {key === 0 && (
                  <Button
                    variant="secondary"
                    size="sm"
                    className="capitalize rounded-full px-7 hover:bg-foreground"
                    onClick={() => {
                      window.open(resume, "_blank");
                    }}
                  >
                    downdload CV
                  </Button>
                )}
              </div>
              {parent.items.map((v, index) => (
                <div
                  className={`shadow-sm py-12 px-10 bg-background flex ${
                    parent.list ? "flex-wrap gap-[2rem]" : "flex-col gap-2"
                  }`}
                  key={index}
                >
                  {parent.list ? (
                    v.map((list, listKey) => (
                      <div
                        key={listKey}
                        className="capitalize font-[300] text-sm text-rich-palette grid grid-cols-[1.5rem_auto] items-center"
                      >
                        <div className="w-[.7rem] h-[.7rem] bg-blue-600" />{" "}
                        {list}
                      </div>
                    ))
                  ) : (
                    <>
                      <h3 className="capitalize font-medium text-xl text-blue-600">
                        {v.start} - {v.end}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <h4 className="capitalize font-[300] text-lg text-rich-palette">
                            {v.position}
                          </h4>
                          <P>{v.company}</P>
                        </div>
                        <P>{v.description}</P>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
