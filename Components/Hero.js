import Image from "next/image";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";

function Hero({ img, title, subTitle, text, links, theme }) {
  return (
    <div className="hero">
      <div className="content">
        <div className={`title ${theme === "dark" && "text-white"}`}>
          {title}
        </div>
        <div className={`subTitle ${theme === "dark" && "text-gray-200"}`}>
          {subTitle}
        </div>
        <div className={`text ${theme === "dark" && "text-gray-200"}`}>
          {text?.split?.("||").map((s, i) => (
            <span key={text + "-" + i} className="text-line">
              {s}
            </span>
          ))}
        </div>
        <div className="links">
          {links?.map?.((link, i) => (
            <a key={title + "-" + i} className="link group">
              <div className="group-hover:underline link-text">{link}</div>
              <BsChevronRight className="" />
            </a>
          ))}
        </div>
      </div>
      <Image src={"/images/" + img} layout="fill" objectFit="cover" />
    </div>
  );
}

export default Hero;
