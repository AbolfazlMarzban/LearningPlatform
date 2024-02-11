import Layout from '@/components/layout';
import React from 'react';
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

function Login({footer}:any) {
    return (
        <Layout footer={footer}>
            <h1>Login</h1>
        </Layout>
    );
}

export default Login;