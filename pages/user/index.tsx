import Layout from "@/components/layout"

export async function getStaticProps() {
    const footer = await fetch(`${process.env.BASE_URL}/api/contactsManage`, {
      method: "GET",
    });
    const data = await footer.json();
    return {
      props: {
        footer: data[0],
      },
    };
  }

export default function User({footer}:any){
    return(
        <Layout footer={footer}>
            <div className="bg-white w-full flex flex-row">

            </div>
        </Layout>
    )
}