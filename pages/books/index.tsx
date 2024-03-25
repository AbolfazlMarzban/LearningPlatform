"use client";

import React from "react";
import Layout from "@/components/layout";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps() {
  const footer = await fetch(`${process.env.BASE_URL}/api/contactsManage`, {
    method: "GET",
  });
  const data = await footer.json();
  const bdata = await fetch(`${process.env.BASE_URL}/api/books`, {
    method: "GET",
  });
  const books = await bdata.json();
  return {
    props: {
      footer: data[0],
      bookz: books,
    },
  };
}
function Index({ footer, bookz }: any) {
  const [books, setBooks] = useState(bookz);
  return (
    <Layout footer={footer}>
      <Head>
        <title>Abolfazl Marzban - Books</title>
        <meta name="description" content="Freelance Full Stack Web Developer" />
      </Head>
      <div className="flex gap-2 flex-wrap justify-center items-center mb-5">
        {books.map((book: any, i: any) => (
          <div
            className="max-w-xs rounded-xl shadow-xl bg-gray-300 bg-opacity-50 p-1"
            key={i}
          >
            <Image
              src={book.address}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-xl"
            />
            <div className="p-5">
              <h5 className="text-lg font-bold tracking-tight text-black dark:text-white">
                {book.name}
              </h5>
              <h5 className="mb-1 text-lg font-bold tracking-tight text-black dark:text-white">
                {book.price} $
              </h5>

              <Link
                href={`/books/${book.name}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gray-300 rounded-lg hover:bg-white"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Index;
