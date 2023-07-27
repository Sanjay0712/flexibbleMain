"use client";
import { deleteProject, fetchToken } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function ProjectActions({ projectId }: { projectId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const handleDeleteProject = async () => {
    setIsDeleting(true);
    try {
      const { token } = await fetchToken();

      await deleteProject(projectId, token);
      router.push("/");
    } catch (error) {
    } finally {
      setIsDeleting(true);
    }
  };
  return (
    <>
      <Link
        href={`/edit-project/${projectId}`}
        className="flexCenter edit-action-btn"
      >
        <Image src="/pencile.svg" width={15} height={15} alt="edit" />
      </Link>

      <button
        onClick={handleDeleteProject}
        className={`flexCenter delete-action_btn  ${
          isDeleting ? "bg-gray" : "bg-primary-purple"
        }`}
      >
        <Image src="/trash.svg" width={15} height={15} alt="delete" />
      </button>
    </>
  );
}

export default ProjectActions;
