function HeroText() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-center w-full h-screen px-6 mx-auto bg-transparent dark:text-orange-50 md:items-center md:text-center">
      <div className="space-y-2 md:space-y-4">
        <p className="text-2xl md:text-2xl text-orange-950 dark:text-orange-50">
          I am a Full Stack Developer developing websites and
        </p>
        <p className="text-xl md:text-xl text-orange-950 dark:text-orange-50">
          Creating beautiful yet functional web experiences
        </p>
      </div>
      <h1 className="mt-6 text-8xl font-bold leading-none text-orange-950 sm:text-8xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[13rem] dark:text-orange-50 md:leading-tight">
        Hello!, I'm Jay
      </h1>
    </div>
  );
}

export default HeroText;

