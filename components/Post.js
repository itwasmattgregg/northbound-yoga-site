import Image from "next/image";
import Link from "next/link";

function Post({ date, image, title, slug, description }) {
  let { description: imageDescription, url } = image;
  console.log(date);

  return (
    <Link href={`/post/${slug}`}>
      <a>
        <div className="rounded-3xl bg-dark-green overflow-hidden relative p-10 flex align-middle mb-20 gap-20">
          <div className="h-96 w-96 relative">
            <Image
              alt={imageDescription}
              src={url}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-gray text-3xl">{title}</h3>
            <div className="border-b w-20 border-b-gray my-10" />
            <p className="text-gray">{date?.substring(0, 10)}</p>
            <p className="text-gray">{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Post;
