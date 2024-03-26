// React
import React from "react";
// React

// CSS
import styles from "./profile.module.css";
// CSS

export const metadata = {
  title: "test",
};

const page = async () => {
  const data = await fetch(`http://localhost:1650/profile`, {
    method: "GET",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWZmNzJhN2JiN2RiY2MzZmJkMTk1YWEiLCJpYXQiOjE3MTEyODQwMDksImV4cCI6MTcxMTI4NzYwOX0.xXNjbdJbA7yALiA1rm23oATDY9eA5fj3ngZOPDvAqWk",
    },
  });
  if (!data.ok) return "مشکلی هنگام دریافت دیتا به وجود آمده";
  const res: { data: { userName: string } } = await data.json();
  console.log(res);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {res.data.userName}
    </div>
  );
};

export default page;
