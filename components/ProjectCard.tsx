import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  image: string;
  title: string;
  name: string;
  avatarUrl: string;
  userId: string;
};
function ProjectCard({ id, image, title, name, avatarUrl, userId }: Props) {
  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
      <Link
        href={`/project/${id}`}
        className="flexCenter group relative w-full h-full"
      >
        <Image
          src={image}
          width={414}
          height={314}
          className="w-full h-full object-cover rounded-2xl"
          alt="project image"
        />

        <div className="hidden group-hover:flex profile_card-title ">
          <p className="w-full">{title}</p>
        </div>
      </Link>

      <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
        <Link href={`/profile/${userId}`}>
          <div className="flexCenter gap-2">
            <Image
              src={avatarUrl}
              height={24}
              width={24}
              className="rounded-full"
              alt="Profile image"
            />

            <p>{name}</p>
          </div>
        </Link>

        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Image src="/hearth.svg" width={13} height={12} alt="heart" />
            <p className="text-sm">252</p>
          </div>

          <div className="flexCenter gap-2">
            <Image src="/eye.svg" width={13} height={12} alt="heart" />
            <p className="text-sm">252</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
