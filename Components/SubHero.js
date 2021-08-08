import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";
import { BsArrowUpRight } from "@react-icons/all-files/bs/BsArrowUpRight";
import Image from "next/image";
import { IoLogoApple } from "@react-icons/all-files/io/IoLogoApple";
function SubHero({ img, title, subTitle, links, theme, style, addAppleIcon }) {
  return (
    <div className="subHero">
      <div className="content">
        <div
          className={`title ${
            theme === "dark" && "text-white"
          } flex flex-grow  items-center justify-center`}
        >
          {addAppleIcon && <IoLogoApple />}
          {title}
        </div>
        <div className={`subTitle ${theme === "dark" && "text-gray-200"}`}>
          {subTitle}
        </div>
        <div className="links">
          {links?.map?.((link, i) => (
            <a key={title + "-" + i} className="link group">
              <div className="group-hover:underline link-text">{link}</div>
              {/.+(\-ext)$/.test(link) ? (
                <BsArrowUpRight />
              ) : (
                <BsChevronRight />
              )}
            </a>
          ))}
        </div>
      </div>
      <Image
        src={"/images/" + img}
        objectFit={style || "cover"}
        layout="fill"
      />
    </div>
  );
}

export default SubHero;
