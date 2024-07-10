import { Heading, P } from "../../components";

const Page = () => {
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
          {[
            {
              thumbnail:
                "https://static.wixstatic.com/media/9dbeebdedcd94c2489ccaca2b9fd1aa4.jpg/v1/crop/x_783,y_0,w_2172,h_2725/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/App%20Screen.jpg",
            },
            {
              thumbnail:
                "https://static.wixstatic.com/media/84770f_30b5b37a554c487d85fffde598298a77~mv2.jpg/v1/crop/x_429,y_0,w_1514,h_1900/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Website_Mockup.jpg",
            },
          ].map((v, k) => (
            <div
              key={k}
              className="shadow-sm bg-background flex flex-col-reverse md:grid md:grid-cols-[auto_15rem] justify-between md:gap-10"
            >
              <div className="flex flex-col gap-5 py-12">
                <div className="relative px-10 md:pr-0 flex flex-col gap-2">
                  <div className="border-l-[5px] border-blue-600 absolute left-0 h-full" />
                  <h3 className="capitalize font-medium text-xl text-blue-600">
                    2035-2035
                  </h3>
                  <h4 className="uppercase font-[300] text-lg text-rich-palette">
                    JOB POSITION
                  </h4>
                </div>
                <div className="px-10 md:pr-0">
                  <P>
                    {`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`}
                  </P>
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

export { Page };
