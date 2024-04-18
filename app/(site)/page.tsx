import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">This is header one</h1>
      <h2 className="mt-24 font-bold text-grey-700 text-3xl">Projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
              />
            )}
            <div>{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
