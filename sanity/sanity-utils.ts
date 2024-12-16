import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";
import clientConfig from "./config/client-config";
import { Page } from "../types/Page";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}
export async function getPage(): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"][0]{
      _id,
      _createdAt,
      title,
      occupation,
      yourName,
      introduction,
      frontend,
      backend,
      others,
      githubProfile,
      facebookProfile,
      toeicReadLisScore,
      toeicWriteSpeakScore,
      "pdfFile": pdfFile.asset->url,
      location,
      contactEmail
    }`
  );
}
