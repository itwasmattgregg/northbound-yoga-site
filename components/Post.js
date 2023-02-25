import Image from "next/legacy/image";
import Link from "next/link";

function Post({ date, image, title, slug, description }) {
  let { description: imageDescription, url } = image;

  return (
    <Link href={`/post/${slug}`}>
      <div className="relative flex gap-20 p-10 mb-20 overflow-hidden align-middle rounded-3xl bg-dark-green">
        <div className="relative h-96 w-96">
          <Image
            alt={imageDescription}
            src={url}
            fill
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-serif text-3xl text-gray">{title}</h3>
          <div className="w-20 my-10 border-b border-b-gray" />
          <p className="text-gray">{date?.substring(0, 10)}</p>
          <p className="text-gray">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Post;
