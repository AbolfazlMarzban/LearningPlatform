import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/adminLayout";
import axios from "axios";

function Index() {
  const [showLogin, setShowLogin] = useState(false);
  const [showError, setShowError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const id = localStorage.getItem("abolID");
    if (!id) {
      console.log("notLogged id");
      setShowLogin(true);
    }
  }, []);
  async function enterUser() {
    try {
      let data = {
        username: userName,
        password: password,
      };
      const result = await axios.post("/api/auth", data);
      if (result.data._id) {
        localStorage.setItem("abolID", result.data._id);
        setShowLogin(false);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {showLogin ? (
        <>
          <div className="flex flex-col gap-3 w-full h-screen items-center justify-center">
            {showError && (
              <span className="text-red-600 font-bold text-lg">
                Incorect Information!
              </span>
            )}
            <label htmlFor="" className="text-lg">
              username
            </label>
            <input
              type="text"
              className="border border-2 rounded-lg p-2"
              onChange={(ev) => setUserName(ev.target.value)}
            />
            <label htmlFor="" className="text-lg">
              password
            </label>
            <input
              type="text"
              className="border border-2 rounded-lg p-2"
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button
              className="bg-green-400 text-white px-10 py-1 rounded-lg"
              onClick={() => enterUser()}
            >
              Enter
            </button>
          </div>
        </>
      ) : (
        <AdminLayout>
          <div></div>
        </AdminLayout>
      )}
    </>
  );
}

export default Index;
