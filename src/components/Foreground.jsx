import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam optio labore.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam optio labore.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam optio labore.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam optio labore.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Karo Download beta", tagColor: "blue" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 z-[3] w-full h-full flex gap-5 flex-wrap"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
