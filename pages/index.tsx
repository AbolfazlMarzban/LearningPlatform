import Layout from "../components/layout"

export default function Home() {
  return (
  <Layout>
    <div className="grid grid-cols-2 gap-2 p-3">
    <div className="text-center w-full">
      <p className=" text-3xl mb-3">Hello, This is</p>
      <span className="font-extrabold text-5xl">Abolfazl Marzban</span>
      <p className="text-2xl mt-2">I'm a fullstack developer and my job is to bring your ideas to reality</p>
    </div>
      <div className="text-center">
          My photo Stays here
      </div>

    </div>
  </Layout>
  )
}
