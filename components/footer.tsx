import { useState, useEffect } from "react";
import axios from "axios";



function Footer({footer}:any) {
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios.get("/api/contactsManage");
  //     console.log("res", result);
  //     setPhoneNumber(result.data[0].phonenumber);
  //     setEmail(result.data[0].email);
  //   })();
  // }, []);
  return (
    <div className="bg-white w-full flex gap-4 justify-center py-1 flex-wrap">
      <div className="flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
        <span className="text-sm font-bold">{footer.phonenumber}</span>
      </div>
      <div className="flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
          />
        </svg>

        <span className="text-sm font-bold">{footer.email}</span>
      </div>
    </div>
  );
}

export default Footer;
