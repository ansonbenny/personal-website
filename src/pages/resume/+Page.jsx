import { Button } from "@/components/ui/button";
import { Heading, P } from "../../components";
import resume from "../../assets/resume.pdf";

const Page = () => {
  return (
    <div className="bg-foreground py-primary flex">
      <div className="container flex flex-col gap-[4rem]">
        <Heading>Resume</Heading>
        <div className="w-full flex flex-col gap-[2rem] mx-auto max-w-primary">
          {[
            {
              title: "Experience",
              items: [1, 1],
            },
            {
              title: "Professional skillset",
              list: true,
              items: [
                [
                  "Entrepreneurial Mindset",
                  "Go-to-Market Planning",
                  "Teamwork & Collaboration",
                  "Digital Analytics",
                ],
              ],
            },
            {
              title: "Languages",
              list: true,
              items: [["English", "Malayalam"]],
            },
          ].map((parent, key) => (
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
                        2035-Present
                      </h3>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <h4 className="uppercase font-[300] text-lg text-rich-palette">
                            JOB POSITION
                          </h4>
                          <P>Company Name</P>
                        </div>
                        <P>
                          {`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`}
                          <br />
                          <br />
                          {`I’m a great place for you to tell a story and let your users know a little more about you.`}
                        </P>
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

export { Page };
