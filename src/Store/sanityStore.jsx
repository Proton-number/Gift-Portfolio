import { create } from "zustand";
import sanityClient from "../client";

export const sanityStore = create((set) => ({
  error: null,
  projects: null,
  fetchProjects: async () => {
    try {
      const query = `*[_type == "post"] | order(_createdAt asc) [0...4]{
        title, description,  author ->{
        name,
      }, slug, mainImage{asset->{_id, url}, alt}, body
      }`;
      const response = await sanityClient.fetch(query);
      if (!response || response.length === 0) {
        console.log("No blog posts found.");
      } else {
        console.log("Blog posts fetched:", response);
        set({ projects: response });
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  },

  //fetching single projects
  singleProject: null,
  fetchSingleProject: async (slug) => {
    try {
      const query = `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset -> {
                    _id,
                    url
                }
            },
            body,
        }`;
      const data = await sanityClient.fetch(query, { slug });

      set({ singleProject: data[0] });
      if (data[0]?.title) {
        document.title = data[0].title;
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  },
}));
