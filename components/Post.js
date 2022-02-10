import Image from "next/image";

function Post({ date, image, title }) {
  let { file, description } = image;
  let { height, width } = file.details.image;

  return (
    <div className="rounded-3xl bg-dark-green overflow-hidden relative">
      <Image
        alt={description}
        src={`https:${file.url}`}
        height={height}
        width={width}
      />
      <div className="font-serif">{description}</div>
      <div>
        <h2 className="font-serif">{title}</h2>
        <h3>{date?.substring(0, 10)}</h3>
      </div>
    </div>
  );
}

export default Post;
