import Wip from "@/components/Wip";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* <h1 className="text-4xl font-bold">About</h1> */}
        <div className="mx-auto w-full max-w-screen-xl px-6 md:px-20 mb-16 mt-8 sm:mt-16 flex flex-col items-center justify-center text-center">
          <Wip
            title="This page is currently under construction"
            description="We're working hard to bring you an amazing about page. Check back soon to learn more about our story, mission, and team."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
