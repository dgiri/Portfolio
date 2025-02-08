import { useParams } from "react-router-dom";
import { useBlogDetail } from "@/hooks/useBlogs";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function BlogDetails() {
  const { id } = useParams<{ id: string }>();

  const { data: blog, isLoading, isError } = useBlogDetail(id ?? "");

  if (!blog) return <div>No blog id provided</div>;
  if (isLoading) return <div>Loading post...</div>;
  if (isError) return <div>Error loading post</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
      <div className="max-w-4xl mx-auto p-4">
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="mb-6"
        >
          ← Back to Posts
        </Button>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-2xl">{blog.title}</CardTitle>
              {blog.published && (
                <span
                  className={`text-sm px-2 py-1 rounded-full ${
                    blog.published
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  }`}
                >
                  {blog.published ? "Published" : "Draft"}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(blog.published_date).toLocaleDateString()}
            </p>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
              {blog.content}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default BlogDetails;
