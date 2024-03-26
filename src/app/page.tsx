"use client";

import axios from "axios";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(
            document.querySelector("#loginForm") as HTMLFormElement
          );
          const data: {
            [key: string]: string;
          } = {};

          formData.forEach((value, key) => {
            data[key] = String(value);
          });

          await axios
            .post(`backend/user/login`, data, {
              headers: {
                withCredentials: true,
              },
            })
            .then(() => {
              history.pushState({ logged: "ffew" }, "ggg", "/profile");
              window.location.reload();
            });
        }}
        id="loginForm"
        className="border-blue-400 p-3 rounded-lg border-y-2 border-x-2 flex flex-col items-center justify-center"
      >
        <input
          type="text"
          name="userName"
          className="border-y-2 border-x-2 border-purple-400 rounded-lg"
        />
        <input
          type="password"
          name="password"
          className="border-y-2 border-x-2 border-purple-400 mt-5 rounded-lg"
        />
        <button className="bg-cyan-500 px-4 py-1 rounded-lg mt-4" type="submit">
          click Me !
        </button>
      </form>
    </div>
  );
}
