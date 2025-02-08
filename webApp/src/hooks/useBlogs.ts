import { useQuery } from "@tanstack/react-query";
import { blogsApi } from "@/api/blogs";

export const blogKeys = {
  published: () => ["blogs", "published"] as const,
};

export interface Blog {
  id: string;
  title: string;
  content: string;
  published: boolean;
  published_date: string;
  author: string;
  tags: string[];
  coverImage?: string;
}

export function usePublishedBlogs() {
  return useQuery<Blog[], Error>({
    queryKey: blogKeys.published(),
    queryFn: blogsApi.getPublished,
  });
}

export function useBlogDetail(id: string) {
  return useQuery<Blog, Error>({
    queryKey: ["blog", id],
    queryFn: () => blogsApi.getById(id),
  });
}

// Add other hooks as needed
// export function useBlogDetail(slug: string) { ... }
// export function useLatestBlogs() { ... }
