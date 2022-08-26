import Image from "next/image";
import Link from "next/link";

function Post({ date, image, title, slug }) {
  let { description, height, width, url } = image;

  return (
    <Link href={`/post/${slug}`}>
      <a>
        <div className="rounded-3xl bg-dark-green overflow-hidden relative">
          <Image alt={description} src={url} height={height} width={width} />
          <div className="font-serif">{description}</div>
          <div>
            <h2 className="font-serif">{title}</h2>
            <h3>{date?.substring(0, 10)}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Post;
