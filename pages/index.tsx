import Link from "next/link";
import Layout from "../components/layout";
import me from "../public/me.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="w-full flex justify-center items-center max-sm:px-3">
        <div className="bg-gray-300 rounded-lg p-3 bg-opacity-50 flex flex-col sm:flex-row gap-4 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">{`Hi! I'm Abolfazl Marzban.`}</h1>
            <h2 className="text-lg font-semibold">{`A full stack freelance developer`}</h2>
            <p className="p-2">
              {
                `
                Greetings! I'm Abolfazl, an experienced Freelance Full-Stack
                Developer, and I'm on a mission to craft digital experiences that
                go beyond expectations.
                `
              }
          
            </p>
            <div className="flex gap-3 mt-4">
                <div className="bg-red-600 text-white p-2 rounded-full px-3">
                  <Link href={`tel:+989183933164`}>
                  call me!
                  </Link>
                </div>
                <div className="bg-red-600 text-white p-2 rounded-full px-3">
                  <Link href={`mailto:abolfazlmarzban39@gmail.com`}>
                  mail me!
                  </Link>
                </div>
            </div>
          </div>
          <div className="w-1/2 max-sm:hidden">
            <Image
              src={me}
              width={0}
              height={0}
              alt="abolfazl marzban"
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
              className="rounded-lg"
            ></Image>
          </div>
          <div className="sm:hidden w-3/4 profilePicbox h-72">

          </div>
        </div>
      </div>
    </Layout>
  );
}
